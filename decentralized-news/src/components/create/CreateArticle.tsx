import { useState } from "react";
import MainLayout from "../MainLayout";
import { Input } from "antd";
import { Select } from "antd";
import type { SelectProps } from "antd";
import UploadImageCard from "./UploadImageCard";
import { writeContract } from "wagmi/actions";
import { useAccount } from "wagmi";

import { DECENTNEWS__ADDRESS } from "../../utils/constants";
import DecentnewsABI from "../../utils/DecentNewsAbi.json";
import { useCreateArticleMutation } from "../../services/articleApi";
const { TextArea } = Input;
//@ts-ignore
import { SHA256 } from "crypto-js";
import { Article } from "../../models/CreateArticleRequest";
import usenotification from "../../utils/usenotification.ts";

const CreateArticle = () => {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [authorOrigin, setAuthorOrigin] = useState("");
    const [tags, setTags] = useState("Politics");
    const { address } = useAccount();
    const [createArticle, {}] = useCreateArticleMutation();
    const notification = usenotification();

    const options: SelectProps["options"] = [
        { value: "Politics", label: "Politics" },
        { value: "Economics", label: "Economics" },
        { value: "Science", label: "Science" },
        { value: "Sports", label: "Sports" },
    ];

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setTags(value[0].toString());
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: any) => {
        setContent(e.target.value);
    };

    function stringToBytes32(input: string) {
        const encoder = new TextEncoder();
        const inputBytes = encoder.encode(input);
        const paddedBytes = new Uint8Array(32);
        paddedBytes.set(inputBytes);

        return (
            "0x" +
            Array.from(paddedBytes)
                .map((byte) => byte.toString(16).padStart(2, "0"))
                .join("")
        );
    }

    const postArticle = async () => {
        const articleHash = stringToBytes32(title + content)?.toString() ?? "";
        console.log(articleHash);

        if (articleHash === "") {
            return;
        }

        const article: Article = {
            hash: articleHash,
            title,
            tag: tags[0],
            content,
            author: author,
            authorOrigin: authorOrigin,
        };
        console.log(article);

        try {
            const { hash } = await writeContract({
                account: address,
                address: DECENTNEWS__ADDRESS,
                abi: DecentnewsABI.abi,
                functionName: "createArticle",
                args: [articleHash],
            });
            console.log(hash);

            await createArticle(article);
            notification(
                "success",
                "New Article created",
                "Your article is now tested by the community"
            );
        } catch (err) {
            console.error(err);
            notification(
                "error",
                "Article creation failed",
                "Please try again"
            );
        }
    };

    return (
        <MainLayout>
            <div className="mr-16 ml-16 mt-5 flex flex-col items-start">
                <div className="hidden md:flex items-start justify-between flex-nowrap gap-16">
                    <div>
                        <Input
                            placeholder="Article Title"
                            className="border-none focus:border-none focus:ring-0 text-5xl font-bold"
                            value={title}
                            onChange={handleTitleChange}
                        ></Input>
                        <Input
                            placeholder="Author Name"
                            className="border-none focus:border-none focus:ring-0 text-black text-lg font-medium"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        ></Input>
                        <Input
                            placeholder="Author Name"
                            className="border-none focus:border-none focus:ring-0 text-black text-opacity-50 text-lg font-normal"
                            value={authorOrigin}
                            onChange={(e) => setAuthorOrigin(e.target.value)}
                        ></Input>
                        <Select
                            className="mx-2 mt-6"
                            mode="tags"
                            style={{ width: "100%" }}
                            placeholder="Tags"
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <UploadImageCard />
                </div>
                <TextArea
                    rows={4}
                    placeholder="Write Article"
                    className="mx-2 mt-12"
                    value={content}
                    onChange={handleContentChange}
                />
                <button
                    className="mx-2 mt-6 button-primary bg-gradient-to-r from-gray-500 to-gray-300 text-white"
                    onClick={postArticle}
                >
                    Post Article
                </button>
            </div>
        </MainLayout>
    );
};

export default CreateArticle;
