import LoginForm from "../components/LoginForm";
import SocialMedia from "../components/SocialMedia";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-around login_background">
        <SocialMedia />
      </div>
      <div className="w-1/2 mt-[10%] flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
