import Image from "next/image";
interface Props {
  title: string;
  description?: string;
  containerClassName: string;
  className?: string;
  image?: string;
  onClick?: () => void;
  titleClassName?: string;
}
const SmallInfoCard = ({
  title,
  description,
  className,
  image,
  containerClassName,
  onClick,
  titleClassName,
}: Props) => {
  return (
    <div
      className={`${containerClassName} group ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {image ? (
        <div className="overflow-hidden">
          <Image
            alt={title}
            height={350}
            width={450}
            src={image}
            className="h-auto w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      ) : (
        <></>
      )}
      <div className={className}>
        <h3 className={titleClassName}>{title}</h3>
        {description ? <p className="whitespace-pre-line pt-6 md:text-xl">{description}</p> : <></>}
      </div>
    </div>
  );
};

export default SmallInfoCard;
