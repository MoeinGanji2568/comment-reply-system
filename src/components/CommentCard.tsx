import { IoMdMore } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const CommentCard = () => {
  return (
    <div className="border border-solid rounded-md bg-white p-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span>Moein</span>
          <span className="text-gray-400">5h ago</span>
        </div>
        <IoMdMore />
      </div>
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam
          magnam cumque, aspernatur, dolorum officiis animi veniam culpa rem
          necessitatibus distinctio eaque officia corporis vitae, ea maxime
          aperiam tenetur? Ex.
        </p>
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
