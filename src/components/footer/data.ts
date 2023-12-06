interface FooterLinkPartial {
  label: string;
  href: string;
  internal?: boolean;
  locality?: string;
}

interface FooterLink {
  label: string;
  links: FooterLinkPartial[];
}

export const data: FooterLink[] = [
  {
    label: 'Om företaget',
    links: [
      {
        label: 'Om Måleri Viskan',
        href: '/om-maleri-viskan',
        internal: true,
      },
      {
        label: 'Contact',
        href: '/contact',
        internal: true,
      },
    ],
  },
  {
    label: 'Follow us',
    links: [
      {
        label: 'GitHub',
        href: '',
      },
      {
        label: 'Twitter',
        href: '',
      },
    ],
  },
  {
    label: 'Kontakta oss',
    links: [
      {
        label: 'Pruhultsvägen 37',
        locality: '511 53 Kinna',
        href: 'https://www.google.com/maps/place/M%C3%A5leri+Viskan/@57.506006,12.671134,17z/data=!3m1!4b1!4m6!3m5!1s0x46501b420e8f6d6f:0x6c921bc4eb4ac81b!8m2!3d57.5060031!4d12.6737089!16s%2Fg%2F11kr_z7sch?entry=ttu',
      },
      {
        label: '0500-33 10 18',
        href: 'tel:0500-33 10 18',
      },
      {
        label: 'info@maleriviskan.se',
        href: 'mailto:info@maleriviskan.se',
      },
    ],
  },
];
