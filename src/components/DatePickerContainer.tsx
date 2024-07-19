import NepaliWeekData from "../constants/nepaliWeekData";
import CalendarHeader from "./CalendarHeader";
import Calendar from "./Calendar";
import { useState } from "react";
import useDatePickerContext from "../hooks/useDatePickerContext";



const DatePickerContainer = () => {

  const {selectedDate} = useDatePickerContext();
  
  const [year, month, day] = selectedDate.split("-");
  
  const [showingDate, setShowingDate] = useState<{
    year: number,
    month: number,
    day?: number
  }>({ year: parseInt(year), month: parseInt(month), day: parseInt(day) });

  const endDate = NepaliWeekData[showingDate.year][showingDate.month - 1].endDate;
 

  const updateShowingDate = (value:{ year: number, month: number, day?: number}) => {
    setShowingDate(value);
  };
  

  return (
    <div className="absolute mt-1 w-fit border rounded-md shadow-md p-2">
      <CalendarHeader
        year={showingDate.year}
        month={showingDate.month}
        showingDate={showingDate}
        updateShowingDate={updateShowingDate}
      />
      <Calendar endDate={endDate}  showingDate={showingDate} />
    </div>
  );
};

export default DatePickerContainer;
