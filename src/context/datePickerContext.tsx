import {createContext,useState} from 'react';
import dateConvertor from '../utils/dateConvertor';




type Props = {
    children: React.ReactNode
}

export type DatePickerContextType = {
    selectedDate: string;
    today: string;
    updateDate: (date: string) => void;
    showDatePicker: boolean;
    updateShowDatePicker:(value:boolean)=>void

  };


export const DatePickerContext = createContext<DatePickerContextType>({
    selectedDate: "",
    today: "",
    updateDate: () => {},
    showDatePicker: false,
    updateShowDatePicker:(value:boolean)=>{
    }
});




export const DatePickerContextProvider = ({ children }: Props) => {
  const today = dateConvertor(new Date()) as string;
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>(today);
  
  
  
  const updateDate = (date: string) => {
    setSelectedDate(date);
  };

  const updateShowDatePicker = (value:boolean) => {
    setShowDatePicker(value);
  };



  return (
    <DatePickerContext.Provider value={{ selectedDate, updateDate, today,showDatePicker,updateShowDatePicker }}>
      {children}
    </DatePickerContext.Provider>
  );
};