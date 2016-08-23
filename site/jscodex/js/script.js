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

// // #2 230816 Math Agent
console.log("======= #2 230816");
// // two undefined variables with predefined operation
// example one
function alpha(a) {
  function satu(s1) {
    return s1 - a;
  };
  return satu;
}
var minus10 = alpha(10);
console.log(minus10(2));

// example two
function harga(rp) {
  function jumlah(item) {
    return item * rp;
  };
  return jumlah;
}

var rejoice12s = harga(4900); // define operation
rejoicebotol = harga(17000);
sabunall = harga(5000);
rejoice12s.namabarang = "Rejoice sachet 12s: ";
console.log(rejoice12s(5)); // then get direct result one by one
console.log(rejoicebotol(1));
console.log(sabunall(10));

function transaksi(n, barang) { // or passing functions as arguments
  return barang(n);
}
var hasil = transaksi(12, rejoice12s); // then create 'hasil' var
console.log(rejoice12s.namabarang + hasil);
hasil = transaksi(12, rejoicebotol); // -- another 'hasil' var
console.log(hasil);
//
// // #3
console.log("======= #3 Declaration");
// // declaration
function beta(b) {
  return {
    dua: function() {
      console.log(b + " is a number");
    }
  }
}

var info = beta(7);
info.dua();
beta(2);
