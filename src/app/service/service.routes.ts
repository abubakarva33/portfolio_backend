import { generateCrudRoutes, partialFilterMiddlewares } from "xmcrud";
import ServiceModel from "./service.model";
import { Router } from "express"


const partialFilterItems = ["title", "description"];

const serviceRouter = Router()

const curdRouter =  generateCrudRoutes({
  mongooseModel: ServiceModel,
  name: "service",
  middlewares: {
    getAll: [partialFilterMiddlewares(partialFilterItems)],
    // create: [],  // middlewares are optional
    // removeMany: [],  // middlewares are optional
    // updateMany: [],  // middlewares are optional
    // getSingle: [],  // middlewares are optional
    // update: [],  // middlewares are optional
    // remove: [],  // middlewares are optional
  },
});

// Other custom routes

// serviceRouter.get('/test', async (req, res) => {
//   const data = await ServiceModel.find()
//   res.send(data)
// })



// must be end of router 
serviceRouter.use(curdRouter)

export default serviceRouter;
