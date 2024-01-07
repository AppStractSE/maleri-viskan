import Image from "next/image";

interface Props {
  title: string;
  description: string;
  bg?: string;
  textColor?: string;
  ltr?: boolean;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

const TextAndImage = ({ title, description, bg, textColor, image, ltr = true }: Props) => {
  return (
    <section className={`${bg} ${textColor}`}>
      <div className={`max-w-screen-2xl mx-auto px-4 py-8 lg:py-24 w-full flex flex-col lg:flex-row justify-center lg:justify-between ${ltr ? "" : "flex-row-reverse"}`}>
        <div>
          <h2 className="text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">{title}</h2>
          <p className="max-w-2xl mt-6 mb-12 font-light md:text-lg lg:text-xl">{description}</p>
        </div>
        <Image width={image.width} height={image.height} alt={image.alt} src={image.src} className="rounded-md mx-auto" />
      </div>
    </section>
  );
};

export default TextAndImage;
