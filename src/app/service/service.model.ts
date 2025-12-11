import { Schema, model } from "mongoose";
import type { IService } from "./service.interface";


const ServiceSchema: Schema = new Schema<IService>(
  {
      title: {type: String, required: true},
    description:  {type: String, required: true},
    img: {type: String, required: true},
  },
  { timestamps: true },
);

const ServiceModel = model<IService>("Service", ServiceSchema);

export default ServiceModel;
