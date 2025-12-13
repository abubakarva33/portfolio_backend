import { Document } from "mongoose";

interface ISkillBase extends Document {
  type: "design" | "development" | "academic" | "programming" | "training" | "job";
}

export interface ISkillDesign extends ISkillBase {
  type: "design";
  title: string;
  value: number;
}

export interface ISkillDevelopment extends ISkillBase {
  type: "development";
  title: string;
  value: number;
}

export interface ISkillAcademic extends ISkillBase {
  type: "academic";
  title: string;
  details: string;
  institute: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface ISkillProgramming extends ISkillBase {
  type: "programming";
  title: string;
  details: string;
  institute: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface ISkillTraining extends ISkillBase {
  type: "training";
  title: string;
  value?: number;
  details?: string;
  endYear?: number;
  institute?: string;
  location?: string;
  startYear?: number;
}

export interface ISkillJob extends ISkillBase {
  type: "job";
  title: string;
  value?: number;
  details?: string;
  endYear?: number;
  institute?: string;
  location?: string;
  startYear?: number;
}

export type ISkill =
  | ISkillDesign
  | ISkillDevelopment
  | ISkillAcademic
  | ISkillProgramming
  | ISkillTraining
  | ISkillJob;
