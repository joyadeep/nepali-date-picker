import calendar_icon from "../assets/calendar_icon.svg"
import { cn } from "../utils/styleUtils";
type Props = {
    readonly?:boolean;
    showDatepicker?:() => void;
    value?:string;
}

const Input = ({readonly=true,showDatepicker,value}: Props) => {
 
  return (
    <div className="w-full relative cup" onClick={showDatepicker}>
        <input type="text" className={cn("border rounded-lg pl-2 pr-10 py-2 w-full")} placeholder="yyyy/mm/dd" value={value} readOnly={readonly}  />
        <img src={calendar_icon} alt="calendar icon" className="absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  )
}

export default Input