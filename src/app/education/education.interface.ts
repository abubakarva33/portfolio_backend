import { Document } from "mongoose";

export interface IEducation extends Document {
  type: "academic" | "programming" | "training" | "job";
  title: string;
  details: string;
  institute: string;
  location: string;
  startYear: number;
  endYear: number;
}
