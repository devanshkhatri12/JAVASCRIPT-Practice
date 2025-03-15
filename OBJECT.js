// Object Literal
var obj = { 
    name: "devansh",
    age: 22,

    // function within object
    greet(name){
        return "hello " + name
    }
}

console.log(obj.greet("dk"))

// object within function
function fun(val){
    let add = (val1) =>  val + val1

    function sub(val1)
    {
        var sub = val - val1
        return sub
    }

    var obj = {
        add , sub
    }

    return obj
}
console.log(fun(5).add(2))
console.log(fun(5).sub(2))

// another form of writting 
function calc(val)
{
    let obj = {
        add(val1)
        {
            let sum = val  + val1;
            return sum
        },
        sub(val1)
        {
            let sub = val - val1;
            return sub
        }
    }
    return obj
}

console.log(calc(5).add(2))
console.log(calc(5).sub(2))

