interface wrmiProps {
  title: string;
  border: string;
  backgroundColor?: any;
  icon: JSX.Element;
  onClick?: () => void;
}
const MenuItem = ({ onClick, backgroundColor, title, icon }: wrmiProps) => {
  return (
    <div
      className={`w-[16.188rem] h-[3rem] cursor-pointer rounded-full  ${backgroundColor} `}
      onClick={onClick}
    >
      <div className=" w-full h-full flex flex-row items-center justify-center gap-4">
        <div>{icon}</div>
        <p className="text-base font-bold">{title}</p>
      </div>
    </div>
  );
};

export default MenuItem;
