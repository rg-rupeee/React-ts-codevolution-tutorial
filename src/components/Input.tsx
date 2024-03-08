type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
    <input type='text' value={props.value || props.value} onChange={props.handleChange} />
  );
}
export default Input;
