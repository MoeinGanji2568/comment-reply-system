interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const TextArea: React.FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <label htmlFor="">Description</label>
      <textarea
        className="rounded-md p-1"
        placeholder="Description ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default TextArea;
