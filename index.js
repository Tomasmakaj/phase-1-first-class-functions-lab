// Code your solution in this file!
const returnFirstTwoDrivers = function(a){
    return a.slice(0,2)
}
const returnLastTwoDrivers = function(b){
    return b.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier){
    return function(value) {
        return fareMultiplier * value
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,cars) => {
    return cars(drivers)
}