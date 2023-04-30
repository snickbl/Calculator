let numbers = document.querySelectorAll('.numbers');
let result = document.querySelector('.calc-screen span');
let signs = document.querySelectorAll('.sign');
let equals = document.querySelector('.equal');
let percent = document.querySelector('.prc');
let clear = document.querySelector('.ac');
let negative = document.querySelector('.pm');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resulValue = 0;

for(let i = 0; i < numbers.length; i++){

    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue == false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign(){
    for(let i = 0; i<signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resulValue = firstValue + secondValue;
    }else if(sign === "-"){
        resulValue = firstValue - secondValue;
    }else if(sign === "*"){
        resulValue = firstValue * secondValue;
    }else if(sign === "/"){
        resulValue = firstValue / secondValue;
    }
    result.innerHTML = resulValue;
    firstValue = resulValue;
    secondValue = "";

})

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resulValue = -firstValue;
        firstValue = resulValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resulValue = -resulValue;
    }

    result.innerHTML = resulValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resulValue = firstValue / 100;
        firstValue = resulValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resulValue = resulValue /100;
    }

    result.innerHTML = resulValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = ""
    isSecondValue = false;
    sign = "";
    resulValue = 0;
})