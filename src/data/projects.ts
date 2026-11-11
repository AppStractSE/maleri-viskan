export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  /** Original public post; the date is publication, not completion of the work. */
  source?: { url: string; publishedAt: string };
}

export const projects: Project[] = [
  {
    id: "interior-november-2026",
    title: "Matsal i Örby",
    description: "Förarbete och målning av en matsal i Örby, med röda väggar och vita snickerier.",
    image: "/projekt/instagram-2026/interior-november.jpg",
    images: [
      "/projekt/instagram-2026/interior-november.jpg",
      "/projekt/instagram-2026/matsal-orby-02.jpg",
      "/projekt/instagram-2026/matsal-orby-03.jpg",
      "/projekt/instagram-2026/matsal-orby-04.jpg",
    ],
    source: { url: "https://www.instagram.com/maleriviskan/p/Dfaoa5Cgh1c/", publishedAt: "2026-11-06" },
  },
  {
    id: "rod-trafasad-2026",
    title: "Fasad- och fönstermålning i Hyssna",
    description: "Fasad- och fönstermålning av en stuga i Hyssna, med röd träfasad och vita detaljer.",
    image: "/projekt/instagram-2026/rod-trafasad-maj.jpg",
    images: [
      "/projekt/instagram-2026/rod-trafasad-maj.jpg",
      "/projekt/instagram-2026/hyssna-02.jpg",
      "/projekt/instagram-2026/hyssna-03.jpg",
      "/projekt/instagram-2026/hyssna-04.jpg",
      "/projekt/instagram-2026/hyssna-05.jpg",
      "/projekt/instagram-2026/hyssna-06.jpg",
    ],
    source: { url: "https://www.instagram.com/maleriviskan/p/DX_FKOLAn7C/", publishedAt: "2026-05-06" },
  },
  {
    id: "brosaeter-bnb",
    title: "Brosäter BnB",
    description:
      "Vi fick äran att måla om hos Brosäter BnB. Upprustningen har lyft byggnadens unika karaktär och ger gästerna en bekväm och autentisk vistelse.\n\nResultatet är en charmig och historisk bed and breakfast i natursköna omgivningar nära Horred.",
    image: "/projekt/brosaeter-bnb/brosaeter-bnb01.jpg",
    images: [
      "/projekt/brosaeter-bnb/brosaeter-bnb01.jpg",
      "/projekt/brosaeter-bnb/brosaeter-bnb02.jpg",
      "/projekt/brosaeter-bnb/brosaeter-bnb03.jpg",
      "/projekt/brosaeter-bnb/brosaeter-bnb04.jpg",
      "/projekt/brosaeter-bnb/brosaeter-bnb05.jpg",
      "/projekt/brosaeter-bnb/brosaeter-bnb06.jpg",
    ],
  },
  {
    id: "badrumsrenovering",
    title: "Badrumsrenovering",
    description:
      "Vi har förvandlat flera slitna badrum till lyxiga oaser. Med fokus på detaljer och högkvalitativa material skapar vi badrum som inte bara är vackra, utan också funktionella och hållbara rum att använda varje dag.",
    image: "/projekt/badrumsrenovering/badrumsrenovering01.jpg",
    images: [
      "/projekt/badrumsrenovering/badrumsrenovering01.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering02.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering03.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering04.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering05.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering06.jpg",
      "/projekt/badrumsrenovering/badrumsrenovering07.jpg",
    ],
  },
  {
    id: "foensterrenovering",
    title: "Fönsterrenovering",
    description:
      "Vi har gjort flera fönsterrenoveringar där vi inte bara förbättrar utseendet utan även fönstrets funktion. Vi lyfter fönstrens estetik och ökar deras energieffektivitet och hållbarhet.",
    image: "/projekt/foensterrenovering/foensterrenovering01.jpg",
    images: [
      "/projekt/foensterrenovering/foensterrenovering01.jpg",
      "/projekt/foensterrenovering/343288725_1282998682626348_4714560292021963833_n.jpg",
      "/projekt/foensterrenovering/343041346_1294003464829016_156461179358455414_n.jpg",
      "/projekt/foensterrenovering/343290774_132571229797235_4062895441691607470_n.jpg",
      "/projekt/foensterrenovering/343404290_173807518941121_620741752227096276_n.jpg",
      "/projekt/foensterrenovering/343457422_1170952913593117_5195278620721124921_n.jpg",
      "/projekt/foensterrenovering/343470367_715109903951235_5427864966355206036_n.jpg",
    ],
  },
  {
    id: "panelbyte-pa-vindvaning",
    title: "Panelbyte på vindsvåning",
    description:
      "Ett roligt projekt med panelbyte på en vindsvåning. Vi valde en vitmålad panel som ger ett ljust och fräscht intryck.",
    image: "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning01.jpg",
    images: [
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning01.jpg",
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning02.jpg",
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning03.jpg",
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning04.jpg",
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning05.jpg",
      "/projekt/panelbyte-pa-vindvaning/panelbyte-pa-vindvaning06.jpg",
    ],
  },
  {
    id: "nyproduktion",
    title: "Nyproduktion",
    description:
      "Vi har flera nyproduktioner i ryggsäcken. Här är några exempel på nybyggen vi varit delaktiga i.",
    image: "/projekt/nyproduktion/nyproduktion01.jpg",
    images: [
      "/projekt/nyproduktion/nyproduktion01.jpg",
      "/projekt/nyproduktion/nyproduktion02.jpg",
      "/projekt/nyproduktion/nyproduktion03.jpg",
      "/projekt/nyproduktion/nyproduktion04.jpg",
      "/projekt/nyproduktion/nyproduktion05.jpg",
      "/projekt/nyproduktion/nyproduktion06.jpg",
      "/projekt/nyproduktion/nyproduktion07.jpg",
      "/projekt/nyproduktion/nyproduktion08.jpg",
      "/projekt/nyproduktion/nyproduktion09.jpg",
    ],
  },
  {
    id: "renovering-i-lokaler",
    title: "Renovering i lokaler",
    description:
      "Även lokaler behöver kärlek och omtanke. Här är några exempel på lokaler vi har renoverat.",
    image: "/projekt/renovering-i-lokal/renovering-i-lokal-08.png",
    images: [
      "/projekt/renovering-i-lokal/renovering-i-lokal-01.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-02.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-03.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-04.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-05.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-06.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-07.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-08.png",
      "/projekt/renovering-i-lokal/renovering-i-lokal-09.png",
    ],
  },
  {
    id: "upprustat-infoer-foersaeljning",
    title: "Upprustat inför försäljning",
    description:
      "Många vill fräscha upp hemmet inför en försäljning. Här är några exempel på uppfräschningar vi har gjort inför försäljning.",
    image: "/projekt/upprustat-infoer-foersaeljning/upprustat-infoer-foersaeljning02.jpg",
    images: [
      "/projekt/upprustat-infoer-foersaeljning/upprustat-infoer-foersaeljning02.jpg",
      "/projekt/upprustat-infoer-foersaeljning/upprustat-infoer-foersaeljning01.jpg",
      "/projekt/upprustat-infoer-foersaeljning/upprustat-infoer-foersaeljning04.jpg",
      "/projekt/upprustat-infoer-foersaeljning/upprustat-infoer-foersaeljning03.jpg",
    ],
  },
];

export const projectHref = (project: Pick<Project, "id">) => `/projekt/${project.id}`;

export const getProject = (id: string) => projects.find((project) => project.id === id);
