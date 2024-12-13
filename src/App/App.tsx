import AddCommentBox from "../components/AddCommentBox";
import CommentSection from "../components/CommentSection";
import { CommentsProvider } from "../contexts/CommentContext";
import "./App.css";

function App() {
  return (
    <CommentsProvider>
      <header></header>
      <main className="w-full max-w-[420px] min-w-[370px] mx-auto px-4 flex flex-col gap-2">
        <AddCommentBox />
        <CommentSection />
      </main>
    </CommentsProvider>
  );
}

export default App;
