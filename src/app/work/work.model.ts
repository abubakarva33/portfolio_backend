import { Schema, model } from "mongoose";
import type { IWork } from "./work.interface";

const WorkSchema: Schema = new Schema<IWork>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    img: { type: String, required: true },
    video: String,
    link: String,
    gitLink: String,
    tags: [String],
    materialUsed: [String],
    keyFeatures: [String],
    projectType: { type: String, required: true },
    preferredIndex: { type: Number, required: true },
  },
  { timestamps: true }
);

const WorkModel = model<IWork>("Work", WorkSchema);

export default WorkModel;
