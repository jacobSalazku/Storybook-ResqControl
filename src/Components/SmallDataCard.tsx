import "../index.css";
import acuteIcon from "../stories/icons/acute.png";
import eventIcon from "../stories/icons/event.png";
import globeIcon from "../stories/icons/globe.png";
import { Dot } from "lucide-react";
import maleIcon from "../stories/helpers/icons/maleIcon.png";
import { parse } from "date-fns";
import {
  getBorderColorClass,
  BlueArrowWaiting,
} from "../stories/helpers/ClientDataFunctions";

/** Card with all the Patient information */
export interface PatientProps {
  name: string;
  language: string;
  urgency: string;
  time: string;
  date: string;
  gender: string;
}

const SmallDataCard = ({
  time,
  urgency,
  name,
  language,
  date,
  gender,
}: PatientProps) => {
  const parsedDate = parse(date, "dd", new Date());

  return (
    <div
      className={` h-[7.125rem] w-[17.625rem] bg-card-background-color border-l-8 s
       shadow-md shadow-p-grey ${getBorderColorClass(
         urgency,
       )} flex flex-row justify-between rounded pt-2 px-2`}
    >
      <div className="w-full flex flex-col gap">
        <div className=" flex flex-row justify-between">
          <p className="  font-sans text-[18px] text-black ">{name}</p>
        </div>

        <div className="flex flex-row justify-start  gap-6 pt-2 pb-2  text-p-text-color  text-[14px]">
          <div className="flex flex-row border-b-2">
            <div className="">
              <p>Botstpijn</p>
            </div>
            <Dot />
            <div>
              <p>Hoofdpijn</p>
            </div>
            <Dot />
            <div>
              <p>Braken</p>
            </div>
          </div>

          <div className="flex flex-col justify-center cursor-pointer">
            {BlueArrowWaiting}
          </div>
        </div>
        <div className="flex flex-row items-start  justify-between pt-1 text-sm pr-14 ">
          <div className="flex flex-row  gap-2 justify-center items-center ">
            {gender == "male" && <img src={maleIcon} alt="male" />}
            <img src={acuteIcon} />

            <div>
              <p>{time}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={eventIcon} />
            <div>
              <p>{parsedDate.getDate()}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img src={globeIcon} />
            <div>
              <p>{language}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallDataCard;
