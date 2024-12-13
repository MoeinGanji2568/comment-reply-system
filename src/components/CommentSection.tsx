import { useCommentsContext } from "../contexts/CommentContext";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  const { comments, removeComment } = useCommentsContext();

  return (
    <div>
      <h1>All Comments</h1>
      {comments?.map((comment) => {
        return (
          <CommentCard
            id={comment.id}
            title={comment.title}
            description={comment.description}
          />
        );
      })}
    </div>
  );
};

export default CommentSection;
