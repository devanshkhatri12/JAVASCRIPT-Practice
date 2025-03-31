// make promise and resolve it successfully
// mypromise i.e Object,  Promise i.e constructor,  for resolve use then,   for reject use catch
const mypromise1 = new Promise(function(resolve, reject){
    // asyncronous code
    setTimeout(() => {
        console.log("async task")
        resolve()
    }, 2000);
})

mypromise1.then(function()
{
    console.log('promise resolved')
})



// new promise
const mypromise2 = new Promise((resolve ,reject) => {
    let fileLoader = false;
    if(fileLoader)
    {
        resolve("file load successfully")
    }
    else{
        reject("file not loaded")
    }
})

mypromise2.then(value => console.log(value)).catch(error => console.log(error))


// Handling promise using Async and await 
function loadFile()
{
    return new Promise((resolve ,reject) => {
        let fileLoader = false;
        if(fileLoader)
        {
            resolve("file load successfully")
        }
        else{
            reject("file not loaded")
        }
    });
}

async function myfunction()
{
    try{
        const value = await loadFile();
        console.log(value)
    }
    catch(error){
        console.log(error);
    }
}

myfunction()

// note : await don't work without async
