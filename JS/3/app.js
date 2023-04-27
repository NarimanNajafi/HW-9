function callWrapper(fn) {
    const calls = [];

    function wrappedFn(...args) {
        calls.push(args);
        return fn.apply(this, args);
    }

    wrappedFn.calls = calls;
    return wrappedFn;
}
function add(a, b) {
    return a + b;
}

const wrappedAdd = callWrapper(add);

wrappedAdd(1, 2); 
wrappedAdd(3, 4);

console.log(wrappedAdd.calls);
//  [[1, 2], [3, 4]]
