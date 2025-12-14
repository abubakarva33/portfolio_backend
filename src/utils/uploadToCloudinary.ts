import multer from "multer";

import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "abubakar375/portfolio",
    transformation: [{ width: 1024 }, { quality: "auto:eco" }, { fetch_format: "webp" }],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as Record<string, any>,
});

export const uploadCloudinary = multer({ storage });
