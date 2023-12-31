export interface Service {
  name: string;
  shortDescription: string;
  description: string;
  servicePageTitle: string;
  link: string;
  image: string;
  colors: string[];
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  id: string;
}

export const services: Service[] = [
  {
    id: "malning",
    name: "Målning",
    servicePageTitle: "Målning i Kinna och Marks kommun",
    image: "/målning.jpg",
    shortDescription: "Dags att måla om? Vi erbjuder allt från fasad- till takmålning.",
    description:
      "Vår målarfirma erbjuder expertis inom fasad- och takmålning. Vi garanterar högkvalitativt arbete, leverans i enlighet med överenskommelse samt punktlig färdigställande. Vårt dedikerade team av målare är här för att ge ditt hem eller företag en ny och fräsch look.\n\nInom målning erbjuder vi bland annat:",
    link: "",
    colors: ["#f59e0b", "#92400e"],
    features: [
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Inomhusmålning",
        description:
          "Skapa en inbjudande och stilfull atmosfär i ditt hem med vår expertis inom inomhusmålning. Vi använder noggrant utvalda målningsprodukter som garanterar inte bara visuell tilltalande resultat utan även långvarig kvalitet. Med ett brett utbud av färgnyanser och finishalternativ anpassar vi varje projekt för att matcha olika ytor och skapa den önskade atmosfären i ditt utrymme. Våra slitstarka och lättskötta produkter ger inte bara ett estetiskt lyft utan förbättrar även övergripande kvalitet och livslängd.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Våtrumsmålning",
        description:
          "Förse ditt våtrum med en målningslösning som inte bara är estetiskt tillfredsställande utan också strängt anpassad för att möta kraven i fuktiga miljöer. Våra högkvalitativa produkter är särskilt utformade för att motstå fukt och håller höga standarder för hållbarhet. Genom att kombinera funktion och form skapar vi målningslösningar som skyddar ditt våtrum från fuktrelaterade skador och samtidigt skapar en fräsch och inbjudande atmosfär.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Sprutmålning",
        description:
          "Upptäck fördelarna med effektiva och jämna resultat genom vår sprutmålningstjänst. Oavsett om det är tak, element, dörrar eller köksluckor, använder vi avancerad sprutmålsteknik för att säkerställa en professionell finish. Vår tidsbesparande och effektiva metod är idealisk för både stora och små projekt, och vi strävar efter att leverera en slående och enhetlig yta som uppfyller dina förväntningar.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Utomhusmålning",
        description:
          "Ge ditt utomhusutrymme nytt liv med vår utomhusmålningstjänst. Oavsett om det är träfasader, puts, tegel eller takfot, behandlar vi varje yta med noggrannhet och omsorg. Våra högkvalitativa färgprodukter är speciellt formulerade för att stå emot väderpåverkan och skapa en hållbar och vacker yta. Vår erfarna personal kombinerar teknisk kompetens med konstnärlig känsla för att förvandla ditt utomhusutrymme och skydda det mot påfrestningar över tid.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Linoljemålning",
        description:
          "Utforska konsten att måla med linolja och ge dina ytor en unik och tidlös finish. Vår linoljemålningstjänst kombinerar traditionellt hantverk med moderna tekniker för att skapa vackra och hållbara resultat. Linolja ger rika färger och en djup glans samtidigt som den skyddar ytan. Speciellt lämplig för trädetaljer, vår linoljemålning ger en naturlig skönhet som åldras elegant över tiden.",
      },
    ],
  },
  {
    id: "tapetsering",
    name: "Tapetsering",
    servicePageTitle: "Tapetsering i Kinna och Marks kommun",
    image: "/tapetsering.jpg",
    shortDescription: "Tapetseringstjänster som förhöjer din interiör och ger den önskade stilen.",
    description:
      "Våra skickliga målare specialiserar sig på tapetsering för att skapa en interiör som passar din stil och smak. Vi erbjuder rådgivning och expertis för att välja rätt tapeter och säkerställa en perfekt applicering. Låt oss förvandla ditt utrymme med våra professionella tapetseringstjänster.\n\nInom tapetsering erbjuder vi bland annat:",
    link: "",
    colors: ["#0d9488", "#134e4a"],
    features: [
      {
        image: "/tapetsering.jpg",
        title: "Papperstapetsering",
        description:
        "Förvandla ditt utrymme med vår papperstapetseringstjänst som ger en klassisk och tidlös touch. Vårt skickliga team applicerar papperstapeter noggrant med precision och uppmärksamhet på detaljer. Oavsett om det är för en accentvägg eller hela rummet, strävar vi efter att skapa en sömlös och vacker yta som passar din stil och förhöjer atmosfären.",
      },
      {
        image: "/tapetsering01.jpg",
        title: "Non-woven-tapetsering",
        description:
        "Förenkla och försköna med vår non-woven-tapetseringstjänst som kombinerar modern estetik med praktisk funktionalitet. Non-woven-tapeter erbjuder enkel installation och är lätta att underhålla. Vårt skickliga team säkerställer en noggrann applicering för att maximera tapetens förmåga att skapa önskad visuell effekt. Vi strävar efter att göra non-woven-tapetsering till en smidig och tillfredsställande upplevelse.",
      },
      {
        image: "/tapetsering02.jpg",
        title: "Slätvävstapetsering",
        description:
          "Skapa en jämn och elegant yta med vår slätvävstapetseringstjänst. Vi installerar slät väv för att förbättra ytan och ge extra armering mot sprickor och yttre påverkan. Genom att kombinera skicklighet med noggrannhet strävar vi efter att erbjuda en tapetsering som inte bara är visuellt tilltalande utan också funktionellt hållbar över tid.",
      },
    ],
  },
  {
    id: "spackling",
    name: "Spackling",
    servicePageTitle: "Spackling i Kinna och Marks kommun",
    image: "/spackling.jpg",
    shortDescription:
      "Jämn och professionell spackling för att skapa en perfekt yta inför målning.",
    description:
      "Våra erfarna målare behärskar konsten av spackling för att ge dina väggar och tak en jämn och perfekt yta inför målning. Vi använder högkvalitativa material och tekniker för att säkerställa ett hållbart och estetiskt tilltalande resultat. Lita på vårt team för professionell spacklingstjänst.\n\nInom spackling erbjuder vi bland annat:",
    link: "",
    colors: ["#0891b2", "#164e63"],
    features: [
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Bredspackling",
        description:
          "Förbered dina ytor inför målning med vår bredspacklingstjänst, som fokuserar på att skapa jämna och väl förberedda ytor. Med noggrannhet och skicklighet applicerar vi bredspackel för att jämna ut ojämnheter och skapa en enhetlig bas. Detta är en viktig process för att säkerställa att målningsresultatet blir jämnt och professionellt.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Hållagning",
        description: "",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Spackla remsor",
        description:
          "Skapa en jämn och enhetlig yta med vår spackling av remsor. Vi applicerar spackel noggrant för att säkerställa att remsorna integreras sömlöst med omgivande ytor och skapar en professionell finish.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Släta väggar",
        description:
          "Ge dina väggar en vacker och jämn yta med vår tjänst för att släta väggar. Vi tillämpar våra färdigheter och expertis för att skapa en professionell finish, vilket ger en vacker grund för målningsprocessen.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Dammfri slipning med maskin",
        description:
          "Få en jämn och polerad yta med vår avancerade maskinteknik för dammfri slipning. Vår dammfria slipning är skonsam mot omgivningen och skapar en förberedd yta som är redo för ytbehandling.",
      },
    ],
  },
  {
    id: "fonsterrenovering",
    name: "Fönsterrenovering",
    servicePageTitle: "Fönsterrenovering i Kinna och Marks kommun",
    image: "/fönsterrenovering.jpg",
    shortDescription: "Fönsterrenovering för att förbättra funktion och utseende.",
    description:
      "Förbättra både funktion och utseende på dina fönster med vår fönsterrenoveringstjänst. Vi erbjuder skräddarsydda lösningar för att möta dina behov och preferenser, inklusive skrapning för att avlägsna gammal färg och kittning för en tät och hållbar försegling. Målning av fönsterbågar och karm samt byte av glas utförs med precision för att ge dina fönster en fräsch och skyddande yta.",
    link: "",
    colors: ["#4f46e5", "#312e81"],
    features: [
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Skrapning",
        description:
          "Det är viktigt att avlägsna gammal färg och orenheter från fönsterbågar och karmar. Vi använder skrapverktyg med precision för att skapa en ren och jämn yta, vilket är en viktig förberedelse för efterföljande behandlingar.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Kittning",
        description:
          "Vi lägger stor vikt vid rätt kittning för att säkerställa att dina fönster är tätade och skyddade mot väderpåverkan. Vår kittningstjänst appliceras noggrant för att säkerställa en tät och hållbar försegling runt fönsterbågar och karmar.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Målning av fönsterbågar och karm",
        description:
          "Vår färgexpertis kommer till sin fulla rätt när det gäller målning av fönsterbågar och karmar. Vi erbjuder ett brett utbud av färgnyanser och använder högkvalitativa målningsprodukter för att ge dina fönster en fräsch och skyddande yta. Målningen utförs med precision för att säkerställa enhetlig täckning och långvarigt visuellt intryck.",
      },
      {
        image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
        title: "Byte av glas",
        description:
          "Vår fönsterrenovering inkluderar professionellt glasbyte när det behövs. Vi hanterar detta steg med försiktighet och expertis, vilket ger dig möjlighet att förbättra energieffektiviteten och estetiken hos dina fönster. Vi erbjuder olika glastyper för att möta dina specifika behov och önskemål.\n\nMed vår fönsterrenoveringstjänst strävar vi efter att inte bara återställa funktionaliteten hos dina fönster utan också att förhöja deras estetiska appell och energieffektivitet. Kontakta oss för att påbörja din fönsterförnyelse med professionell och pålitlig service.",
      },
    ],
  },
];

export const servicePageData = [{ id: "malning", title: "Målning i Kinna och Marks kommun" }];