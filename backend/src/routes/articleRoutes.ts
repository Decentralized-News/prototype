import express from "express";
import { createArticle, getArticles } from "../controller/articleController";

const router = express.Router();

router.post("/get", getArticles);
router.post("/create", createArticle);

export default router;
