export interface Service {
  name: string;
  shortDescription: string;
  description: string;
  link: string;
  image: string;
  colors: string[];
}

export const data: Service[] = [
  {
    name: "Målning",
    image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    shortDescription: "Dags att måla om? Vi erbjuder allt från fasad- till takmålning.",
    description:
      "Vår målarfirma erbjuder expertis inom fasad- och takmålning. Vi garanterar högkvalitativt arbete, leverans i enlighet med överenskommelse samt punktlig färdigställande. Vårt dedikerade team av målare är här för att ge ditt hem eller företag en ny och fräsch look.\n\nVår målarfirma erbjuder expertis inom fasad- och takmålning. Vi garanterar högkvalitativt arbete, leverans i enlighet med överenskommelse samt punktlig färdigställande. Vårt dedikerade team av målare är här för att ge ditt hem eller företag en ny och fräsch look.",
    link: "",
    colors: ["#f59e0b", "#92400e"],
  },
  {
    name: "Tapetsering",
    image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    shortDescription: "Tapetseringstjänster som förhöjer din interiör och ger den önskade stilen.",
    description:
      "Våra skickliga målare specialiserar sig på tapetsering för att skapa en interiör som passar din stil och smak. Vi erbjuder rådgivning och expertis för att välja rätt tapeter och säkerställa en perfekt applicering. Låt oss förvandla ditt utrymme med våra professionella tapetseringstjänster.\n\nVåra skickliga målare specialiserar sig på tapetsering för att skapa en interiör som passar din stil och smak. Vi erbjuder rådgivning och expertis för att välja rätt tapeter och säkerställa en perfekt applicering. Låt oss förvandla ditt utrymme med våra professionella tapetseringstjänster.\n",
    link: "",
    colors: ["#0d9488", "#134e4a"],
  },
  {
    name: "Spackling",
    image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    shortDescription:
      "Jämn och professionell spackling för att skapa en perfekt yta inför målning.",
    description:
      "Våra erfarna målare behärskar konsten av spackling för att ge dina väggar och tak en jämn och perfekt yta inför målning. Vi använder högkvalitativa material och tekniker för att säkerställa ett hållbart och estetiskt tilltalande resultat. Lita på vårt team för professionell spacklingstjänst.\n\nVåra erfarna målare behärskar konsten av spackling för att ge dina väggar och tak en jämn och perfekt yta inför målning. Vi använder högkvalitativa material och tekniker för att säkerställa ett hållbart och estetiskt tilltalande resultat. Lita på vårt team för professionell spacklingstjänst.\n",
    link: "",
    colors: ["#0891b2", "#164e63"],
  },
  {
    name: "Fönsterrenovering",
    image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    shortDescription: "Fönsterrenovering för att förbättra funktion och utseende.",
    description:
      "Vår målarfirma specialiserar sig på fönsterrenovering för att förbättra både funktionen och utseendet på dina fönster. Vi erbjuder skräddarsydda lösningar som möter dina behov och preferenser. Låt oss göra dina fönster som nya och öka värdet på ditt hem eller företag med vår expertis inom fönsterrenovering.\n\nVår målarfirma specialiserar sig på fönsterrenovering för att förbättra både funktionen och utseendet på dina fönster. Vi erbjuder skräddarsydda lösningar som möter dina behov och preferenser. Låt oss göra dina fönster som nya och öka värdet på ditt hem eller företag med vår expertis inom fönsterrenovering.\n",
    link: "",
    colors: ["#4f46e5", "#312e81"],
  },
];
