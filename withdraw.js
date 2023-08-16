document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// console.log(newWithdrawAmount);
// step 3

const withdrawTotalElement = document.getElementById('withdraw-total');
const perviousWithdrawTotalString = withdrawTotalElement.innerText;
const perviousWithdrawTotal = parseFloat(newWithdrawAmountString);


//  step 4
const currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;
// step 5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
 alert('Amount Not Available')    
}

// step 6
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
// step 7

withdrawField.value = '';

})