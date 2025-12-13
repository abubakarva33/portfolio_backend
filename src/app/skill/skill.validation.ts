import { z } from "zod";

const bodySchema = z
  .object({
    title: z.string(),
    value: z.number(),
    type: z.enum(["design", "development", "academic", "programming", "training", "job"]),
  })
  .strict();

export const skillCreateZodSchema = z.object({
  body: bodySchema,
});

export const skillUpdateZodSchema = z.object({
  body: bodySchema.partial(),
});
