import express from "express";
import {
  watch,
  getEdit,
  search,
  getUpload,
  postUpload,
  deleteVideo,
  homePage,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", homePage);
videoRouter.get("/:id(\\d+)", watch);
// same url
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
