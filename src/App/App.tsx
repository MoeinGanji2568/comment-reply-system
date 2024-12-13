import AddCommentBox from "../components/AddCommentBox";
import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main className="w-full max-w-[400px] min-w-[350px] mx-auto px-4 flex flex-col gap-2">
        <AddCommentBox />
      </main>
    </>
  );
}

export default App;
