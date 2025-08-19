import db from "@/db";
import { users } from "@/db/schema";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const SIGNING_SECERET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!SIGNING_SECERET) {
    throw new Error("에러 발생: SIGNING_SECRET 키가 누락되었습니다.");
  }
  try {
    const evt = await verifyWebhook(req, {
      signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
    });

    if (evt.type === "user.created") {
      const { data } = evt;

      await db.insert(users).values({
        clerkID: data.id,
        name: `${data.first_name} ${data.last_name}`,
        imageUrl: data.image_url,
      });
    }

    if (evt.type === "user.deleted") {
      const { data } = evt;

      if (!data.id) {
        return new Response("사용자 아이디가 존재하지 않습니다.", {
          status: 400,
        });
      }
      await db.delete(users).where(eq(users.clerkID, data.id));
    }

    if (evt.type === "user.updated") {
      const { data } = evt;

      await db
        .update(users)
        .set({
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        })
        .where(eq(users.clerkID, data.id));
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
