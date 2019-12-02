const massList = require('./numbersArray')

const listofMass = massList.listofMass;

function calcFuel(mass) {
    let roundNumber = Math.floor(mass / 3)
    return roundNumber - 2
}

let addedFuel = 0
for (var i = 0; i < listofMass.length; i++) {
    let moduleFuel = 0
    let fuel = calcFuel(listofMass[i])
    moduleFuel = fuel
    while (fuel >= 0) {
        fuel = calcFuel(fuel)
        if (fuel >= 0) {
            moduleFuel += fuel
        }
    }
    addedFuel += moduleFuel
}
console.log("Added: ", addedFuel)