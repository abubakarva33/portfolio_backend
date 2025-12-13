import { Document } from "mongoose";

export interface IWork extends Document {
  title: string;
  description: string;
  shortDescription: string;
  img: string;
  video: string;
  link: string;
  gitLink: string;
  tags: string[];
  materialUsed: string[];
  keyFeatures: string[];
  projectType: string;
  preferredIndex: number;
}
