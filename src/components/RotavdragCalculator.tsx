"use client";
import { useState } from "react";
import TextAndRangeInputWithLabel from "./input/TextAndRangeInputWithLabel";

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
    <section>
      <div className="max-w-screen-2xl mx-auto px-4 py-8 w-full lg:flex lg:justify-between gap-12 xl:gap-24 space-y-8 lg:space-y-0">
        <div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Testa ROT-avdraget hos oss!
          </h2>
          <p className="max-w-6xl text-lg md:text-xl mt-6 mb-12 whitespace-pre-line">
            Med ROT-avdrag får du upp till 50 000 kr i skatterabatt per person och år. Du behöver
            bara betala 70% av arbetskostnaden för målning, tapetsering och annat arbete vi gör i
            din bostad eller sommarstuga.{"\n\n"}
            En arbetskostnad på 100 000 kr ger en skatterabatt på 30 000 kr, detta gäller per person
            och år. Få saker är så lämpade för ROT-avdraget som just målning och tapetsering
            eftersom så mycket som 85-90% av den totala kostnaden kan utgöras av arbete som ger rätt
            till skattereduktion.{"\n\n"}
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
              max={300000}
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
            <div className="flex justify-end px-4 lg:px-12 my-4">
              <button
                className="bg-cyan-600 text-white text-xs px-4 py-2.5 rounded-md font-medium"
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
          <h6 className="text-4xl md:text-3xl font-bold tracking-tight leading-none">Avdrag</h6>
          <h4
            className="
            text-5xl md:text-6xl mb-2 font-bold tracking-tight leading-none text-cyan-500
          "
          >
            {prettifyNumber(savedAmount)} kr
          </h4>
          <p className="text-lg md:text-xl mt-6 mb-4 whitespace-pre-line">
            Måleri Viskan tar <span className="font-bold">{prettifyNumber(workcostValue)}</span>{" "}
            kronor inklusive moms för sitt arbete.{"\n"}
            Materialet kostar <span className="font-bold">
              {prettifyNumber(materialcostValue)}
            </span>{" "}
            kronor.{"\n"}
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
          <h6 className="text-lg md:text-xl mb-2 font-bold tracking-tight leading-none">
            Den totala renoveringskostnaden med ROT-avdraget blir då endast{" "}
            <span className="font-bold">{prettifyNumber(newPrice + materialcostValue)}</span> kronor
            inklusive moms.
          </h6>
          <button className="ml-auto mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded">
            Begär offert
          </button>
        </div>
      </div>
    </section>
  );
};

export default RotAvdragCalculator;
