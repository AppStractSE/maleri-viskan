export interface NavItem {
  href: string;
  label: string;
  /** Renders the services menu (built from services.ts) instead of a plain link. */
  showServices?: boolean;
}

export const navigation: NavItem[] = [
  { href: "/tjanster", label: "Tjänster", showServices: true },
  { href: "/projekt", label: "Projekt" },
  { href: "/rot-avdrag", label: "ROT-avdrag" },
  { href: "/kontakt", label: "Kontakt" },
];

export const companyLinks: NavItem[] = [
  { href: "/projekt", label: "Projekt" },
  { href: "/rot-avdrag", label: "ROT-avdrag" },
  { href: "/miljoarbete", label: "Miljöarbete" },
  { href: "/kontakt", label: "Kontakt" },
];
