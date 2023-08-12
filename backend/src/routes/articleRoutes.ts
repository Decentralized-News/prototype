import express from "express";
import { createArticle } from "../controller/articleController";

const router = express.Router();

router.post("/", createArticle);

export default router;
