// JS also allow us to create array of functions

function add(a,b)
{
    return a+b
}

function multiple(a)
{
    return a * 2
}

function sqare(a)
{
    return a * a
}

function AddSquare(a,b)
{
    return sqare(add(a,b));
}

console.log(AddSquare(2,3))



// we also write it as
// passes function as an arguments
function compose1(f1, f2)
{
    return function(a,b)
    {
        return f2(f1(a,b))
    }
}

let result1 = compose1(add , multiple)
console.log(result1(2,3))


// we write above code in mondern js(using arraow function)
const compose2 = (f1,f2,f3) => (a,b) => {
    return f3(f2(f1(a,b)))
}

let result2 = compose2(add, multiple, sqare)
console.log(result2(2,3))


// Function composition of unlimited functions 
function composeAll(...funs)
{
    return function(...values)
    {
        return funs.reduce((val , fn) => fn(val), values)
    }
}

const result = composeAll(add , multiple, sqare)
console.log(result(2,3))


// in mordern javascript we write it as..
const composeFinal = (...funs) => (...values) => funs.reduce((val , fn) => fn(val), values);

const resultFinal = composeFinal(add , multiple, sqare)
console.log(resultFinal(2,3))

