// HOME AND AWAY VARIABLES

let home = 0;
let away = 0;

// SECTION HOME TEAM

function homePlusOne() {
  home += 1;
  let counterPlusOne = document.getElementById("homeScore");
  // @ts-ignore
  counterPlusOne.innerText = home;
}

function homePlusThree() {
  home += 3;
  let counterPlusThree = document.getElementById("homeScore");
  // @ts-ignore
  counterPlusThree.innerText = home;
}

// SECTION AWAY TEAM

function awayPlusOne() {
  away += 1;
  let awayCounterPlusOne = document.getElementById("awayScore");
  // @ts-ignore
  awayCounterPlusOne.innerText = away;
}

function awayPlusThree() {
  away += 3;
  let counterAwayPlusThree = document.getElementById("awayScore");
  // @ts-ignore
  counterAwayPlusThree.innerText = away;
}
