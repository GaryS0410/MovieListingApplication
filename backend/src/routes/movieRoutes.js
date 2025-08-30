import express from "express";
import { getPopularMoviesController } from "../controllers/movieApiController.js";

const router = express.Router();

router.get("/popular", getPopularMoviesController);

export default router;