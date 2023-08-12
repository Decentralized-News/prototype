import MainLayout from "../MainLayout";
import ArticleCard from "./ArticleCard";
import {Link} from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { GET_APPROVED_ARTICLES } from "../../utils/constants";
import { useEffect } from "react";
const HomePage = () => {
    //@ts-ignore
    const {loading,error,data} = useQuery(GET_APPROVED_ARTICLES);
    
    useEffect(() => {
        console.log(data.articleApproveds);
      },[loading]);
    
    const articles = [
        {
            articleId: "1234",
            title: "Sudden earthquake in the middle east",
            author: "Clair Lacrosse",
            authorOrigin: "New York Times",
            date: "Aug 11, 2023",
            tag: "politics"
        },
        {
            articleId: "1234",
            title: "Sudden earthquake in the middle east",
            author: "Clair Lacrosse",
            authorOrigin: "New York Times",
            date: "Aug 11, 2023",
            tag: "politics"
        },
        {
            articleId: "1234",
            title: "Sudden earthquake in the middle east",
            author: "Clair Lacrosse",
            authorOrigin: "New York Times",
            date: "Aug 11, 2023",
            tag: "politics"
        },
        {
            articleId: "1234",
            title: "Sudden earthquake in the middle east",
            author: "Clair Lacrosse",
            authorOrigin: "New York Times",
            date: "Aug 11, 2023",
            tag: "politics"
        },
    ]
    return (
        <MainLayout>
            <div className="mr-16 ml-16 mt-5">
                <Link
                    to={`/item-details?itemId=1234`}
                    key={0}
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
                <div className="mt-10 text-black text-5xl font-semibold w-3/6 line-clamp-2 pb-5 ">
                    Top stories curated by AI,
                    just for you
                </div>
                <div className="grid grid-cols-2 justify-center gap-10 mt-5">
                    {articles?.map((article, index) => (
                        <Link
                            to={`/item-details?itemId=${article?.articleId}`}
                            key={index}
                            className="flex transform transition-transform duration-200 hover:scale-105 border-cgrey"
                        >
                            <ArticleCard
                                title={article.title}
                                author={article.author}
                                authorOrigin={article.authorOrigin}
                                date={article.date}
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
