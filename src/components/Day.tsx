import useDatePickerContext from "../hooks/useDatePickerContext";
import { cn } from "../utils/styleUtils";
import { IDay } from "./Calendar";

type Props = {
  value: IDay;
};

const Day = ({
  value
  
}: Props) => {

  const { updateDate,updateShowDatePicker,selectedDate,today } = useDatePickerContext();
  const {value:data,isCurrentMonth=false,isHeader=false,fullDate} = value;

  const isToday = today === fullDate;
  const isSelected = selectedDate === fullDate;
  return (
    <>
      <div
        className={cn(
          "hover:bg-gray-100 size-7 text-center relative rounded-md cursor-pointer flex items-center justify-center ",
          isHeader && "text to-black font-medium",
          !isCurrentMonth && !isHeader && "text-gray-400  hover:bg-transparent",
          isSelected && "bg-blue-500 text-white hover:bg-blue-500",
        )}
        onClick={() => {
          updateDate(fullDate as string);
          updateShowDatePicker(false);
        }}
      >
        {data}
      <div className={cn(isToday && !isSelected && "absolute bottom-0  w-7 h-1 rounded-b-md bg-blue-500")}></div>
      </div>
    </>
  );
};

export default Day;
