// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const newArray = cats.slice();
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    const newArray1 = cats.slice();
    newArray1.unshift(name);
    return newArray1;
}

function removeLastCat(name) {
    const newCatsArray = cats.slice(0, cats.length-1);
    return newCatsArray;
}

function removeFirstCat(name) {
    const newCatsArray1 = cats.slice(1);
    return newCatsArray1;
}