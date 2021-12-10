// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const CopyCats = [...cats, name];
    return CopyCats;
}

function prependCat(name){
    const CopyCats = [name, ...cats]
    return CopyCats;
}

function removeLastCat(){
    const CopyCats = cats.slice(0, -1);
    return CopyCats;
}

function removeFirstCat(){
    const CopyCats = cats.slice(1);
    return CopyCats;
}
