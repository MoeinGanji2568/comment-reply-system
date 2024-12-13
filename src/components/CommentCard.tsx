import { IoMdMore } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Comment } from "../contexts/CommentContext";

type CommentCardProps = {
  data: Comment;
};

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
  const { id, title, description, answer } = data;
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
          <button className="text-gray-400">reply</button>
        </div>
      </div>
      {isAnswer &&
        answer?.map((answers) => {
          return <CommentCard data={answers} />;
        })}
    </div>
  );
};

export default CommentCard;
