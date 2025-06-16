const buttons = document.querySelectorAll('.button')
const body  = document.querySelector('body')

buttons.forEach(function (button){
    button.addEventListener('click', function(event){
        const color = event.target.id

        switch(color){
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'green':
                body.style.backgroundColor = 'green'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            default:
                body.style.backgroundColor = 'white'
        }
    })
})

