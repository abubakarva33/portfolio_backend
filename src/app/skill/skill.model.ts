import { Schema, model } from "mongoose";
import type { ISkill } from "./skill.interface";


const SkillSchema: Schema = new Schema<ISkill>(
  {
    title: String,
    value: Number,
    type: { type: String, enum: ["design", "development", "academic", "programming", "training","job"] },
  },
  { timestamps: true },
);

const SkillModel = model<ISkill>("Skill", SkillSchema);

export default SkillModel;
