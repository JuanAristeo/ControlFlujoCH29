function businssHours(dayNumber,hourNumber){
    if((dayNumber >= 1) && (dayNumber <= 5) 
    && (hourNumber >= 9) &&(hourNumber <= 18)
    ) {
        return true;
    } else {
        return false;
    }
}
console.log(businssHours(4,17))

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber+(yearDayNumber -1)) %7;
}

console.log(getDayNumber(6,112));


function  workHour(yearDayNumber, hourNumber){
    let day = getDayNumber (0, yearDayNumber);
    return businssHours(day, hourNumber)
    
}
console.log(workHour(23,17))