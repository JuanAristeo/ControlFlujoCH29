function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber+(yearDayNumber -1)) %7;
}

console.log(getDayNumber(6,10));