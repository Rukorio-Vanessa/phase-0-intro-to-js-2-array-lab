// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
//appends a cat to the end of the array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

//prepends cat to the end of an array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

//removes the last cat from the array
function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const newArray = cats.slice();
    newArray.push(name);
    return newArray;
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const newArray1 = cats.slice();
    newArray1.unshift(name);
    return newArray1;
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name) {
    const newCatsArray = cats.slice(0, cats.length-1);
    return newCatsArray;
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name) {
    const newCatsArray1 = cats.slice(1);
    return newCatsArray1;
}