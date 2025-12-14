import { generateCrudRoutes, partialFilterMiddlewares } from "xmcrud";
import EducationModel from "./education.model";
import { Router } from "express";
import { zodValidator } from "../../middleware/zodValidator";
import { educationCreateZodSchema, educationUpdateZodSchema } from "./education.validation";

const partialFilterItems = ["title", "details"]; // only key from model (type: string)

const educationRouter = Router();

const curdRouter = generateCrudRoutes({
  mongooseModel: EducationModel,
  name: "education",
  middlewares: {
    getAll: [partialFilterMiddlewares(partialFilterItems)],
    create: [zodValidator(educationCreateZodSchema)],
    update: [zodValidator(educationUpdateZodSchema)], // middlewares are optional
    // removeMany: [],  // middlewares are optional
    // updateMany: [],  // middlewares are optional
    // getSingle: [],  // middlewares are optional
    // remove: [],  // middlewares are optional
  },
});

// Other custom routes

// educationRouter.get('/test', async (req, res) => {
//   const data = await EducationModel.find()
//   res.send(data)
// })

// must be end of router
educationRouter.use(curdRouter);

export default educationRouter;
