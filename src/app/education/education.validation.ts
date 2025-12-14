import { z } from "zod";

const bodySchema = z
  .object({
    type: z.enum(["academic", "programming", "training", "job"]),
    title: z.string(),
    details: z.string(),
    institute: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
  })
  .strict();

export const educationCreateZodSchema = z.object({
  body: bodySchema,
});

export const educationUpdateZodSchema = z.object({
  body: bodySchema.partial(),
});
