import { useCommentsContext } from "../contexts/CommentContext";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  const { comments, removeComment } = useCommentsContext();

  return (
    <div>
      <h1>All Comments</h1>
      <div className="grid gap-3">
        {comments?.map((comment) => {
          return <CommentCard data={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentSection;
