import NepaliMonthData from "../constants/nepaliMonthData";
import formatDate from "./formatDate";


const GregorianMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

const dateConvertor = (date: Date) => {
    if (!date){
        return undefined;
    }
    const [month, day, year] = date.toLocaleDateString().split('/').map(Number);
    let nepaliYear = year + 56;
    let nepaliMonth =(month-1) + 8;
    if (nepaliMonth >= 12) {
        nepaliMonth -= 12;
        nepaliYear += 1;
    }
    let nepaliDay = day + NepaliMonthData[nepaliYear][nepaliMonth] - 1;

    let otherDay = day - GregorianMonths[month];

    let otherMonth = nepaliMonth + 1;

    let otherYear = nepaliYear;

    if (otherMonth >= 12) {
        otherMonth -= 12;
        otherYear += 1;
    }

    // check for leap year

    if (month === 2 && ((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0 )) ){
        otherDay += 1;
    }


    otherDay = otherDay + NepaliMonthData[otherYear][otherMonth] - 1;


    if (otherDay >0){
        nepaliYear = otherYear;
        nepaliMonth = otherMonth;
        nepaliDay = otherDay;
    }

    //  TODO : add prefix '0' for single digit month and day


    return formatDate({year:nepaliYear,month:nepaliMonth,day:nepaliDay});
}

export default dateConvertor;