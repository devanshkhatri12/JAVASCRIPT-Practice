// Function a block of code

// IN-BUILT function
console.log("hello")


// USER-DEFINE function
// normal function
function add(a,b)
{
    let sum = a+b
    return sum
}
console.log(add(2,3));

// Annonymous Function
let f = function(a,b){
    let sum = a +b
    return sum
}
console.log(f(2,3))

// Immediate function
let F = function(a,b){
    let sum = a +b
    return sum
}(2,3)
console.log(F)


// Arrow function
let ADD = (a,b) => {
    let sum = a+b
    return sum
}
console.log(ADD(2,3))


// function within Functions
// function call()
// {
//     return function(a,b){
//         return a+b
//     }
// }
// var sum = call()
// console.log(sum(4,6))


// CLOSURE
function call(){
    var a = 5
    function add(b)
    {
        let sum = a+b
        return sum
    }
    a=3
    return add
} 

function call(){
    var a = 5
    return function(b)
    {
        let sum = a+b
        return sum
    }
    a=3
} 

var adding = call()
console.log(adding(5))