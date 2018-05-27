// Code your solution in this file.
const drivers = ["Ray", "Ana", "Dan"];
const oDrivers = ["Ray Charles", "Dan Man", "Ana Banana"]

function lowerCaseDrivers(drivers){
let  newDriver = drivers.map(function(driver){
    return driver.toLowerCase()
  })
  return newDriver
}

// function nameToAttributes(oDrivers){
//   let newDriver = oDrivers.map(function(driver){
//
//   })
// }
theDrivers = [
  {name: "James", hometown: "Chicago"},
  {name: "Dee", hometown: "New York"}

]

function attributesToPhrase(theDrivers){
  sentences = theDrivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return sentences
}
