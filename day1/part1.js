const massList = require('./numbersArray')

const listofMass = massList.listofMass;

function calcFuel(mass) {
    let roundNumber = Math.floor(mass / 3)
    return roundNumber - 2
}

let totalFuel = 0
for (var i = 0; i < listofMass.length; i++) {
    totalFuel += calcFuel(listofMass[i])
    console.log(totalFuel)
}
console.log("Total Fuel", totalFuel)