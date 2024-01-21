interface Props {
  title: string;
  description: string;
  className: string;
}
const SmallInfoCard = ({ title, description, className }: Props) => {
  return (
    <div className={`rounded-md px-8 py-12 flex flex-col justify-between ${className}`}>
      <h3 className="text-3xl tracking-tight font-bold">{title}</h3>
      <p className="md:text-xl whitespace-pre-line pt-6">{description}</p>
    </div>
  );
};

export default SmallInfoCard;
