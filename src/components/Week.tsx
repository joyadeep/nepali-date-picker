import useDatePickerContext from "../hooks/useDatePickerContext";
import Day from "./Day";

type Props = {
  dayStart: number;
  dayEnd: number;
  minDate: number;
  showingDate: {
    year: number;
    month: number;
    day?: number;
  };
};

const filler = (dayStart: number) => {
  const filler = [];
  for (let i = 0; i < dayStart; i++) {
    filler.push(<div key={"filler" + i} />);
    // TODO : display pervious month and next month date
    // TODO : create 7x7 array for calendar and this opens possibility to mark holiday.
  }
  return filler;
};
const weekDays = (
  minDate: number,
  today: string,
  selectedDate: string,
  dayEnd: number,
  updateDate: (date: string) => void,
  showingDate: { year: number; month: number; day?: number },
) => {
  const weekDays = [];
  let date = minDate;
  for (let i = minDate; i <= dayEnd; i++) {
    weekDays.push(
      <Day
        key={"day" + date}
        value={date}
        updateDate={updateDate}
        showingDate={showingDate}
        isToday={today === `${showingDate.year}-${showingDate.month}-${date}`}
        isSelected={
          selectedDate === `${showingDate.year}-${showingDate.month}-${date}`
        }
      />
    );
    date++;
  }
  return weekDays;
};

const Week = ({ dayStart, dayEnd, minDate, showingDate }: Props) => {
  const { updateDate, today, selectedDate } = useDatePickerContext();

  

  return (
    <div className="grid grid-cols-7 place-items-center gap-x-4 gap-y-3">
      {filler(dayStart)}
      {weekDays(minDate, today, selectedDate, dayEnd, updateDate, showingDate)}
    </div>
  );
};

export default Week;
