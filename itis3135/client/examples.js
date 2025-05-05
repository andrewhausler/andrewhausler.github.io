
const hasTurbo = true;

const engineType = hasTurbo ? "Turbo Charged" : "Naturally Aspirated";

console.log(engineType);

let fuelLevel = 3;

while (fuelLevel > 0) {
    console.log("Injecting fuel!");
    fuelLevel--;
}

const myGarage = ["Audi", "Toyota", "Tesla"];
let sentence = "In my garage I have a "

for (let i=0; i<myGarage.length; i++) {
    if (i === myGarage.length - 1) {
        sentence += "and " + myGarage[i] + ".";
        break;
    }
    sentence += myGarage[i] + ", ";
}

console.log(sentence);