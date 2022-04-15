// Only change code below this line
let generatorArray = [];
function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}
var iterator = myGenerator(6, 7, 8);
for (i = 0; i <= 12; i++) {
    generatorArray[i] = iterator.next().value;
}
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };