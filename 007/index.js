// callbacks

function printLater(callBack) {
    setTimeout(callBack, 1000);
}

function printNow() {
    console.log('printNow');
}

const callBack = () => {
    console.log('printLater');
}

printLater(callBack);
printNow();


// Promise
function printLater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('printLater');
        }, 1000);
    })
}

function printNow() {
    console.log('printNow');
}

printLater().then(value => {
    console.log(value);
})
printNow();

// Async - Await
(async () => {
    function printLater() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('printLater');
            }, 1000);
        })
    }

    function printNow() {
        console.log('printNow');
    }

    await printLater().then(value => {
        console.log(value);
    })

    printNow();
})()