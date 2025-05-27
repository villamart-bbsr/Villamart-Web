import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postControllers.js";
import { authGuard, adminGuard, adminOrEmployeeGuard } from "../middleware/authMiddleware.js";

router.route("/").post(authGuard, adminOrEmployeeGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminOrEmployeeGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default router;
