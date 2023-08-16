document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// step 3

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
      
    const previousDepositTotal = parseFloat(previousDepositTotalString);
// step 4

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal ;
// step 5
// get blance current total
const balanceTotalElement  = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 6
// calculate the balance total
 const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//  set the balance total
balanceTotalElement.innerText = currentBalanceTotal;



// step 7
    depositField.value = ''
})