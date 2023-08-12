import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import Article from "../model/articleModel";

// ROUTE POST /api/article
const createArticle = async (req: Request, res: Response) => {
    try {
        const { hash, title, content, tag, author, authorOrigin } = req.body;
        const newArticle = await Article.create({
            hash,
            title,
            content,
            tag,
            author,
            authorOrigin,
        });
        console.log(newArticle);

        res.status(200).json({
            message: "Successfully submited article for verification",
        });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
};

// ROUTE GET /api/article
const getArticles = async (req: Request, res: Response) => {
    try {
        const { hashes } = req.body;
        console.log(`Requesting articles for hashes: ${hashes}`);

        const query = { hash: { $in: hashes } };

        const articles = await Article.find(query);
        console.log(articles);

        res.status(200).json({
            articles: articles,
        });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
};

export { createArticle, getArticles };
