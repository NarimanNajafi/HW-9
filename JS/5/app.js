let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function inBetween(first, second) {
    return (el) => {
        if (el >= first && el <= second) {
            return el;
        }
    }
}
console.log(arr.filter(inBetween(3, 5)));

function inArray(arr) {
    return ((el) => {
        return arr.map((el2) => {
            console.log(el);
            console.log(el2);
            if (el === el2) {
                return el2
            }
        })

    })
}
console.log(arr.filter(inArray([1, 2, 12])));