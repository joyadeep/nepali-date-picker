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
      <button
        className={cn(
          "hover:bg-gray-100 size-12 divide-x divide-gray-200  text-center relative cursor-pointer flex items-center justify-center ",
          isHeader && "text to-black font-medium",
          !isCurrentMonth && !isHeader && "text-gray-400",
          isSelected && "bg-blue-500 text-white hover:bg-blue-500",
          isToday && !isSelected && "text-blue-500"
        )}
        onClick={() => {
          updateDate(fullDate as string);
          updateShowDatePicker(false);
        }}
      >
        {data}
      
      </button>
    </>
  );
};

export default Day;
