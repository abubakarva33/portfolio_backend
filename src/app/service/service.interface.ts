
import { Document } from "mongoose";

export interface IService extends Document {
      title: string
    description: string
    img: string
}
