import Link from "next/link";
import { FaFacebookF, FaFacebookMessenger, FaInstagram } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <>
      <Link
        href="https://instagram.com/maleriviskan"
        target="_blank"
        className="transition-all ease-in-out hover:text-cyan-600"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.facebook.com/maleriviskan"
        target="_blank"
        className="transition-all ease-in-out hover:text-cyan-600"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://m.me/maleriviskan"
        target="_blank"
        className="transition-all ease-in-out hover:text-cyan-600"
      >
        <FaFacebookMessenger />
      </Link>
    </>
  );
};

export default SocialMediaIcons;
