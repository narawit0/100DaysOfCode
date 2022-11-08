function echo(message, callBack) {
    return callBack(message);
}

function helloWorld(name) {
    return `Hello world, ${name}.`;
}

function helloAlien(name) {
    return `Hello Alien from ${name}.`;
}

console.log(echo('Tony', helloWorld)); // Hello world, Tony.
console.log(echo('Elon', helloAlien)); // Hello Alien from Elon.