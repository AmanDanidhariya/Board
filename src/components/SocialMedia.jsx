import Logo from "./Logo";
import Platforms from "./Platforms";

const SocialMedia = () => {
  return (
    <div className="w-1/2 flex flex-col justify-around login_background">
      <Logo />
      <div className="leading-normal text-5xl text-white font-extrabold text-center text-Montserrat">
        Board.
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default SocialMedia;
