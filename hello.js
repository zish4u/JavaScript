console.log("Hello World!")

//Removing duplicate value from an array.
var arr = [1, 2, 2, 3, 9, 7, 8, 9]
function removeDuplicate() {
    var unique = []
    arr.forEach(value => {
        if (!unique.includes(value)) {
            unique.push(value)
        }
    })
    return unique
}
console.log("Duplicate Arr: ", removeDuplicate())

var x = {
    name: 'ramesh'
}
var y = x
y.name = 'Zishan'

console.log(x.name)
