function User(username, userID, userValue){
    this.username = username
    this.userID = userID
    this.userValue = userValue

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this;
}

const userOne = new User('dev', 12, true)
console.log(userOne)                        // return userone value in object
console.log(userOne.greeting)               //return function i.e constructor

const userTwo = User('devansh', 4, false)
console.log(userOne)                        // userOne override value of usertwo bcz we use same instance


