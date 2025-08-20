import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { TRPCError } from "@trpc/server";
import {
  TRPC_ERROR_CODES_BY_KEY,
  TRPC_ERROR_CODES_BY_NUMBER,
} from "@trpc/server/unstable-core-do-not-import";
export const appRouter = createTRPCRouter({
  hello: baseProcedure //일반적인 퍼블릭 프로시저
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      // throw new TRPCError({
      //   code: TRPC_ERROR_CODES_BY_NUMBER[TRPC_ERROR_CODES_BY_KEY.BAD_REQUEST],
      // });
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
