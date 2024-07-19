const formatDate=({year,month,day}:{year:number,month:number,day:number})=>{
if(!year || !month || !day) return undefined;

const formattedMonth = month < 10 ? `0${month}` : `${month}`
const formattedDay = day < 10 ? `0${day}` : `${day}`
return `${year}-${formattedMonth}-${formattedDay}`

}

export default formatDate;