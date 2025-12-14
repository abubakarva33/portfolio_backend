import { Schema, model } from "mongoose";
import type { IEducation } from "./education.interface";

const EducationSchema: Schema = new Schema<IEducation>(
  {
    type: {
      type: String,
      enum: ["academic", "programming", "training", "job"],
      required: true,
    },
    title: { type: String, required: true },
    details: { type: String, required: true },
    institute: { type: String, required: true },
    location: { type: String, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
  },
  { timestamps: true }
);

const EducationModel = model<IEducation>("Education", EducationSchema);

export default EducationModel;
