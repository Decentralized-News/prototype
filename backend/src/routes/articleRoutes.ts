import express from "express";
import { createArticle, getArticles } from "../controller/articleController";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);

export default router;
