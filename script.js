let randomiser = document.querySelector(".bouton");
const legends = [
  "Blood Houd",
  "Gibraltar",
  "Life Line",
  "Pathfinder",
  "Wraith",
  "Bangalore",
  "Caustic",
  "Mirage",
  "Octane",
  "Wattson",
  "Crypto",
  "Revenant",
  "Loba",
  "Rampart",
  "Horizon",
  "Fuse",
  "Valkyrie",
  "Seer",
  "Ash",
  "Mad Maggie",
];

randomiser.addEventListener("click", click);

const min = 0;
const max = legends.length - 1;

function click(e){
    const ran = getRandomNumberBetween(min, max);
    let LegendChoice = legends[ran]
    console.log(LegendChoice)
    console.log(ran)
    document.getElementById("legend").textContent = LegendChoice 

}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//function randomIntFromInterval(min, max) { // min and max included
//return Math.floor(Math.random() * (max - min + 1) + min)
