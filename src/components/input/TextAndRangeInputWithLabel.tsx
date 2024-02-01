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
      <h6
        className={`mb-2 text-lg leading-none tracking-tight text-cyan-700 md:text-xl ${
          infoBox ? "flex items-center gap-2" : ""
        }`}
      >
        {label}
        {infoBox && (
          <div className="group hidden lg:block">
            <span className="absolute z-50 -mt-14 hidden rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-800 p-2 text-sm font-bold text-white group-hover:block sm:-mt-12">
              {infoBox}
            </span>
            <span className="cursor-pointer">
              <AiOutlineQuestionCircle size={18} />
            </span>
          </div>
        )}
      </h6>
      <div className="mb-4 block text-xs opacity-50 lg:hidden">{infoBox}</div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-6 sm:col-span-3">
          <TextInput
            className="w-full border-b pb-1 text-xl focus:outline-none md:text-2xl lg:text-3xl xl:text-4xl"
            min={min}
            max={max}
            value={value}
            setValue={setValue}
            secondaryValue={secondaryValue}
          />
        </div>
        <RangeInput
          className="col-span-12 mt-4 sm:col-span-9 sm:mt-0 sm:px-4 md:px-4 lg:px-12"
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
