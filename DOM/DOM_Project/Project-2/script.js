const form = document.querySelector('form')

// globally declare krege agr height or weight toh script run kr jaaayegi with empty value
// that why didn't declare height and weight

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.textContent = "Please enter a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)

        switch(BMI){
            case (BMI > 0 || BMI < 18.6):
                result.innerHTML = `<span>${BMI}</span><br><h3>Under Weight</h3>`;
                break;
            case (BMI >= 18.6 || BMI <= 24.9):
                result.innerHTML = `<span>${BMI}</span><br><h3>Normal Range</h3>`;
                break;
            case (BMI > 24.9):
                result.innerHTML = `<span>${BMI}</span><br><h3>Over Weight</h3>`;
                break;
            default:
                result.innerHTML = `<h3>Calculate Again</h3>`
        }
    }


})