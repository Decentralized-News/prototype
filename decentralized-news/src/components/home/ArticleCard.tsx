import { Card } from "antd";
import { AiFillEye } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";

interface ArticleCardProps {
  title: string;
  author: string;
  authorOrigin: string;
  date: string;
  tag: string;
}

function ArticleCard(props: ArticleCardProps) {
  return (
    <Card className="bg-gradient-to-r from-primary to-amber-500 rounded-2xl w-full">
      <div className="ml-2 flex">
        <button className="button-metric">
          {<AiFillEye />} {"1.7B"}
        </button>
        <button className="ml-2 button-metric">
          {<HiCursorClick />} {"10.2K"}
        </button>
      </div>
      <div className="mt-2 mx-2 text-white text-5xl font-semibold line-clamp-2">
        {props.title}
      </div>
      <div className="mx-2 mt-2 h-10 relative">
        <div className="left-0 top-0 absolute text-white text-lg font-medium">
          {props.author}
        </div>
        <div className="left-0 top-[21px] absolute text-white text-opacity-50 text-lg font-normal">
          {props.authorOrigin}
        </div>
      </div>
      <div className="ml-2 mt-6 flex">
        <button className="button-primary pointer-events-none">
          {props.date}
        </button>
        <button className="ml-4 button-secondary pointer-events-none">
          {props.tag}
        </button>
      </div>
    </Card>
  );
}

export default ArticleCard;
