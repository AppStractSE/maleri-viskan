import TextAndImage from "./TextAndImage";

interface Props {
  quoteButton?: boolean;
  readMoreButton?: boolean;
}

const EnvironmentSection = ({ quoteButton, readMoreButton }: Props) => {
  return (
    <TextAndImage
      ltr
      overlay
      title="Hållbar målning"
      description={`Vi tar aktivt ansvar för miljön. Genom att använda miljövänliga produkter, återanvända verktyg och erbjuda överbliven färg till ett mindre pris, minimerar vi vår miljöpåverkan.\n\nVårt mål är inte bara att skapa vackra ytor, utan också att aktivt reducera vår påverkan på planeten, ett penseldrag i taget.`}
      bg="bg-black bg-[url('/nature.png')] bg-cover bg-no-repeat"
      textColor="text-white"
      readMoreButton={readMoreButton}
      quoteButton={quoteButton}
      link="/miljoarbete"
    />
  );
};

export default EnvironmentSection;
