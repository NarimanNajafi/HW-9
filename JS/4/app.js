function f(x) {
    console.log(x)
}
const delayedFunction = function (f, ms) {
    return function (...args) {
        setTimeout(() => f(...args), ms);

    }
}


const f2000 = delayedFunction(f, 2000);
const f3500 = delayedFunction(f, 3000);
f2000("test");
f3500("Nariman");


