// simplest way, but maybe not quite right
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
firstLetter = [];
word = {
  w1: "Hello ",
  w2: "Good Bye "
};

for (var i = 0, nl = names.length; i < nl; i++) {
    firstLetter[i] = names[i].charAt(0);
   if (firstLetter[i] != "J") {
     console.log(word.w1 + names[i]);
   }
   else {
     console.log(word.w2 + names[i]);
   }
}
