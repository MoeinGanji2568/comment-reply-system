import { IoMdMore } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Comment } from "../contexts/CommentContext";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { useState } from "react";

type CommentCardProps = {
  data: Comment;
};

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
  const { id, title, description, answer } = data;

  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);

  const isAnswer: boolean = answer?.length >= 1;
  console.log(isAnswer);
  return (
    <div className={` border border-solid rounded-md bg-white p-2`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span>{title}</span>
          <span className="text-gray-400">5h ago</span>
        </div>
        <IoMdMore />
      </div>
      <div className="my-2">
        <p>{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="p-1 border border-solid rounded-md">
            <MdOutlineEmojiEmotions className="text-gray-400" />
          </span>
          <button
            className="text-gray-400"
            onClick={() => setIsReplyOpen(!isReplyOpen)}
          >
            reply
          </button>
        </div>
      </div>
      <form
        className={`p-2 transition-all duration-300 ease-out ${
          isReplyOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"
        }`}
      >
        <Input />
        <TextArea />
        <button
          type="submit"
          className="py-1 px-3 rounded-md bg-blue-200 cursor-pointer my-2 block mx-auto"
        >
          Submit
        </button>
      </form>
      {isAnswer &&
        answer?.map((answers) => {
          return <CommentCard data={answers} />;
        })}
    </div>
  );
};

export default CommentCard;
