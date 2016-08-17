// // Default values
// function orderChickenWith(what) {
//   if (what == undefined) {
//     console.log("just chicken");
//   }
//   else {
//     console.log("chicken with " + what);
//   }
// }
//
// orderChickenWith("noodles");
// orderChickenWith();


//// exercises

// logic area
var main, side;

function orderwhat() {
  if (main == undefined && side == undefined) {
    console.log("no order");
  }
  if (main == undefined) {
    console.log("side dish only: " + side);
  }
  if (side == undefined) {
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
ordermain("tuna");
orderside();

// output area
orderwhat();
