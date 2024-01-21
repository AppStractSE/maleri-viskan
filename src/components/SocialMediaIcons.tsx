import Link from "next/link";
import { FaFacebookF, FaFacebookMessenger, FaInstagram } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <>
      <Link
        href="https://instagram.com/maleriviskan"
        target="_blank"
        className="hover:text-cyan-600 transition-all ease-in-out"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://instagram.com/maleriviskan"
        target="_blank"
        className="hover:text-cyan-600 transition-all ease-in-out"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://instagram.com/maleriviskan"
        target="_blank"
        className="hover:text-cyan-600 transition-all ease-in-out"
      >
        <FaFacebookMessenger />
      </Link>
    </>
  );
};

export default SocialMediaIcons;
