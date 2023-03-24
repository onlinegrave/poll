import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  poll: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  createOne: publicProcedure
    .input(
      z.object({
        title: z.string(),
        name: z.string(),
        min: z.string().nullable(),
        max: z.string().nullable()
      })
    )
    .mutation(({ input, ctx }) => {
      console.log(input);
      ctx.prisma.poll.create({
        data: {
          title: input.title,
          name: input.name,

        },
      });
    }),
  vote: publicProcedure
    .input(
      z.object({
        title: z.string(),
        name: z.string(),
        min: z.string().nullable(),
        max: z.string().nullable(),
      })
    )
    .mutation(() => {
      console.log('');
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.poll.findMany();
  }),
});
