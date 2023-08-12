import {TAG} from "../../utils/const.ts";
import {Card, Image} from "antd";
import {AiFillEye} from "react-icons/ai";
import {HiCursorClick} from "react-icons/hi";

interface ArticleProps {
    title: string;
    author: string;
    authorOrigin: string;
    date: string;
    tag: string;
    text: string;
}

const ArticleDetailSceleton = (props: ArticleProps) => {

    type TagMap = {
        [key: string]: typeof TAG[keyof typeof TAG];
    };

    const tagValue: TagMap = TAG;

    function getTagValue(tag: string) {
        return tagValue[tag];
    }

    const parts = props.text.split(' ');

    // Split the parts into two halves for the columns
    const middleIndex = Math.ceil(parts.length / 2);
    const leftColumnText = parts.slice(0, middleIndex).join(' ');
    const rightColumnText = parts.slice(middleIndex).join(' ');

    return (
        <div className="flex flex-wrap m-[5rem]">
            <div className="flex flex-wrap w-full gap-[5rem]">
                <Card className="rounded-2xl w-8/12 ">
                    <div className="ml-2 flex">
                        <button className="button-metric">
                            {<AiFillEye/>} {"1.7B"}
                        </button>
                        <button className="ml-2 button-metric">
                            {<HiCursorClick/>} {"10.2K"}
                        </button>
                    </div>
                    <div className="mt-2 mx-2 text-black text-5xl font-semibold line-clamp-2">
                        {props.title}
                    </div>
                    <div className="mx-2 mt-2 h-10 relative">
                        <div className="left-0 top-0 absolute text-black text-lg font-medium">
                            {props.author}
                        </div>
                        <div className="left-0 top-[21px] absolute text-black text-opacity-50 text-lg font-normal">
                            {props.authorOrigin}
                        </div>
                    </div>
                    <div className="ml-2 mt-6 flex">
                        <button className="button-detail-primary pointer-events-none">
                            {props.date}
                        </button>
                        <button className="ml-4 button-detail-secondary pointer-events-none">
                            {getTagValue(props.tag)}
                        </button>
                    </div>
                </Card>
                <div className={`w-3/12 rounded-2xl ${props.tag}-gradient`}>
                    <Image> ASD </Image>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-[3rem] gap-[5rem] mr-[1rem] mb-[80px]">
                <p className="text-justify w-5/12 whitespace-pre-line">{leftColumnText}</p>
                <p className="text-justify w-5/12 whitespace-pre-line">{rightColumnText}</p>
            </div>
        </div>
    )
}

export default ArticleDetailSceleton;
