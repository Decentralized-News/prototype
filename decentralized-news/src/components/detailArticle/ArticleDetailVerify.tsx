import ArticleDetailSceleton from "./ArticleDetailSceleton.tsx";
import MainLayout from "../MainLayout.tsx";
import { Button } from "antd";
import { writeContract } from "wagmi/actions";
import { useAccount, useContractRead } from "wagmi";
import React, { useEffect } from "react";
import { DECENTNEWS__ADDRESS } from "../../utils/constants.tsx";
import DecentnewsABI from "../../utils/DecentNewsAbi.json";
import { useState } from "react";
import { useGetArticlesMutation } from "../../services/articleApi.tsx";

function ArticleDetailVerify() {
    const { address } = useAccount();
    const [assignedArticle, setAssignedArticle] = useState("");
    const [getArticle, { data: articleResponse }] = useGetArticlesMutation();

    //@ts-ignore
    const { data, isError, isLoading } = useContractRead({
        address: DECENTNEWS__ADDRESS,
        abi: DecentnewsABI.abi,
        functionName: "getAssignedArticle",
        args: [address],
        onSuccess(data) {
            //@ts-ignore
            setAssignedArticle(data);
        },
        onError(error) {
            console.log(error);
        },
    });

    useEffect(() => {
        console.log(data);
        const hashes: any[] = [data];
        getArticle({ hashes });
    }, [isLoading]);

    const requestReview = async () => {
        try {
            const { hash } = await writeContract({
                account: address,
                address: DECENTNEWS__ADDRESS,
                abi: DecentnewsABI.abi,
                functionName: "requestReview",
                args: [],
            });
            console.log(hash);
        } catch (err) {
            console.error(err);
        }
    };

    const submitArticleVote = async (vote: boolean) => {
        try {
            const { hash } = await writeContract({
                account: address,
                address: DECENTNEWS__ADDRESS,
                abi: DecentnewsABI.abi,
                functionName: "submitVote",
                args: [vote],
            });
            console.log(hash);
        } catch (err) {
            console.error(err);
        }
    };

    const approveButton = (
        <Button
            shape="round"
            type="primary"
            className={"bg-primary"}
            onClick={() => submitArticleVote(true)}
        >
            Approve
        </Button>
    );
    const rejectButton = (
        <Button
            shape="round"
            className="text-white"
            onClick={() => submitArticleVote(false)}
        >
            Reject
        </Button>
    );

    return (
        <MainLayout>
            <div className="justify-center">
                {data !==
                    "0x0000000000000000000000000000000000000000000000000000000000000000" &&
                    !isError && (
                        <React.Fragment>
                            <div className="">
                                <ArticleDetailSceleton
                                    title={
                                        articleResponse?.articles.at(0)
                                            ?.title ?? ""
                                    }
                                    author={
                                        articleResponse?.articles.at(0)
                                            ?.author ?? ""
                                    }
                                    authorOrigin={
                                        articleResponse?.articles.at(0)
                                            ?.authorOrigin ?? ""
                                    }
                                    date={
                                        articleResponse?.articles.at(0)
                                            ?.createdAt ?? ""
                                    }
                                    tag={
                                        articleResponse?.articles.at(0)?.tag ??
                                        "politics"
                                    }
                                    content={
                                        articleResponse?.articles.at(0)
                                            ?.content ?? ""
                                    }
                                />
                            </div>
                            <div
                                className={`flex flex-wrap bottom-0 fixed w-10/12  rounded-2xl ml-[7rem] mb-[5rem] mr-[5rem] border ${
                                    articleResponse?.articles.at(0)?.tag ??
                                    "politics"
                                }-gradient`}
                            >
                                <div>
                                    <div className="mt-2 mx-2 text-white text-3xl font-semibold line-clamp-2">
                                        Approve Article
                                    </div>
                                    <div className="mt-2 mx-2 text-white  line-clamp-2">
                                        The article does not spread false
                                        information and does not violate any
                                        laws, human rights or maliciously harms
                                        third parties.
                                    </div>
                                </div>
                                <div className="md:flex flex-nowrap w-full justify-end gap-5 p-4 mr-5 ">
                                    {approveButton}
                                    {rejectButton}
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                {data ===
                    "0x0000000000000000000000000000000000000000000000000000000000000000" && (
                    <Button onClick={() => requestReview()}>
                        Request Review
                    </Button>
                )}
            </div>
        </MainLayout>
    );
}

export default ArticleDetailVerify;
