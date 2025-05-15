class User{
    constructor(email , password)
    {
        this.email = email
        this.password = password
    }

    get email()
    {
        return this._email.toUpperCase();
    }

    set email(value)
    {
        this._email = value
    }
    // Getter
    get password()
    {
        return `${this._password}devansh`;
    }

    // setter
    set password(value)
    {
        this._password = value
    }
}

const dk = new User("dk@user.com", "123")

console.log(dk.email)
console.log(dk.password)


// OLD WAY

function User(Name , registration_no)
{
    this._Name = Name;
    this._registration_no = registration_no;

    Object.defineProperty(this, 'registration_no',{
        get: function()
        {
            return this.registration_no.toUpperCase();
        },

        set: function(value)
        {
            this.registration_no = value
        }
    });


}






// Maximum call stack size exceeded -> bcz here we set password in two ways that why it cant decide from where it take (from cosntructor and setter)