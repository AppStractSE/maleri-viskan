import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import RangeInput from "./RangeInput/RangeInput";
import TextInput from "./TextInput";

interface Props {
  label: string;
    infoBox?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  secondaryValue: string;
  setValue: (value: number) => void;
}
const TextAndRangeInputWithLabel = ({
  label,
  infoBox,
  min,
  max,
  value,
  secondaryValue,
  step,
  setValue,
}: Props) => {
  return (
    <div>
      <h6 className={`text-lg md:text-xl mb-2 tracking-tight leading-none opacity-70 ${infoBox ? "flex items-center gap-2" : ""}`}>
        {label}
        {infoBox &&
        <span>
          <AiOutlineQuestionCircle size={18} />
        </span>
        }
      </h6>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 sm:col-span-3">
          <TextInput
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl border-b w-full pb-1 focus:outline-none"
            min={min}
            max={max}
            value={value}
            setValue={setValue}
            secondaryValue={secondaryValue}
          />
        </div>
        <RangeInput
          className="col-span-8 sm:col-span-9 px-4 md:px-4 lg:px-12"
          min={min}
          max={max}
          step={step}
          sliderValue={value}
          setSliderValue={setValue}
        />
      </div>
    </div>
  );
};

export default TextAndRangeInputWithLabel;
