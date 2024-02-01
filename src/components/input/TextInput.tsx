interface Props {
  className?: string;
  min: number;
  max: number;
  value: number;
  secondaryValue: string;
  setValue: (value: number) => void;
}
const TextInput = ({ className, min, max, value, setValue, secondaryValue }: Props) => {
  const cleanNumber = (number: string) => {
    const cleanedNumber = number.replace(/\s/g, "").replace(secondaryValue, "");
    return isNaN(parseInt(cleanedNumber, 10)) ? "0" : cleanedNumber;
  };

  const prettifyNumber = (number: number) => {
    return Math.round(number).toLocaleString("sv-SE").replaceAll(",", " ");
  };

  return (
    <input
      disabled
      className={className}
      type="text"
      min={min}
      max={max}
      value={`${prettifyNumber(value)} ${secondaryValue}`}
      onChange={(e) => setValue(parseInt(cleanNumber(e.target.value), 10))}
    />
  );
};

export default TextInput;
