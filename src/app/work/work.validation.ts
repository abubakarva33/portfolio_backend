import mongoose from "mongoose";
import { z } from "zod";

const bodySchema = z
  .object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    img: z.string(),
    video: z.string().optional(),
    link: z.string(),
    gitLink: z.string().optional(),
    tags: z.array(z.string()),
    materialUsed: z.array(z.string()),
    keyFeatures: z.array(z.string()),
    projectType: z.string(),
    preferredIndex: z.number(),
  })
  .strict();

export const workCreateZodSchema = z.object({
  body: bodySchema,
});

export const workUpdateZodSchema = z.object({
  body: bodySchema.partial(),
});
