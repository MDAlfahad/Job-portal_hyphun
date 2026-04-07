import { Link } from "react-router-dom";
import Button from "../Components/buttons/ButtonComponents";

const NotFound404 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-6 cursor-not-allowed">
      <h1 className="text-9xl font-bold text-secondary">404</h1>
      <p className="text-sm ">Oops! Page not found</p>
      <Link to="/" className="mt-10">
        <Button text= "Go back Home"/>
      </Link>
    </div>
  );
};

export default NotFound404;
