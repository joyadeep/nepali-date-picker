
import { useEffect, useState } from 'react'
import { days } from '../constants/calendarConstants'
import NepaliWeekData from '../constants/nepaliWeekData'
import Day from './Day'
import formatDate from '../utils/formatDate'

type Props = {
    endDate: number,
    showingDate: {
        year: number,
        month: number,
        day?: number
    }
}

export interface IDay {
    value: number|string,
    isCurrentMonth?: boolean,
    isHeader?: boolean,
    fullDate?: string
}

const Calendar = ({ endDate,showingDate}: Props) => {

  const [monthDateArray,setMonthDateArray] = useState<IDay[]>([]);
  

  useEffect(() => {
  
  const monthArray = [];
  const thisMonthWeekStart = NepaliWeekData[showingDate.year][showingDate.month - 1].weekStart;
  const previousMonthEndDate = showingDate.month === 1 ? NepaliWeekData[showingDate.year - 1][11].endDate :
  NepaliWeekData[showingDate.year][showingDate.month - 2].endDate;


// for previous month days
  for (let i=thisMonthWeekStart -1 ; i>=0; i--){
    monthArray.push({value : previousMonthEndDate - i,fullDate:formatDate({year:showingDate.year,month:showingDate.month-1,day:previousMonthEndDate - i})})
  }
  
// for current month days
  for (let i=1; i<=endDate; i++){
    monthArray.push({value : i, isCurrentMonth:true,fullDate:formatDate({year:showingDate.year,month:showingDate.month,day:i})})
  }

  
  const nextMonthDaysCount = 42 - monthArray.length;
  for (let i=1; i<=nextMonthDaysCount; i++){
    monthArray.push({value : i,fullDate:formatDate({year:showingDate.year,month:showingDate.month+1,day:i})})
  }

  setMonthDateArray(monthArray)

    
  }, [showingDate.month,showingDate.year,endDate])
  

  return (
    <>

        <div className='grid grid-cols-7 my-3'>
          {days.map((value) => (
            <div className='text-center text-gray-500' key={Math.random()}>{value}</div>
          ))}
        </div>
       
        <div className='grid grid-cols-7 place-items-center divide-x divide-y border [clip-path:inset(1px_0_0_1px)] *:border-l *:border-t *:border-gray-200 rounded-md'>
            {monthDateArray.map((value) => (
                <Day value={value} key={Math.random()} />
            ))}
        </div>
    </>
  )
}

export default Calendar