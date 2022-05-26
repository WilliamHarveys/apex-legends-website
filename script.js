let randomiser = document.querySelector(".bouton");
const legends = [
  "Blood Hound",
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
const legendsColor = [
  "#f31c37",
  '#f8571d',
  '#e472fc',
  '#5cfbf4',
  '#3f417b',
  "#f31c37",
  '#dcdc6b',
  '#7c7d1b',
  '#349208',
  '#0e1e47',
  '#a7a457',
  '#7c0395',
  '#dcdc6b',
  '#5cfbf4',
  '#e8c152',
  '#8b008b',
  '#0e1e47',
  '#ff760d',
  '#663a82',
  '#26c6da',
  '#006064',
  '#5cfbf4'
]

randomiser.addEventListener("click", click);

const min = 0;
const max = legends.length - 1;

function click(e){
    const ran = getRandomNumberBetween(min, max)
    let LegendChoice = legends[ran]
    let LegendColor = legendsColor[ran]
    console.log(LegendColor)
    console.log(LegendChoice)
    console.log()
    console.log(ran)
    
    const legendChoiceFin = document.getElementById("legend");

    legendChoiceFin.textContent = LegendChoice 
    legendChoiceFin.style.background = LegendColor
    legendChoiceFin.style.visibility = "visible"

}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//function randomIntFromInterval(min, max) { // min and max included
//return Math.floor(Math.random() * (max - min + 1) + min)
