import MainLayout from "../MainLayout";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_APPROVED_ARTICLES } from "../../utils/constants";
import { useEffect } from "react";
import { useGetArticlesMutation } from "../../services/articleApi";
import { ArticleGetRequest } from "../../models/CreateArticleRequest";

const HomePage = () => {
    //@ts-ignore
    const { loading, error, data } = useQuery(GET_APPROVED_ARTICLES);

    const [getArticles, { data: articlesResponse, isLoading, isError }] =
        useGetArticlesMutation();

    useEffect(() => {
        console.log(data?.articleApproveds);
        //@ts-ignore
        const hashes = data?.articleApproveds.map((article) => article.hash);
        getArticles({ hashes: hashes });
    }, [loading]);

    return (
        <MainLayout>
            <div className="mr-16 ml-16 mt-5">
                <Link
                    to={`/item-details?itemId=1234`}
                    key={0}
                    id="top"
                    className="flex flex-col transform transition-transform duration-200 hover:scale-105 border-cgrey"
                >
                    <ArticleCard
                        title="Sudden earthquake in the middle east"
                        author="Clair Lacrosse"
                        authorOrigin="New York Times"
                        date="Aug 11, 2023"
                        tag="politics"
                    />
                </Link>
                <div className="mt-10 text-black text-5xl font-semibold w-full line-clamp-2 pb-5 ">
                    Top stories curated,
                    <br /> just for you
                </div>
                <div className="grid grid-cols-2 justify-center gap-10 mt-5" id="all">
                    {articlesResponse?.articles?.map((article, index) => (
                        <Link
                            to={`/item-details?itemId=${article?.hash}`}
                            key={index}
                            className="flex transform transition-transform duration-200 hover:scale-105 border-cgrey"
                        >
                            <ArticleCard
                                title={article.title}
                                author={article.author}
                                authorOrigin={article.authorOrigin}
                                date={new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }).format(new Date(article.createdAt))}
                                tag={article.tag}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
