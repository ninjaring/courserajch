// // starter, example by coursera
// function orderChickenWith(what) {
//   if (what == undefined) {
//     console.log("Chicken with whatever!");
//   }
//   else {
//     console.log("chicken with " + what);
//   }
// }
// // code above can be simplified into code below
function orderChickenWith(what) {
  what = what || "whatever!";
  console.log("Chicken with " + what);
}

orderChickenWith("noodles");
orderChickenWith();

// // #1 - 170816 Conditional Semantic Sentence
console.log("======= #1 170816");
// // inserting two or more variables in one semantic conditional sentence
// // the sentence syntax changes depending on how much variables defined

// logic area
var main, side;

function orderwhat() {
  if (main == undefined && side == undefined) {
    console.log("no order");
  }
  if (main == undefined && side !==undefined) {
    console.log("side dish only: " + side);
  }
  if (main !== undefined && side == undefined) {
    console.log("just " + main);
  }
  if (main !== undefined && side !== undefined) {
    console.log(main + " with " + side);
  }
}

function ordermain(maindish) {
  main = maindish;
}
function orderside(sidedish) {
  side = sidedish;
}

// input area
ordermain();
orderside();

// output area
orderwhat();

console.log("======= #2 ?");
