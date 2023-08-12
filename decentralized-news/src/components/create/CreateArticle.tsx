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

const { TextArea } = Input;

const CreateArticle = () => {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState(["Politics"]);
    const { address } = useAccount();
    const [articleHash, setArticleHash] = useState(
        "0xf12b5e2f8e4a8d0b76d8e4f97b2a5e43f065e9f29b9d2920849a95baf4567d59"
    );

    const options: SelectProps["options"] = [
        { value: "Politics", label: "Politics" },
        { value: "Economics", label: "Economics" },
        { value: "Science", label: "Science" },
        { value: "Sports", label: "Sports" },
    ];

    const createArticle = async () => {
        if (articleHash !== "") {
            try {
                const { hash } = await writeContract({
                    account: address,
                    address: DECENTNEWS__ADDRESS,
                    abi: DecentnewsABI.abi,
                    functionName: "createArticle",
                    args: [articleHash],
                });
                console.log(hash);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        // setTags(value.map { $0.toString});
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: any) => {
        setContent(e.target.value);
    };

    const postArticle = () => {
        const article = { title, tags, content };
        console.log(article);
        createArticle();
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
                        <div className="mx-2 mt-2 h-10 relative">
                            <div className="left-0 top-0 absolute text-black text-lg font-medium">
                                {"props.author"}
                            </div>
                            <div className="left-0 top-[21px] absolute text-black text-opacity-50 text-lg font-normal">
                                {"props.authorOrigin"}
                            </div>
                        </div>
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