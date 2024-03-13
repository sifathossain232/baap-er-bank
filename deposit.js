// Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
// step-2: get the deposit amount from the deposit  input filed
const depositFiled = document.getElementById('deposit-filed');
const newDepositAmountString = depositFiled.value;
const newDepositAmount = parseFloat(newDepositAmountString);

// step-3: get the current deposit total amount
// for non-input(element other then input, textarea) use innerText to get the text
const depositTotalElement = document.getElementById('deposit-total');
const previusDepositTotalString = depositTotalElement.innerText;
const previusDepositTotal = parseFloat(previusDepositTotalString);

// step-4: add numbers to set the total deposit
const currentDepositTotal = previusDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// step-5: get ballance current total
const ballanceTotalElement = document.getElementById('ballance-total');
const previusBallanceTotalString = ballanceTotalElement.innerText;
const previusBallanceTotal = parseFloat(previusBallanceTotalString);


// step-6: calculate current ballance total
const currentBallanceTotal = previusBallanceTotal + newDepositAmount;
// set the ballance total
ballanceTotalElement.innerText = currentBallanceTotal;

// step-7: clear the deposit filed
depositFiled.value = '';

})