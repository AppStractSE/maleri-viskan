export interface Service {
  name: string;
  shortDescription: string;
  description: string;
  servicePageTitle: string;
  link: string;
  image: string;
  smallImage: string;
  colors: string[];
  colorBg: string;
  features: {
    title: string;
    description: string;
    image: string;
    smallImage: string;
  }[];
  id: string;
}

export const services: Service[] = [
  {
    id: "malning",
    name: "Målning",
    servicePageTitle: "Målning",
    image: "/tjanster/malning/utomhus.png",
    smallImage: "/tjanster/malning/utomhus_small.png",
    shortDescription: "Dags att måla om? Vi erbjuder all typ av målning både in- och utvändigt.",
    description:
      "Vi är proffs på målning, oavsett om det är inomhus eller utomhus. Vårt mål är att alltid leverera grym kvalitet, hålla vad vi lovar och bli klara i tid. Vi har även MVK-certifiering för att måla i våtrum, så vi fixar det med stil och säkerhet!",
    link: "tjanster/malning",
    colors: ["#f59e0b", "#92400e"],
    colorBg: "from-amber-600 to-orange-700",
    features: [
      {
        image: "/tjanster/malning/inomhus.png",
        smallImage: "/tjanster/malning/inomhus_small.png",
        title: "Invändig målning",
        description:
          "Skapa en inbjudande och stilfull atmosfär i ditt hem med hjälp av vår expertis! Vi använder noggrant utvalda målningsprodukter som garanterar inte bara visuell tilltalande resultat utan även långvarig kvalitet. Med ett brett utbud av färgnyanser och finishalternativ anpassar vi varje projekt för att matcha olika ytor och skapa den önskade atmosfären i ditt utrymme. De slitstarka och lättskötta produkter vi använder ger inte bara ett estetiskt lyft utan förbättrar även övergripande kvalitet och livslängd.",
      },
      {
        image: "/tjanster/malning/vatrum.png",
        smallImage: "/tjanster/malning/vatrum_small.png",
        title: "Våtrumsmålning",
        description:
          "Förse ditt våtrum med en uppfräschning som inte bara är estetiskt tillfredsställande utan också strängt anpassad för att möta kraven i fuktiga miljöer. Våra högkvalitativa produkter är särskilt utformade för att motstå fukt och håller höga standarder för hållbarhet. Genom att kombinera funktion och form skapar vi målningslösningar som skyddar ditt våtrum från fuktrelaterade skador och samtidigt skapar en fräsch och inbjudande atmosfär.",
      },
      {
        image: "/tjanster/malning/sprutmalning.png",
        smallImage: "/tjanster/malning/sprutmalning_small.png",
        title: "Sprutmålning",
        description:
          "Oavsett om det är tak, element, dörrar eller köksluckor, använder vi avancerad sprutmålsteknik för att säkerställa en professionell finish som resulterar i ett effektivt och jämnt resultat. Vår tidsbesparande och effektiva metod är idealisk för både stora och små projekt, och vi strävar efter att leverera en slående och enhetlig yta som uppfyller dina förväntningar.",
      },
      {
        image: "/tjanster/malning/utomhus.png",
        smallImage: "/tjanster/malning/utomhus_small.png",
        title: "Utvändig målning",
        description:
          "Ge ditt utomhusutrymme nytt liv! Oavsett om det är träfasader, puts, tegel eller takfot, behandlar vi varje yta med noggrannhet och omsorg. Våra högkvalitativa färgprodukter är speciellt formulerade för att stå emot väderpåverkan och skapa en hållbar och vacker yta. Vår erfarna personal kombinerar teknisk kompetens med konstnärlig känsla för att förvandla ditt utomhusutrymme och skydda det mot påfrestningar över tid.",
      },
      {
        image: "/tjanster/malning/linolje.png",
        smallImage: "/tjanster/malning/linolje_small.png",
        title: "Linoljemålning",
        description:
          "Anlita oss för att måla med linolja för att ge dina ytor en unik och tidlös finish. Vi kombinerar traditionellt hantverk med moderna tekniker för att skapa vackra och hållbara resultat. Linolja ger rika färger och en djup glans samtidigt som den skyddar ytan. Speciellt lämplig för trädetaljer, resultatet ger en naturlig skönhet som åldras elegant över tiden.",
      },
    ],
  },
  {
    id: "malning",
    name: "Sprutmålning",
    servicePageTitle: "Målning",
    image: "/tjanster/malning/sprutmalning.png",
    smallImage: "/tjanster/malning/sprutmalning.png",
    shortDescription: "Ge professionell finish till tak, element, dörrar och köksluckor.",
    description:
      "Oavsett om det är tak, element, dörrar eller köksluckor, använder vi avancerad sprutmålsteknik för att säkerställa en professionell finish som resulterar i ett effektivt och jämnt resultat. Vår tidsbesparande och effektiva metod är idealisk för både stora och små projekt, och vi strävar efter att leverera en slående och enhetlig yta som uppfyller dina förväntningar.",
    link: "tjanster/malning",
    colors: ["#696969", "#212121"],
    colorBg: "from-slate-600 to-slate-700",
    features: [
      {
        image: "/tjanster/malning/inomhus.png",
        smallImage: "/tjanster/malning/inomhus_small.png",
        title: "Invändig målning",
        description:
          "Skapa en inbjudande och stilfull atmosfär i ditt hem med hjälp av vår expertis! Vi använder noggrant utvalda målningsprodukter som garanterar inte bara visuell tilltalande resultat utan även långvarig kvalitet. Med ett brett utbud av färgnyanser och finishalternativ anpassar vi varje projekt för att matcha olika ytor och skapa den önskade atmosfären i ditt utrymme. De slitstarka och lättskötta produkter vi använder ger inte bara ett estetiskt lyft utan förbättrar även övergripande kvalitet och livslängd.",
      },
      {
        image: "/tjanster/malning/vatrum.png",
        smallImage: "/tjanster/malning/vatrum_small.png",
        title: "Våtrumsmålning",
        description:
          "Förse ditt våtrum med en uppfräschning som inte bara är estetiskt tillfredsställande utan också strängt anpassad för att möta kraven i fuktiga miljöer. Våra högkvalitativa produkter är särskilt utformade för att motstå fukt och håller höga standarder för hållbarhet. Genom att kombinera funktion och form skapar vi målningslösningar som skyddar ditt våtrum från fuktrelaterade skador och samtidigt skapar en fräsch och inbjudande atmosfär.",
      },
      {
        image: "/tjanster/malning/sprutmalning.png",
        smallImage: "/tjanster/malning/sprutmalning_small.png",
        title: "Sprutmålning",
        description:
          "Oavsett om det är tak, element, dörrar eller köksluckor, använder vi avancerad sprutmålsteknik för att säkerställa en professionell finish som resulterar i ett effektivt och jämnt resultat. Vår tidsbesparande och effektiva metod är idealisk för både stora och små projekt, och vi strävar efter att leverera en slående och enhetlig yta som uppfyller dina förväntningar.",
      },
      {
        image: "/tjanster/malning/utomhus.png",
        smallImage: "/tjanster/malning/utomhus_small.png",
        title: "Utvändig målning",
        description:
          "Ge ditt utomhusutrymme nytt liv! Oavsett om det är träfasader, puts, tegel eller takfot, behandlar vi varje yta med noggrannhet och omsorg. Våra högkvalitativa färgprodukter är speciellt formulerade för att stå emot väderpåverkan och skapa en hållbar och vacker yta. Vår erfarna personal kombinerar teknisk kompetens med konstnärlig känsla för att förvandla ditt utomhusutrymme och skydda det mot påfrestningar över tid.",
      },
      {
        image: "/tjanster/malning/linolje.png",
        smallImage: "/tjanster/malning/linolje_small.png",
        title: "Linoljemålning",
        description:
          "Anlita oss för att måla med linolja för att ge dina ytor en unik och tidlös finish. Vi kombinerar traditionellt hantverk med moderna tekniker för att skapa vackra och hållbara resultat. Linolja ger rika färger och en djup glans samtidigt som den skyddar ytan. Speciellt lämplig för trädetaljer, resultatet ger en naturlig skönhet som åldras elegant över tiden.",
      },
    ],
  },
  {
    id: "tapetsering",
    name: "Tapetsering",
    servicePageTitle: "Tapetsering",
    image: "/tjanster/tapetsering/tapetsering.jpg",
    smallImage: "/tjanster/tapetsering/tapetsering_small.png",
    shortDescription: "Tapetseringstjänster som förhöjer din interiör och ger den önskade stilen.",
    description:
      "Oavsett om det är för ditt hem eller kontor löser vi tapetsering åt dig. Vi strävar alltid efter att leverera snyggt arbete, hålla våra löften och bli klara i tid. Vårt fokus är att skapa en stilfull atmosfär och vi är här för att göra ditt rum eller kontor ännu mer speciellt!",
    link: "tjanster/tapetsering",
    colors: ["#0d9488", "#134e4a"],
    colorBg: "from-teal-600 to-teal-700",
    features: [
      {
        image: "/tjanster/tapetsering/tapetsering01.jpg",
        smallImage: "/tjanster/tapetsering/tapetsering01_small.png",
        title: "Papperstapetsering",
        description:
          "Förvandla ditt utrymme som ger en klassisk och tidlös touch. Vi applicerar papperstapeter noggrant med precision och uppmärksamhet på detaljer. Oavsett om det är för en accentvägg eller hela rummet, strävar vi efter att skapa en sömlös och vacker yta som passar din stil och förhöjer atmosfären.",
      },
      {
        image: "/tjanster/tapetsering/tapetsering.jpg",
        smallImage: "/tjanster/tapetsering/tapetsering_small.png",
        title: "Non-woven-tapetsering",
        description:
          "Kombinera modern estetik med praktisk funktionalitet. Non-woven-tapeter erbjuder enkel installation och är lätta att underhålla. Vi säkerställer en noggrann applicering för att maximera tapetens förmåga att skapa önskad visuell effekt. Vi strävar efter att göra non-woven-tapetsering till en smidig och tillfredsställande upplevelse.",
      },
      {
        image: "/tjanster/tapetsering/tapetsering02.jpg",
        smallImage: "/tjanster/tapetsering/tapetsering02_small.png",
        title: "Slätvävstapetsering",
        description:
          "Skapa en jämn och elegant yta med slätvävstapeter. Vi installerar slät väv för att förbättra ytan och ge extra armering mot sprickor och yttre påverkan. Genom att kombinera skicklighet med noggrannhet strävar vi efter att erbjuda en tapetsering som inte bara är visuellt tilltalande utan också funktionellt hållbar över tid.",
      },
    ],
  },
  {
    id: "spackling",
    name: "Spackling",
    servicePageTitle: "Spackling",
    image: "/tjanster/spackling/spackling.jpg",
    smallImage: "/tjanster/spackling/spackling_small.png",
    shortDescription:
      "Jämn och professionell spackling för att skapa en perfekt yta inför målning.",
    description:
      "Vi är redo att fixa till ytor och ge dem en ny fräsch look. Oavsett om det handlar om små fixar eller större förändringar, satsar vi alltid på en jämn och snygg finish. Med oss kan du lita på att ditt utrymme kommer att se snyggt och professionellt ut, redo för nästa steg!",
    link: "tjanster/spackling",
    colors: ["#0891b2", "#164e63"],
    colorBg: "from-cyan-700 to-cyan-950",
    features: [
      {
        image: "/tjanster/spackling/spackling.jpg",
        smallImage: "/tjanster/spackling/spackling_small.png",
        title: "Bredspackling",
        description:
          "Förbered dina ytor inför målning med bredspackling, som skapar jämna och väl förberedda ytor. Med noggrannhet och skicklighet applicerar vi bredspackel för att jämna ut ojämnheter och skapa en enhetlig bas. Detta är en viktig process för att säkerställa att målningsresultatet blir jämnt och professionellt.",
      },
      {
        image: "/tjanster/spackling/spackla-skarvar.jpeg",
        smallImage: "/tjanster/spackling/spackla-skarvar_small.png",
        title: "Spackla skarvar och hörn",
        description:
          "Spackling av skarvar och hörn kräver som alltid noggrant förarbete för att uppnå ett professionellt slutresultat. Varje detalj är viktig, och minsta slarv kan bli synligt som ojämnheter i väggen när ljuset faller på. Om du inte är van vid hantverk och gör-det-själv-arbeten, är det bäst att kontakta professionella spacklare och målare. Måleri Viskan har den erfarenhet och skicklighet som krävs för att säkerställa att spacklingen blir korrekt utförd och skapar en jämn yta inför målningsprocessen.",
      },
      {
        image: "/tjanster/spackling/dammfri-slipning.jpeg",
        smallImage: "/tjanster/spackling/dammfri-slipning_small.png",
        title: "Dammfri slipning med maskin",
        description:
          "Få en jämn och polerad yta med vår avancerade maskinteknik för dammfri slipning. Vår dammfria slipning är skonsam mot omgivningen och skapar en förberedd yta som är redo för ytbehandling.",
      },
    ],
  },
  {
    id: "fonsterrenovering",
    name: "Fönsterrenovering",
    servicePageTitle: "Fönsterrenovering",
    image: "/tjanster/fonsterrenovering/fonsterrenovering.jpg",
    smallImage: "/tjanster/fonsterrenovering/fonsterrenovering_small.png",
    shortDescription: "Fönsterrenovering för att förbättra funktion och utseende.",
    description:
      "Förbättra både funktion och utseende på dina fönster. Vi erbjuder skräddarsydda lösningar för att möta dina behov och preferenser, inklusive skrapning för att avlägsna gammal färg och kittning för en tät och hållbar försegling. Målning av fönsterbågar och karm samt byte av glas som utförs med precision för att ge dina fönster en fräsch och skyddande yta.",
    link: "tjanster/fonsterrenovering",
    colors: ["#4f46e5", "#312e81"],
    colorBg: "from-indigo-600 to-indigo-700",
    features: [
      {
        image: "/tjanster/fonsterrenovering/skrapning.jpeg",
        smallImage: "/tjanster/fonsterrenovering/skrapning_small.png",
        title: "Skrapning",
        description:
          "Det är viktigt att avlägsna gammal färg och orenheter från fönsterbågar och karmar. Vi använder skrapverktyg med precision för att skapa en ren och jämn yta, vilket är en viktig förberedelse för efterföljande behandlingar.",
      },
      {
        image: "/tjanster/fonsterrenovering/kittning.jpg",
        smallImage: "/tjanster/fonsterrenovering/kittning_small.png",
        title: "Kittning",
        description:
          "Vi lägger stor vikt vid rätt kittning för att säkerställa att dina fönster är tätade och skyddade mot väderpåverkan. Vår kittningstjänst appliceras noggrant för att säkerställa en tät och hållbar försegling runt fönsterbågar och karmar.",
      },
      {
        image: "/tjanster/fonsterrenovering/wibo.jpg",
        smallImage: "/tjanster/fonsterrenovering/wibo_small.png",
        title: "Målning av fönsterbågar och karm",
        description:
          "Vår färgexpertis kommer till sin fulla rätt när det gäller målning av fönsterbågar och karmar. Vi erbjuder ett brett utbud av färgnyanser och använder högkvalitativa målningsprodukter för att ge dina fönster en fräsch och skyddande yta. Målningen utförs med precision för att säkerställa enhetlig täckning och långvarigt visuellt intryck.",
      },
      {
        image: "/tjanster/fonsterrenovering/byte-av-glas.jpeg",
        smallImage: "/tjanster/fonsterrenovering/byte-av-glas_small.png",
        title: "Byte av glas",
        description:
          "Vår fönsterrenovering inkluderar professionellt glasbyte när det behövs. Vi hanterar detta steg med försiktighet och expertis, vilket ger dig möjlighet att förbättra energieffektiviteten och estetiken hos dina fönster. Vi erbjuder olika glastyper för att möta dina specifika behov och önskemål.\n\nMed vår fönsterrenoveringstjänst strävar vi efter att inte bara återställa funktionaliteten hos dina fönster utan också att förhöja deras estetiska appell och energieffektivitet. Kontakta oss för att påbörja din fönsterförnyelse med professionell och pålitlig service.",
      },
    ],
  },
];
