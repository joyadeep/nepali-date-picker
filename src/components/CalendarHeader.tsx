import LeftArrow from "../assets/left_arrow.svg";
import DoubleArrow from "../assets/double_left_arrow.svg";
import { Month,MAX_NEPALI_YEAR,MIN_NEPALI_YEAR } from "../constants/calendarConstants";
import { cn } from "../utils/styleUtils";

type Props = {
  year: number;
  month: number;
  day?: number;
  showingDate: { year: number; month: number; day?: number };
  updateShowingDate: (value: { year: number; month: number; day?: number }) => void;
};

const CalendarHeader = ({year, month,showingDate,updateShowingDate}: Props) => {

  const handleNextMonth = () => {
    let nextMonth = showingDate.month + 1;
    const nextYear = nextMonth > 12 ? showingDate.year + 1 : showingDate.year;
    nextMonth = nextMonth > 12 ? 1 : nextMonth;
    updateShowingDate({ year: nextYear, month: nextMonth });
  };

  // TODO : handle not allowed for months if it is not in min and max year.

  const handleNextYear = () => {
    if (showingDate.year === MAX_NEPALI_YEAR) return;
    updateShowingDate({ year: showingDate.year + 1, month: showingDate.month });
  };

  const handlePreviousMonth = () => {
    let nextMonth = showingDate.month - 1;
    const nextYear = nextMonth === 0 ? showingDate.year - 1 : showingDate.year;
    nextMonth = nextMonth === 0 ? 12 : nextMonth;
    updateShowingDate({ year: nextYear, month: nextMonth });
  };

  const handlePreviousYear = () => {
    if (showingDate.year === MIN_NEPALI_YEAR) return;
    updateShowingDate({ year: showingDate.year - 1, month: showingDate.month });
  };
  return (
    <div className="flex items-center w-full mb-2">
      <div className="flex gap-2">
        <img src={LeftArrow} alt="left arrow" className={cn("size-6 border border-gray-300 rounded-md cursor-pointer hover:border-gray-500 duration-500")} onClick={handlePreviousMonth} />
        <img src={DoubleArrow} alt="left arrow" className={cn("size-6 border border-gray-300 rounded-md cursor-pointer hover:border-gray-500 duration-500",showingDate.year===MIN_NEPALI_YEAR && "cursor-default hover:border-gray-300")} onClick={handlePreviousYear} />
      </div>

      <div className="flex-grow text-center font-medium">{Month[month - 1]} {year}</div>
      
      <div className="flex gap-2">
        <img src={DoubleArrow} alt="left arrow" className={cn("size-6 rotate-180 border border-gray-300 rounded-md cursor-pointer hover:border-gray-500 duration-500",showingDate.year===MAX_NEPALI_YEAR && "cursor-default hover:border-gray-300" )} onClick={handleNextYear}  />
        <img src={LeftArrow} alt="right arrow" className={cn("size-6 rotate-180 border border-gray-300 rounded-md cursor-pointer hover:border-gray-500 duration-500")} onClick={handleNextMonth} />
      </div>
    </div>
  );
};

export default CalendarHeader;
