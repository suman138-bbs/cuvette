const display = document.querySelector('.display');

function appendToDisplay(val) {
    var value = display.value;
    var trimedValue;
   value = value + val;
   trimedValue =  value.replace(/^0+/, '');
    display.value = trimedValue;
    
   
}
function calculate(value) {
    let result = parseInt(value)
    console.log(result)
    

}


let equal = document.querySelector('.equal')
equal.addEventListener('click', () => {
    calculate(display.value)
})



