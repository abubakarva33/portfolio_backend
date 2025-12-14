import { z } from "zod";

const bodySchema = z
  .object({
    type: z.enum(["design", "development"]),
    title: z.string(),
    value: z.number(),
  })
  .strict();

export const skillCreateZodSchema = z.object({
  body: bodySchema,
});

export const skillUpdateZodSchema = z.object({
  body: bodySchema.partial(),
});
