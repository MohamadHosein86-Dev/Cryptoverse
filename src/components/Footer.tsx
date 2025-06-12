import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-14 border-t-[1px] border-[#1A1A1A] flex justify-center items-center gap-1">
      Made by{" "}
      <Link to="https://github.com/MohamadHosein86-Dev" target="_blank" className="text-[#FF9332] underline">
        MohamadHosein
      </Link>
    </footer>
  );
};

export default Footer;
