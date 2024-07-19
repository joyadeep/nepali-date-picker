import { useEffect, useRef } from "react";
import DatePickerContainer from "./DatePickerContainer";
import Input from "./Input";
import useDatePickerContext from "../hooks/useDatePickerContext";

const DatePickerWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { selectedDate, showDatePicker, updateShowDatePicker } =
    useDatePickerContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target as Node)
      ) {
        updateShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updateShowDatePicker]);

  return (
    <div className="w-full relative" ref={wrapperRef}>
      <label>Date</label>
      <Input
        showDatepicker={() => updateShowDatePicker(true)}
        value={selectedDate}
      />
      {showDatePicker && <DatePickerContainer />}
    </div>
  );
};

export default DatePickerWrapper;
