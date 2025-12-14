import { generateCrudRoutes, partialFilterMiddlewares } from "xmcrud";
import SkillModel from "./skill.model";
import { Router } from "express";
import { zodValidator } from "../../middleware/zodValidator";
import { skillCreateZodSchema, skillUpdateZodSchema } from "./skill.validation";

const partialFilterItems = ["title"];

const skillRouter = Router();

const curdRouter = generateCrudRoutes({
  mongooseModel: SkillModel,
  name: "skill", //! name same as route name
  middlewares: {
    getAll: [partialFilterMiddlewares(partialFilterItems)],
    create: [zodValidator(skillCreateZodSchema)],
    update: [zodValidator(skillUpdateZodSchema)],
    // removeMany: [],  // middlewares are optional
    // updateMany: [],  // middlewares are optional
    // getSingle: [],  // middlewares are optional
    // remove: [],  // middlewares are optional
  },
});

// Other custom routes

// skillRouter.get('/test', async (req, res) => {
//   const data = await SkillModel.find()
//   res.send(data)
// })

// must be end of router
skillRouter.use(curdRouter);

export default skillRouter;
