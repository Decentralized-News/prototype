import ArticleDetailSceleton from "./ArticleDetailSceleton.tsx";
import MainLayout from "../MainLayout.tsx";
import { useGetArticlesMutation } from "../../services/articleApi.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function ArticleDetail() {
    const [getArticle, { data: articleResponse }] = useGetArticlesMutation();
    const article = useSelector((state: RootState) => state.article.article);

    return (
        <MainLayout>
            <ArticleDetailSceleton
                title={article?.title}
                author={article?.author}
                authorOrigin={article?.authorOrigin}
                date={article?.createdAt}
                tag={article?.tag}
                content={article?.content}
            />
        </MainLayout>
    );
}

export default ArticleDetail;
