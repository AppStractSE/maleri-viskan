import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import ContactSection from "@/components/sections/ContactSection";

const page = () => {
  return (
    <>
      <GenericHeroSection
        className="from-emerald-600 to-green-700"
        title="Vad vi gör för miljön"
        description={`Vi är stolta över att vara en del av lösningen på klimatförändringarna. Vi är noga med att använda miljövänliga produkter och att återvinna så mycket som möjligt.`}
        quoteButton
      />
      <Breadcrumbs />
      {/* <TextAndImage
        overlay
        title="Miljövänliga produkter"
        description={`Måleri Viskan tar aktivt ansvar för miljön. Genom att använda miljövänliga produkter, återanvända verktyg och skänka överbliven färg minimerar vi vår miljöpåverkan.\n\nVårt mål är inte bara att skapa vackra ytor, utan också att aktivt reducera vår påverkan på planeten, ett penseldrag i taget.`}
        bg="bg-black bg-[url('/nature.png')] bg-cover bg-no-repeat"
        textColor="text-white"
      />
      <TextAndImage
        overlay
        ltr
        title="Återanvända verktyg och material"
        description={`Måleri Viskan tar aktivt ansvar för miljön. Genom att använda miljövänliga produkter, återanvända verktyg och skänka överbliven färg minimerar vi vår miljöpåverkan.\n\nVårt mål är inte bara att skapa vackra ytor, utan också att aktivt reducera vår påverkan på planeten, ett penseldrag i taget.`}
        bg="bg-black bg-[url('/nature.png')] bg-cover bg-no-repeat"
        textColor="text-white"
      />
      <TextAndImage
        overlay
        title="Skänka överbliven färg"
        description={`Måleri Viskan tar aktivt ansvar för miljön. Genom att använda miljövänliga produkter, återanvända verktyg och skänka överbliven färg minimerar vi vår miljöpåverkan.\n\nVårt mål är inte bara att skapa vackra ytor, utan också att aktivt reducera vår påverkan på planeten, ett penseldrag i taget.`}
        bg="bg-black bg-[url('/nature.png')] bg-cover bg-no-repeat"
        textColor="text-white"
      />
      <BigCards
        index={0}
        title="Asd"
        description="Asd asd asd"
        image="https://alcro.se/sites/default/files/styles/thumbnail_800_auto/public/cumulus/fargburk_miljo.jpg?itok=VOmcqqjV"
      /> */}
      <section className="bg-white">
        <div className="mx-auto my-8 w-full max-w-screen-2xl px-4">
          <div className="space-y-12 lg:space-y-16">
            <BigCards
              containImage
              imagePos="left"
              title="Miljövänliga produkter"
              description={`Vi strävar efter att minimera vår miljöpåverkan genom att använda noggrant utvalda svanenmärkta miljövänliga produkter. Vi väljer med omsorg material som inte bara lever upp till höga kvalitetsstandarder utan också respekterar och bevarar vår värdefulla planet.\n\nVarje val av färg och produkt är en medveten handling mot en mer hållbar framtid.`}
              image="https://alcro.se/sites/default/files/styles/thumbnail_800_auto/public/cumulus/fargburk_miljo.jpg?itok=VOmcqqjV"
              index={0}
            />
            <BigCards
              title="Återanvända verktyg och material"
              description={`Vi försöker minimera vårt ekologiska fotavtryck genom att konsekvent återanvända verktyg och material. Genom att ge våra rollerbyglar och andra verktyg ett andra liv, minskar vi inte bara avfall utan främjar även en hållbar och ansvarsfull användning av resurser.\n\nVarje återanvänt verktyg och material är ett medvetet val som speglar vårt åtagande för en mer hållbar och cirkulär framtid och visar att små handlingar kan göra stor skillnad i vårt miljöansvariga arbetssätt.`}
              image="https://images.pexels.com/photos/6764266/pexels-photo-6764266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              index={1}
            />
            <BigCards
              title="Överbliven färg"
              description={`När du planerar ditt målningsprojekt kan du aktivt delta i vår hållbarhetsresa genom att inkludera överbliven färg från vårt initiativ. Meddela oss i din offertförfrågan, så anpassar vi ditt projekt med fokus på ansvarsfull resursanvändning.\n\nVi strävar inte bara efter att minimera färgsvinn; vi ser varje färgburk som en möjlighet att främja en mer hållbar och medveten användning av våra värdefulla resurser.`}
              image="https://images.pexels.com/photos/5691680/pexels-photo-5691680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              index={2}
            />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="mx-auto w-full max-w-screen-2xl px-4 pb-8">
          <ul>
            <li className="mb-4">
              <p className="mb-4 max-w-6xl whitespace-pre-line text-lg md:text-xl">
                Vi använder miljövänliga produkter och återvinner så mycket som möjligt. Vi är
                stolta över att vara en del av lösningen på klimatförändringarna. Vi är noga med att
                använda miljövänliga produkter och att återvinna så mycket som möjligt.
              </p>
            </li>
            <li className="mb-4">
              <p className="mb-4 max-w-6xl whitespace-pre-line text-lg md:text-xl">
                Vi använder miljövänliga produkter och återvinner så mycket som möjligt. Vi är
                stolta över att vara en del av lösningen på klimatförändringarna. Vi är noga med att
                använda miljövänliga produkter och att återvinna så mycket som möjligt.
              </p>
            </li>
            <li className="mb-4">
              <p className="mb-4 max-w-6xl whitespace-pre-line text-lg md:text-xl">
                Vi använder miljövänliga produkter och återvinner så mycket som möjligt. Vi är
                stolta över att vara en del av lösningen på klimatförändringarna. Vi är noga med att
                använda miljövänliga produkter och att återvinna så mycket som möjligt.
              </p>
            </li>
            <li className="mb-4">
              <p className="mb-4 max-w-6xl whitespace-pre-line text-lg md:text-xl">
                Vi använder miljövänliga produkter och återvinner så mycket som möjligt. Vi är
                stolta över att vara en del av lösningen på klimatförändringarna. Vi är noga med att
                använda miljövänliga produkter och att återvinna så mycket som möjligt.
              </p>
            </li>
          </ul>
        </div>
      </section> */}
      <ContactSection />
      <GoogleMapSection />
    </>
  );
};

export default page;
