interface TitelCardProps {
  title: string;
  rightLogo: any;
  button?: JSX.Element;
}
const TitleCard = ({ button, rightLogo, title }: TitelCardProps) => {
  return (
    <div className="h-16 w-[58rem] flex flex-row justify-between px-5 items-center overflow-hidden  border-b border-b-dark-blue mb-4">
      <div className="flex flex-row justify-start items-center gap-2">
        <div>{rightLogo}</div>
        <div>
          <p className="text-2xl text-p-text-color  flex  flex-row  items-center font-medium">
            {title}
          </p>
        </div>
      </div>
      <div className="flexm justify-center items-center">{button}</div>
    </div>
  );
};

export default TitleCard;
