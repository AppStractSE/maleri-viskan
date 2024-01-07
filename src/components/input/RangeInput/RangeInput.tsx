"use client";

import styles from "./style.module.scss";

interface Props {
  className?: string;
  min: number;
  max: number;
  step: number;
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

const RangeInput = ({ className, min, max, step, sliderValue, setSliderValue }: Props) => {
  return (
    <div className={`${styles["range_slider"]} ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        className={`rounded-xl`}
        onChange={(e) => setSliderValue(parseInt(e.target.value))}
        style={{
          background: `linear-gradient(to right, #1ca5c9 0%, #0d6d87 ${
            (sliderValue / max) * 95
          }%, rgba(0,0,0,.05) ${(sliderValue / max) * 100}%, rgba(0,0,0,.05) 100%)`,
        }}
      />
    </div>
  );
};

export default RangeInput;
