import mongoose from "mongoose";
import { Schema, Model } from "mongoose";

interface IArticle {
    hash: string;
    title: string;
    content: string;
    tag: string;
    author: string;
    authorOrigin: string;
}

interface IArticleMethods {}

type ArticleModel = Model<IArticle, {}, IArticleMethods>;

const articleSchema: Schema<IArticle, ArticleModel, IArticleMethods> =
    new Schema<IArticle, ArticleModel, IArticleMethods>(
        {
            hash: { type: String, required: true, unique: true },
            title: { type: String, required: true, unique: false },
            content: { type: String, required: true, unique: false },
            tag: { type: String, required: true, unique: false },
            author: { type: String, required: true, unique: false },
            authorOrigin: { type: String, required: true, unique: false },
        },
        {
            timestamps: true,
        }
    );

const Article: ArticleModel = mongoose.model<IArticle, ArticleModel>(
    "Article",
    articleSchema
);

export default Article;
