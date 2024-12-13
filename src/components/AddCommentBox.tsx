import { useState } from "react";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { useCommentsContext } from "../contexts/CommentContext";

const AddCommentBox = () => {
  const { addComment } = useCommentsContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addComment(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleAddComment}>
        <Input value={title} setValue={setTitle} />
        <TextArea value={description} setValue={setDescription} />

        <button
          type="submit"
          className="py-1 px-3 rounded-md bg-blue-200 cursor-pointer my-2 block mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommentBox;
