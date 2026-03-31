const Button = (props) => {
  return (
    <button
      className="px-4 py-2 bg-secondary rounded-md hover:bg-textcolor font-semibold text-white  transition duration-300"
      onClick={props.onClick}
      type="props.type"
    >
      {props.text}
    </button>
  );
};

export default Button;