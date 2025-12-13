import { generateCrudRoutes, partialFilterMiddlewares } from "xmcrud";
import WorkModel from "./work.model";
import { Router } from "express";
import { zodValidator } from "../../middleware/zodValidator";
import { workCreateZodSchema, workUpdateZodSchema } from "./work.validation";

const partialFilterItems = ["title", "description", "shortDescription", "tags"]; // only key from model (type: string)

const workRouter = Router();

const curdRouter = generateCrudRoutes({
  mongooseModel: WorkModel,
  name: "work", //! name same as route name
  // ioredis: redis,  // optional if has redis in app
  middlewares: {
    getAll: [partialFilterMiddlewares(partialFilterItems)],
    create: [zodValidator(workCreateZodSchema)], // middlewares are optional
    update: [zodValidator(workUpdateZodSchema)], // middlewares are optional
    // removeMany: [],  // middlewares are optional
    // updateMany: [],  // middlewares are optional
    // getSingle: [],  // middlewares are optional
    // remove: [],  // middlewares are optional
  },
});

// Other custom routes

// workRouter.get('/test', async (req, res) => {
//   const data = await WorkModel.find()
//   res.send(data)
// })

// must be end of router
workRouter.use(curdRouter);

export default workRouter;
