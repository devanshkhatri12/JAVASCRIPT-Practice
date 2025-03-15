// IN js we make 2 type of array 

// Contructor array
let arr1 = new Array(3)

console.log(arr1)           // basically it return size of arr1

arr1[0] = 1
arr1[1] = 2
arr1[2] = 3
console.log(arr1)           // basically it return array element


// array literals(it is easier than constrctor array)
let arr2 = [1,2,3]
console.log(arr2)

// to iterate over array
for(let i=0; i<arr1.length; i++)
{
    console.log(arr2[i]);
}

// map function ->  it return new array while performing some operation
// syntax: array.map(function(currentelem, index, array))
let num = [1,2,3,4,5]
let a = num.map((n) => {
    return n+1;
})

console.log(a)


// filter method -> it also as same as MAP mathod
let ages = [12,18,21,7,23]
let result = ages.filter((age) => {
    return age>=18
})

console.log(result)


// reduce method -> return a single interger
let arr = [1,2,3,4,5]
let add = arr.reduce((a,b)=> {
    return a+b;
})

console.log(add)