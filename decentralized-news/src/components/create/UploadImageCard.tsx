import { Card } from "antd";
import { AiFillEye } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};

function UploadImageCard() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? (
                <LoadingOutlined className="text-white font-bold text-3xl" />
            ) : (
                <PlusOutlined className="text-white font-bold text-3xl" />
            )}
            <div
                style={{ marginTop: 8 }}
                className="text-white font-medium text-lg"
            >
                Upload
            </div>
        </div>
    );

    return (
        <Card className="bg-gradient-to-r from-primary to-amber-500 rounded-2xl w-full">
            <div className="ml-2 flex justify-end">
                <button className="button-metric">
                    {<AiFillEye />} {"0"}
                </button>
                <button className="ml-2 button-metric">
                    {<HiCursorClick />} {"0"}
                </button>
            </div>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </Card>
    );
}

export default UploadImageCard;
