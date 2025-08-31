import express from "express";
import { getPopularMoviesController, getSpecificMovieController } from "../controllers/movieApiController.js";

const router = express.Router();

router.get("/popular", getPopularMoviesController);
router.get("/specific/:movieId", getSpecificMovieController);

export default router;