import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import Article from "../model/articleModel";

// ROUTE POST /api/article
// adds new user
const createArticle = async (req: Request, res: Response) => {
    try {
        const { title, content, tag, author, authorOrigin } = req.body;
        const newArticle = await Article.create({
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

export { createArticle };
