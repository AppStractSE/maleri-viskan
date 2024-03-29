export interface NavItem {
  href: string;
  label: string;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  href: string;
  label: string;
}

export const navigation: NavItem[] = [
  {
    href: "/projekt",
    label: "Projekt",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
  },
  {
    href: "/tjanster",
    label: "Tjänster",
    dropdownItems: [
      {
        href: "/tjanster",
        label: "Alla tjänster",
      },
      {
        href: "/tjanster/malning",
        label: "Målning",
      },
      {
        href: "/tjanster/malning",
        label: "Sprutmålning",
      },
      {
        href: "/tjanster/tapetsering",
        label: "Tapetsering",
      },
      {
        href: "/tjanster/spackling",
        label: "Spackling",
      },
      {
        href: "/tjanster/fonsterrenovering",
        label: "Fönsterrenovering",
      },
    ],
  },
  {
    href: "/rot-avdrag",
    label: "ROT-avdrag",
  },
];
