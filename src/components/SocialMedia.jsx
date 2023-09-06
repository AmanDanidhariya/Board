import Logo from "./Logo";
import Platforms from "./Platforms";

const SocialMedia = () => {
  return (
    <>
      <Logo />
      <div className="leading-normal text-5xl text-white font-extrabold text-center text-montserrat">
        Board.
      </div>
      <div>
        <Platforms />
      </div>
    </>
  );
};

export default SocialMedia;
