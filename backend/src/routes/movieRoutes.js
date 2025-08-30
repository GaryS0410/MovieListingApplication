import express from "express";
import { getPopularMovies } from "../services/movieService.js";

const router = express.Router();

router.get("/popular", getPopularMovies);

export default router;