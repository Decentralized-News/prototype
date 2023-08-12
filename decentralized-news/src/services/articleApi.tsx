import {
    Article,
    ArticleGetRequest,
    ArticleGetResponse,
} from "../models/CreateArticleRequest";
import { api } from "./api";

const articleApi = api.injectEndpoints({
    endpoints: (build) => ({
        getArticles: build.mutation<ArticleGetResponse, ArticleGetRequest>({
            query: (hashes) => ({
                url: `/article/get`,
                method: "POST",
                body: hashes,
                headers: {
                    "Content-type": "application/json",
                },
            }),
        }),
        createArticle: build.mutation<{ message: string }, Article>({
            query: (article) => ({
                url: "/article/create",
                method: "POST",
                body: article,
                headers: {
                    "Content-type": "application/json",
                },
            }),
        }),
    }),
});

export const { useGetArticlesMutation, useCreateArticleMutation } = articleApi;
