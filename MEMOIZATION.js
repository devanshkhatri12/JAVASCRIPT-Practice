// Memoize/cache   -> it just like DP in DSA


function square(n){
    return n*n
}

function memoize(func){
    let cache = {}

    return function(...args)
    {
        let n = args[0]
        if(n in cache)
        {
            return cache[n];
        }
        else{
            let ans = func(n)
            cache[n] = ans
            return cache[n];
        }
    }
}

const result = memoize(square)

//calling function first time
console.time()
console.log(result(5))
console.timeEnd()


// time is decreased in execution
console.time()
console.log(result(5))
console.timeEnd()