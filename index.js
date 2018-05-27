// Code your solution in this file.
const drivers = ["Ray", "Ana", "Dan"];

function lowerCaseDrivers(drivers){
let  newDriver = drivers.map(function(driver){
    return driver.toLowerCase()
  })
  return newDriver
}
