interface FooterLinkPartial {
  label: string;
  href: string;
  internal?: boolean;
}

interface FooterLink {
  label: string;
  links: FooterLinkPartial[];
}

export const data: FooterLink[] = [
  {
    label: "Links",
    links: [
      {
        label: "About",
        href: "/about",
        internal: true,
      },
      {
        label: "Contact",
        href: "/contact",
        internal: true,
      },
    ],
  },
  {
    label: "Follow us",
    links: [
      {
        label: "GitHub",
        href: "",
      },
      {
        label: "Twitter",
        href: "",
      },
    ],
  },
];
