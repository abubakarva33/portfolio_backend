import { z } from "zod";

const designSchema = z
  .object({
    title: z.string(),
    value: z.number(),
    type: z.literal("design"),
  })
  .strict();

const developmentSchema = z
  .object({
    title: z.string(),
    value: z.number(),
    type: z.literal("development"),
  })
  .strict();

const academicSchema = z
  .object({
    title: z.string(),
    details: z.string(),
    institute: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    type: z.literal("academic"),
  })
  .strict();

const programmingSchema = z
  .object({
    title: z.string(),
    details: z.string(),
    institute: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    type: z.literal("programming"),
  })
  .strict();

const trainingSchema = z
  .object({
    title: z.string(),
    details: z.string(),
    institute: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    type: z.literal("programming"),
  })
  .strict();

const jobSchema = z
  .object({
    title: z.string(),
    details: z.string(),
    institute: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    type: z.literal("programming"),
  })
  .strict();

const bodySchema = z.discriminatedUnion("type", [
  designSchema,
  developmentSchema,
  academicSchema,
  programmingSchema,
  trainingSchema,
  jobSchema,
]);

export const skillCreateZodSchema = bodySchema;

const createUpdateSchema = (schema: z.ZodObject, type: string) =>
  schema
    .partial()
    .extend({ type: z.literal(type) })
    .strict();

export const skillUpdateZodSchema = z.discriminatedUnion("type", [
  createUpdateSchema(designSchema, "design"),
  createUpdateSchema(developmentSchema, "development"),
  createUpdateSchema(academicSchema, "academic"),
  createUpdateSchema(programmingSchema, "programming"),
  createUpdateSchema(trainingSchema, "training"),
  createUpdateSchema(jobSchema, "job"),
]);
