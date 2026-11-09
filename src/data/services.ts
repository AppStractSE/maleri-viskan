export interface ServiceFeature {
  title: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  /** One-liner used on cards and in menus. */
  shortDescription: string;
  /** Intro paragraph on the service page. */
  description: string;
  image: string;
  /** Small square-ish image for menus and thumbnails. */
  thumbnail: string;
  features: ServiceFeature[];
}

export const services: Service[] = [
  {
    id: "malning",
    name: "Målning",
    shortDescription: "All typ av målning, både in- och utvändigt.",
    description:
      "Vi är proffs på målning, oavsett om det är inomhus eller utomhus. Vårt mål är att alltid leverera hög kvalitet, hålla vad vi lovar och bli klara i tid. Vi är dessutom MVK-certifierade för att måla i våtrum, så även badrummet blir både snyggt och säkert.",
    image: "/utomhusmålning01.jpg",
    thumbnail: "/tjanster/malning/utomhus_small.png",
    features: [
      {
        title: "Invändig målning",
        image: "/inomhusmålning.jpg",
        description:
          "Skapa en inbjudande och stilfull atmosfär i ditt hem. Vi använder noggrant utvalda produkter som ger ett vackert resultat med lång hållbarhet. Med ett brett utbud av kulörer och glansgrader anpassar vi varje projekt efter ytan och rummet, så att du får den känsla du är ute efter. Slitstarka och lättskötta färger gör att resultatet håller sig fint i många år.",
      },
      {
        title: "Våtrumsmålning",
        image: "/badrumsmålning.jpg",
        description:
          "Ge ditt våtrum en uppfräschning som är anpassad efter kraven i fuktiga miljöer. Vi är certifierade av Måleribranschens Våtrumskontroll (MVK) och använder produkter som är framtagna för att stå emot fukt. Resultatet är ett badrum som är skyddat mot fuktskador och samtidigt känns fräscht och inbjudande.",
      },
      {
        title: "Utvändig målning",
        image: "/2023-08-0722.jpg",
        description:
          "Ge huset nytt liv. Oavsett om det gäller träfasad, puts, tegel eller takfot behandlar vi varje yta med noggrannhet och omsorg. Vi använder färger som är framtagna för att stå emot väder och vind, och kombinerar teknisk kunskap med känsla för helheten så att fasaden både blir vacker och skyddas över tid.",
      },
      {
        title: "Linoljemålning",
        image: "/tjanster/malning/linolje.png",
        description:
          "Måla med linoljefärg för en unik och tidlös finish. Vi kombinerar traditionellt hantverk med moderna tekniker för vackra och hållbara resultat. Linoljefärg ger djupa kulörer och en mjuk glans samtidigt som den skyddar ytan. Den passar särskilt bra på trädetaljer och åldras vackert med tiden.",
      },
    ],
  },
  {
    id: "tapetsering",
    name: "Tapetsering",
    shortDescription: "Tapetsering som lyfter rummet och ger det rätt stil.",
    description:
      "Oavsett om det gäller hemmet eller kontoret löser vi tapetseringen åt dig. Vi levererar snyggt arbete, håller det vi lovar och blir klara i tid. Fokus ligger på att skapa en stilfull miljö som gör rummet lite mer speciellt.",
    image: "/tjanster/tapetsering/tapetsering.jpg",
    thumbnail: "/tjanster/tapetsering/tapetsering_small.png",
    features: [
      {
        title: "Papperstapetsering",
        image: "/tjanster/tapetsering/tapetsering01.jpg",
        description:
          "Papperstapet ger rummet en klassisk och tidlös känsla. Vi sätter upp den med precision och känsla för detaljer, oavsett om det gäller en accentvägg eller hela rummet. Målet är en sömlös och vacker yta som passar din stil.",
      },
      {
        title: "Non-woven-tapetsering",
        image: "/tjanster/tapetsering/tapetsering.jpg",
        description:
          "Non-woven kombinerar modern estetik med praktisk funktion. Tapeten är enkel att sätta upp, lätt att underhålla och tålig över tid. Vi ser till att den appliceras noggrant så att mönster och struktur kommer till sin rätt.",
      },
      {
        title: "Slätvävstapetsering",
        image: "/tjanster/tapetsering/tapetsering02.jpg",
        description:
          "Slätväv ger en jämn och elegant yta och fungerar samtidigt som armering mot sprickor och yttre påverkan. Vi kombinerar skicklighet med noggrannhet för ett resultat som är både snyggt och hållbart.",
      },
    ],
  },
  {
    id: "spackling",
    name: "Spackling",
    shortDescription: "Jämn och professionell spackling, en perfekt grund inför målning.",
    description:
      "Vi fixar till ytor och ger dem en ny, fräsch look. Oavsett om det handlar om små lagningar eller större förändringar satsar vi alltid på en jämn och snygg finish, så att ytan är redo för nästa steg.",
    image: "/tjanster/spackling/spackling.jpg",
    thumbnail: "/tjanster/spackling/spackling_small.png",
    features: [
      {
        title: "Bredspackling",
        image: "/tjanster/spackling/spackling.jpg",
        description:
          "Bredspackling jämnar ut ojämnheter och skapar en enhetlig bas inför målning. Det är ett viktigt steg för att slutresultatet ska bli jämnt och professionellt.",
      },
      {
        title: "Spackla skarvar och hörn",
        image: "/tjanster/spackling/spackla-skarvar.jpeg",
        description:
          "Skarvar och hörn kräver noggrant förarbete. Minsta slarv syns som ojämnheter när ljuset faller på väggen. Vi har erfarenheten som krävs för att spacklingen ska bli rätt utförd och ge en jämn yta inför målningen.",
      },
      {
        title: "Dammfri slipning med maskin",
        image: "/tjanster/spackling/dammfri-slipning.jpeg",
        description:
          "Med maskinell, dammfri slipning får du en jämn och slät yta utan att dammet sprids i hemmet. Skonsamt mot omgivningen och en yta som är redo för ytbehandling.",
      },
    ],
  },
  {
    id: "fonsterrenovering",
    name: "Fönsterrenovering",
    shortDescription: "Renovering som förbättrar både funktion och utseende.",
    description:
      "Förbättra både funktion och utseende på dina fönster. Vi skrapar bort gammal färg, kittar om för en tät och hållbar försegling, målar bågar och karmar och byter glas när det behövs, alltid med precision och omsorg om hantverket.",
    image: "/tjanster/fonsterrenovering/fonsterrenovering.jpg",
    thumbnail: "/tjanster/fonsterrenovering/fonsterrenovering_small.png",
    features: [
      {
        title: "Skrapning",
        image: "/tjanster/fonsterrenovering/skrapning.jpeg",
        description:
          "Gammal färg och smuts behöver bort från bågar och karmar. Vi skrapar med precision för att skapa en ren och jämn yta, en viktig förberedelse för de behandlingar som följer.",
      },
      {
        title: "Kittning",
        image: "/tjanster/fonsterrenovering/kittning.jpg",
        description:
          "Rätt kittning gör att fönstren blir täta och skyddade mot väder och vind. Vi applicerar kittet noggrant för en tät och hållbar försegling runt bågar och karmar.",
      },
      {
        title: "Målning av fönsterbågar och karm",
        image: "/tjanster/fonsterrenovering/wibo.jpg",
        description:
          "Vi målar bågar och karmar med högkvalitativa produkter i den kulör du önskar. Målningen utförs med precision för jämn täckning och ett resultat som håller länge.",
      },
      {
        title: "Byte av glas",
        image: "/tjanster/fonsterrenovering/byte-av-glas.jpeg",
        description:
          "När det behövs byter vi glas, med försiktighet och expertis. Det förbättrar både energieffektiviteten och utseendet, och vi erbjuder olika glastyper efter dina behov och önskemål.",
      },
    ],
  },
];

export const serviceHref = (service: Pick<Service, "id">) => `/tjanster/${service.id}`;

/** Anchor id for a feature. Matches the anchors used by the old site so existing links keep working. */
export const featureAnchor = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replaceAll(" ", "");

export const getService = (id: string) => services.find((service) => service.id === id);
