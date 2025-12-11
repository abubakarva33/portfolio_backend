

import { z } from "zod";

const bodySchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
}).strict();

export const serviceCreateZodSchema = z.object({
  body: bodySchema,
});

export const serviceUpdateZodSchema = z.object({
  body: bodySchema.partial(),
});


