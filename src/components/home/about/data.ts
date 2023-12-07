interface AboutPartial {
  title: string;
  description: string;
  image: string;
  readMoreButton?: boolean;
  quoteButton?: boolean;
}
export const data: AboutPartial[] = [
  {
    title: "Måleri Viskan",
    description:
      "Jag har arbetat inom branschen under många år och har finjusterat mina färdigheter för att leverera enastående resultat. Mitt fokus ligger på precision, noggrannhet och att tillgodose kundernas unika behov när det kommer till målningsprojekt.",
    image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    readMoreButton: true,
  },
  {
    title: "Alltid kvalitativa produkter",
    description:
      "Vårt sortiment av målningsprodukter är noggrant utvalt för att säkerställa optimal prestanda och långvariga resultat. Vi erbjuder ett brett utbud av färgnyanser och finishalternativ som passar olika ytor och skapar den önskade atmosfären i ditt utrymme. Våra produkter är designade för att vara slitstarka och lättskötta.",
    image:
      "https://images.unsplash.com/photo-1585676737728-432f58d5fdba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readMoreButton: true,
  },
  {
    title: "Inomhusmålning",
    description:
      "Vi förstår vikten av att välja rätt färg för varje yta, vare sig det är väggar, tak, golv, möbler eller snickerier. Vi tar hänsyn till rummets belysning och stil för att skapa en atmosfär som passar dina önskemål.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quoteButton: true,
    readMoreButton: true,
  },
];
