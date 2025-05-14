

// setTimeout -> func. allow a to execute a func. after an amount
const timeID = setTimeout(() => {
    console.log("printing something...")
},3000)

clearTimeout(timeID)








// setInterval -> 
let timer = setInterval(( ) => {
    console.log("printing something...")
}, 1000)


const clear = setInterval(() => {
    clearInterval(timer);
},5000)

