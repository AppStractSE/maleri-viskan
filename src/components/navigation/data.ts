export interface NavItem {
  href: string;
  label: string;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  href: string;
  label: string;
}

export const data: NavItem[] = [
  {
    href: "/om",
    label: "Om",
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
        href: "/tjanster/malning",
        label: "Målning",
      },
      {
        href: "/tjanster/gipsning",
        label: "Tapetsering",
      },
      {
        href: "/tjanster/spackling",
        label: "Spackling",
      },
      {
        href: "/tjanster/renovering",
        label: "Fönsterrenovering",
      },
    ],
  },
];
