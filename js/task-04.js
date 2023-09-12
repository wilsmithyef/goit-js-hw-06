const decrementButtom = document.querySelector('[data-action="decrement"]');
const incrementButtom = document.querySelector('[data-action="increment"]');
const counterValueElement = document.querySelector('#value'); 

let counterValue = 0;

function updateCounterValue() {
    counterValueElement.textContent = counterValue;
    console.log(`valor actual del contador: ${counterValue}`);
} 

decrementButtom.addEventListener('click', function() {
    counterValue--;
    updateCounterValue();
});

incrementButtom.addEventListener('click', function() {
    counterValue++;
    updateCounterValue();
});

updateCounterValue();
