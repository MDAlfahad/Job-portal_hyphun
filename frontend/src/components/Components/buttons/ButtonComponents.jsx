const Button = (props) => {
  return (
    <button
      className="px-4 py-2 bg-secondary rounded-md hover:bg-textcolor font-semibold text-white hover:scale-105 transition duration-300"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;