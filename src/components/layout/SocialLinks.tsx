import { site } from "@/data/site";
import { FaFacebookF, FaFacebookMessenger, FaInstagram } from "react-icons/fa6";

const links = [
  { href: site.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.socials.messenger, label: "Messenger", Icon: FaFacebookMessenger },
];

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <ul className={`flex gap-2 ${className}`}>
    {links.map(({ href, label, Icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.name} på ${label}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-current/20 transition-colors hover:border-current/50 hover:bg-current/5"
        >
          <Icon aria-hidden className="h-4 w-4" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
