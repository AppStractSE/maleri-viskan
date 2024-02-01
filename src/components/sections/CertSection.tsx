import TextAndImage from "./TextAndImage";

const CertSection = () => {
  return (
    <TextAndImage
      title="Auktorisering och certifikat"
      description="Vi är auktoriserade av Måleribranschens Yrkesnämnd (MYN) och innehar F-skattsedel. Vi är även medlemmar i Måleriföretagen och innehar certifikat för våtrumsmålning."
      image={{
        src: "/MKV.png",
        alt: "Certifikat för Måleribranschens Våtrumskontroll",
        height: 250,
        width: 250,
      }}
      bg="bg-black bg-[url('/badrumsmålning01.png')] bg-cover bg-no-repeat"
      textColor="text-white"
      overlay
    />
  );
};

export default CertSection;
