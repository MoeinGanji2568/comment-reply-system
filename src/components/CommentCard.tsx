import { IoMdMore } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Comment } from "../contexts/CommentContext";

const CommentCard: React.FC<Comment> = ({ id, title, description }) => {
  return (
    <div className="border border-solid rounded-md bg-white p-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span>{id}</span>
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
    </div>
  );
};

export default CommentCard;
