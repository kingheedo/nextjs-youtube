'use client';
import { useTRPC } from '@/trpc/client';
// <-- hooks can only be used in client components
import { useSuspenseQuery } from '@tanstack/react-query';
export function ClientGreeting() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: 'kingheedo' }));
  return <div>{data.greeting}</div>;
}