import { Document } from "mongoose";
export interface ISkill extends Document {
  type: "design" | "development";
  title: string;
  value: number;
}
