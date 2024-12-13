import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";

const AddCommentBox = () => {
  return (
    <div className="flex flex-col">
      <Input />
      <TextArea />
      <button className="py-1 px-3 rounded-md bg-blue-200 cursor-pointer my-2 block mx-auto">
        Submit
      </button>
    </div>
  );
};

export default AddCommentBox;
