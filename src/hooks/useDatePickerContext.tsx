import { useContext } from "react";
import { DatePickerContext} from "../context/datePickerContext";

export const useDatePickerContext = ()=>{
    return useContext(DatePickerContext);
}

export default useDatePickerContext;