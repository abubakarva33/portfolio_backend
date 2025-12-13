import { Document } from "mongoose";

export interface ISkill extends Document {
  title: string;
  value: number;
  type: "design" | "development" | "academic" | "programming" | "training" | "job";
  details: string;
  endYear: number;
  institute: string;
  location: string;
  startYear: number;
}
