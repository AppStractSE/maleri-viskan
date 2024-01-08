interface AboutPartial {
  title: string;
  description: string;
  image: string;
  readMoreButton?: boolean;
  quoteButton?: boolean;
  link?: string;
}
export const data: AboutPartial[] = [
  {
    title: "Måleri Viskan",
    description:
      "Jag har arbetat inom branschen under många år och har finjusterat mina färdigheter för att leverera enastående resultat. Mitt fokus ligger på precision, noggrannhet och att tillgodose kundernas unika behov när det kommer till målningsprojekt.",
    image: "/coat-hanger.jpg",
    readMoreButton: true,
    quoteButton: true,
    link: "kontakt",
  },
  {
    title: "Alltid kvalitativa produkter",
    description:
      "Vårt sortiment av målningsprodukter är noggrant utvalt för att säkerställa optimal prestanda och långvariga resultat. Vi erbjuder ett brett utbud av färgnyanser och finishalternativ som passar olika ytor och skapar den önskade atmosfären i ditt utrymme. Våra produkter är designade för att vara slitstarka och lättskötta.",
    image:
      "/kvalitativa-produkter.jpg",
    quoteButton: true,
  },
  {
    title: "Invändig målning",
    description:
      "Vi förstår vikten av att välja rätt färg för varje yta, vare sig det är väggar, tak, golv, möbler eller snickerier. Vi tar hänsyn till rummets belysning och stil för att skapa en atmosfär som passar dina önskemål.",
    image:
      "/inomhusmålning.jpg",
    quoteButton: true,
    readMoreButton: true,
    link: "/tjanster/malning",
  },
  {
    title: "Non-woven tapetsering",
    description:
      "Non-woven tapetsering är en modern och mångsidig metod som erbjuder många fördelar. Den skapar en jämn och slät yta samtidigt som den är enkel att underhålla och rengöra. Dessutom är den stark och hållbar, vilket ger ditt utrymme en långvarig skönhet.",
    image:
      "/tapetsering01.jpg",
    quoteButton: true,
    readMoreButton: true,
    link: "/tjanster/tapetsering",
  },
  {
    title: "Utvändig målning",
    description:
      "Vi förstår vikten av att välja rätt färg för varje yta, vare sig det är väggar, tak, golv, möbler eller snickerier. Vi tar hänsyn till rummets belysning och stil för att skapa en atmosfär som passar dina önskemål.",
    image:
      "/utomhusmålning01.jpg",
    quoteButton: true,
    readMoreButton: true,
    link: "/tjanster/malning",
  },
  {
    title: "Din målare i Marks kommun, längsmed Viskan",
    description:
      "Vi förstår vikten av att välja rätt färg för varje yta, vare sig det är väggar, tak, golv, möbler eller snickerier. Vi tar hänsyn till rummets belysning och stil för att skapa en atmosfär som passar dina önskemål.",
    image:
      "/utomhusmålning01.jpg",
    quoteButton: true,
    readMoreButton: true,
    link: "/tjanster/malning",
  },
  {
    title: "Våtrumsmålning",
    description:
      "Vi har certifikat för våtrumsmålning och kan hjälpa dig med allt från att måla om badrummet till att måla om köket.",
    image:
      "/badrumsmålning.jpg",
    quoteButton: true,
    readMoreButton: true,
    link: "/tjanster/malning",
  },
];
