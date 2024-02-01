"use client";
import { useState } from "react";
import TextAndRangeInputWithLabel from "./input/TextAndRangeInputWithLabel";
import QuoteModalButtonWrapper from "./modal/QuoteModalWrapper";

const RotAvdragCalculator = () => {
  const [applicantsValue, setApplicantsValue] = useState(1);
  const [materialcostValue, setMaterialcostValue] = useState(5000);
  const [workcostValue, setWorkcostValue] = useState(10000);

  const calculateRotAvdrag = (price: number, applicants: number) => {
    const maxRotAvdrag = applicants * 50000;
    const rotAvdragPercentage = 0.3;

    const savedAmount = price * rotAvdragPercentage;
    const newPrice = savedAmount > maxRotAvdrag ? price - maxRotAvdrag : price - savedAmount;

    return {
      newPrice: Math.min(newPrice, newPrice),
      savedAmount: Math.min(savedAmount, maxRotAvdrag),
    };
  };

  const prettifyNumber = (number: number) => {
    return Math.round(number).toLocaleString("sv-SE").replaceAll(",", " ");
  };

  const { newPrice, savedAmount } = calculateRotAvdrag(workcostValue, applicantsValue);

  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-screen-2xl gap-12 space-y-8 px-4 py-8 lg:flex lg:justify-between lg:space-y-0 xl:gap-24">
          <div>
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-4xl xl:text-5xl">
              Räkna ut ROT-avdraget hos oss!
            </h2>
            <p className="mb-12 mt-6 max-w-6xl whitespace-pre-line text-lg md:text-xl">
              Med ROT-avdrag får du upp till 50 000 kr i skatterabatt per person och år. Du behöver
              bara betala 70% av arbetskostnaden för målning, tapetsering och annat arbete vi gör i
              din bostad eller sommarstuga.{"\n\n"}
              En arbetskostnad på 100 000 kr ger en skatterabatt på 30 000 kr, detta gäller per
              person och år. Få saker är så lämpade för ROT-avdraget som just målning och
              tapetsering eftersom så mycket som 85-90% av den totala kostnaden kan utgöras av
              arbete som ger rätt till skattereduktion.{"\n\n"}
              Nedan kan du räkna ut hur mycket du kan spara med ROT-avdraget.
            </p>
            <div className="space-y-8">
              <TextAndRangeInputWithLabel
                label="Antal sökande"
                infoBox="Antal personer som ansöker om ROT-avdraget."
                min={0}
                max={2}
                step={1}
                value={applicantsValue}
                secondaryValue="st"
                setValue={setApplicantsValue}
              />
              <TextAndRangeInputWithLabel
                label="Arbetskostnad"
                infoBox="Skatterabatten baseras på arbetskostnaden. Detta är den kostnad som Måleri Viskan tar för sitt arbete."
                min={1000}
                max={450000}
                step={100}
                value={workcostValue}
                secondaryValue="kr"
                setValue={setWorkcostValue}
              />
              <TextAndRangeInputWithLabel
                label="Materialkostnad"
                infoBox="Kostnaden för material som används. Här går det inte att få skatterabatt."
                min={0}
                max={50000}
                step={100}
                value={materialcostValue}
                secondaryValue="kr"
                setValue={setMaterialcostValue}
              />
            </div>
            <div className="my-4 flex justify-end px-4 lg:px-12">
              <button
                className="rounded-md bg-cyan-600 px-4 py-2.5 text-xs font-medium text-white"
                onClick={() => {
                  setApplicantsValue(1);
                  setMaterialcostValue(5000);
                  setWorkcostValue(10000);
                }}
              >
                Nollställ
              </button>
            </div>
          </div>
          <div className="w-full max-w-lg">
            <h6 className="text-4xl font-bold leading-none tracking-tight md:text-3xl">Avdrag</h6>
            <h4
              className="
            mb-2 text-5xl font-bold leading-none tracking-tight text-cyan-500 md:text-6xl
          "
            >
              -{prettifyNumber(savedAmount)} kr
            </h4>
            <p className="mb-4 mt-6 whitespace-pre-line text-lg md:text-xl">
              Måleri Viskan tar <span className="font-bold">{prettifyNumber(workcostValue)}</span>{" "}
              kronor inklusive moms för sitt arbete.{"\n"}
              Materialet kostar{" "}
              <span className="font-bold">{prettifyNumber(materialcostValue)}</span> kronor.{"\n"}
              Den totala kostnaden blir alltså{" "}
              <span className="font-bold">
                {prettifyNumber(workcostValue + materialcostValue)}
              </span>{" "}
              kronor.{"\n\n"}
              Med ROT-avdraget betalar du{" "}
              <span className="font-bold">{prettifyNumber(newPrice)}</span> kronor i arbetskostnad
              till Måleri Viskan.{"\n"}
              Skatterabatt <span className="font-bold">{prettifyNumber(savedAmount)}</span> kronor.
            </p>
            <h6 className="mb-6 text-lg font-bold leading-none tracking-tight md:text-xl">
              Den totala renoveringskostnaden med ROT-avdraget blir då endast{" "}
              <span className="font-bold">{prettifyNumber(newPrice + materialcostValue)}</span>{" "}
              kronor inklusive moms.
            </h6>
            <QuoteModalButtonWrapper
              className="w-full justify-center rounded-sm border border-black bg-black px-12 py-4 text-white transition-all duration-200 hover:bg-white hover:text-black md:w-fit"
              label={"Begär offert"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RotAvdragCalculator;
