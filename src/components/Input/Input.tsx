interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Input: React.FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <label htmlFor="">Title</label>
      <input
        className="rounded-md p-1"
        type="text"
        placeholder="Title ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default Input;
