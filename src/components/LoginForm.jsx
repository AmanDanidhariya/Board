import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="w-[423px]">
        <div className="font-Montserrat text-4xl font-bold">Sign In</div>
        <div className="leading-10">Sign in to your account</div>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex py-1 px-4 bg-white mt-4 rounded-lg">
            <FcGoogle size={17} />
            <span className="ml-4">Sign in with Google</span>
          </div>
          <div className="flex py-1 px-4 bg-white mt-4 rounded-lg">
            <BsApple size={17} className="text-gray-400" />
            <span className="ml-4">Sign in with Apple</span>
          </div>
        </div>

        <form className="flex flex-col p-12 bg-white mt-6 py-6 rounded-xl">
          <div className="flex flex-col">
            <label className="leading-10">Email address</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#EAEAEA] text-sm leading-tight rounded-lg py-2 pl-4"
            />
          </div>
          <div className="flex flex-col">
            <label type="password" className="leading-10">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-[#EAEAEA] text-sm leading-tight rounded-lg py-2 pl-4"
            />
          </div>
          <div className="text-[#346BD4] text-sm py-3">
            <Link>Forget password?</Link>
          </div>
          <button
            type="submit"
            className="font-Montserrat font-bold text-white bg-[#4285F4] rounded-xl py-2"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          Don&apos;t have an account{" "}
          <Link className="text-[#346BD4]">Register here</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
