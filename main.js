let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try{
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch{
        console.log("An error has occured");
    }
    finally{
        console.log("Calculation attempt complete");
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

errorBtns[0].addEventListener('click', () => {
    console.log("Console Log Demo");
});

errorBtns[1].addEventListener('click', () => {
    console.error("Console Error Demo");
});

errorBtns[2].addEventListener('click', () => {
    console.count("Count Button");
});

errorBtns[3].addEventListener('click', () => {
    console.warn("Warn Button");
});

errorBtns[4].addEventListener('click', () => {
    const x = 2;
    const y = 1;
    const reason = "x and y are expected to be equal";
    console.assert(x === y, {x, y, reason});
});

errorBtns[5].addEventListener('click', () => {
    console.clear();
});

errorBtns[6].addEventListener('click', () => {
    console.dir(errorBtns[6]);
});

errorBtns[7].addEventListener('click', () => {
    console.dirxml(errorBtns[7]);
});

errorBtns[8].addEventListener('click', () => {
    console.group("console.group demo");
});

errorBtns[9].addEventListener('click', () => {
    console.groupEnd("console.group demo");
});

errorBtns[10].addEventListener('click', () => {
    console.table(errorBtns);
});

errorBtns[11].addEventListener('click', () => {
    console.time("Console Timer demo");
});

errorBtns[12].addEventListener('click', () => {
    console.timeEnd("Console Timer demo");
});

errorBtns[13].addEventListener('click', () => {
    console.trace();
});

class myError extends Error {
    constructor(message){
        super(message);
        this.name="myError";
    }
}

errorBtns[14].addEventListener('click', () => {
    throw new myError("error :(");
});