import { Router } from "express";
import serviceRouter from "./service/service.routes";
import workRouter from "./work/work.routes";
import skillRouter from "./skill/skill.routes";
import educationRouter from "./education/education.routes";
import { uploadCloudinary } from "../utils/uploadToCloudinary";

const router = Router();

const moduleRoute = [
  { path: "/work", routes: workRouter, auth: false },
  { path: "/service", routes: serviceRouter, auth: false },
  { path: "/skill", routes: skillRouter, auth: false },
  { path: "/education", routes: educationRouter, auth: false },
];

// router.use('/portfolio', portfolioRouter)
// router.use('/service', serviceRouter)

// moduleRoute.forEach((route) => (route.auth ? router.use(route.path, auth(), route.routes) : router.use(route.path, route.routes)));
moduleRoute.forEach((route) =>
  route.auth ? router.use(route.path, route.routes) : router.use(route.path, route.routes)
);

// image upload
router.post("/upload", uploadCloudinary.single("photo"), (req, res, next) => {
  try {
    const data = {
      uid: req.file?.filename,
      name: req.file?.filename.split("/").pop() + ".webp",
      url: req.file?.path,
      size: req.file?.size,
    };

    res.send({
      success: true,
      message: "File uploaded successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
