import {Router} from "express"
import serviceRouter from "./service/service.routes"
import workRouter from "./work/work.routes";
import skillRouter from "./skill/skill.routes";

const router = Router()

const moduleRoute =[
    {path: "/work", routes: workRouter, auth: false},
    {path: "/service", routes: serviceRouter, auth: false},
    {path: "/skill", routes: skillRouter, auth: false},
]

// router.use('/portfolio', portfolioRouter)
// router.use('/service', serviceRouter)

// moduleRoute.forEach((route) => (route.auth ? router.use(route.path, auth(), route.routes) : router.use(route.path, route.routes)));
moduleRoute.forEach((route) => (route.auth ? router.use(route.path,  route.routes) : router.use(route.path, route.routes)));


export default router