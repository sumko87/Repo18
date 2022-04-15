// Only change code below rhis line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        yield x = i;
    }
    return;
}
function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        yield x = i;
    }
    return;
}
function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        yield x = i;
    }
    return;
}

const iterator = myGenerator();
const fifteenArray = [];

for (let i = 0; i < 16; i++) {
    if (i < 15) {
        fifteenArray.push(`${iterator.next().value}#,`);
    } else {
        fifteenArray.push(`${iterator.next().value}!`);
    }
}
console.log(...fifteenArray);
// Only change code above this line
module.exports = { fifteenArray, myGenerator }