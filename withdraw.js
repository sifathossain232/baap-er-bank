/*
1. add event handler with the withdraw button
2. get the withdraw amount from the input filed
2-5. also make sure to convart the input into a number by using parseFloat
3. get previus withdraw total
4. calculate total withdraw amount
4-5. set total withdrw amount
5. get the previus ballance total
6.calculate new ballance total
6-5. set the new ballance total
7. clear the input filed
*/


// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawFiled = document.getElementById('widthdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3
    const widthdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = widthdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);
    
    // step-4
    const currentWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    // step 4-5
    widthdrawTotalElement.innerText = currentWithdrawTotal;


    //  step-5
    const ballanceTotalElement = document.getElementById('ballance-total');
    const previusDepositTotalString = ballanceTotalElement.innerText
    const previusBallanceTotal = parseFloat(previusDepositTotalString);
    
    
    // step-6
    const newBallanceTotal = previusBallanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = newBallanceTotal;

    // step-7
    withdrawFiled.value = '';
})
