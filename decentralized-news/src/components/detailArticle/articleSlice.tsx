import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Article } from "../../models/CreateArticleRequest";

const slice = createSlice({
    name: "article",
    initialState: { article: null } as {
        article: Article | null;
    },
    reducers: {
        setCurrentArticle: (
            state,
            { payload: { article } }: PayloadAction<{ article: Article }>
        ) => {
            state.article = article;
        },
    },

    extraReducers: (builder) => {},
});

export const { setCurrentArticle } = slice.actions;

export default slice.reducer;

export const selectCurrentArticle = (state: RootState) => state.article.article;
