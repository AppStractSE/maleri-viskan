import TextAndImage from "./TextAndImage";

const ProductSection = () => {
  return (
    <TextAndImage
      overlay
      title="Hållbar målning"
      description={`Måleri Viskan tar aktivt ansvar för miljön. Genom att använda miljövänliga produkter, återanvända verktyg och skänka överbliven färg minimerar vi vår miljöpåverkan.\n\nVårt mål är inte bara att skapa vackra ytor, utan också att aktivt reducera vår påverkan på planeten, ett penseldrag i taget.`}
      bg="bg-black bg-[url('/nature.png')] bg-cover bg-no-repeat"
      textColor="text-white"
    />
  );
};

export default ProductSection;
