// function getFieldInput(id){
//     const textElement = document.getElementById(id);

//     const textElementValueString= textElement.value;
//     const textElementValue= parseFloat(textElementValueString);

//   return textElementValue;

// }

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeField = document.getElementById("income-input");
  const incomeFieldString = incomeField.value;
  const incomeInput = parseFloat(incomeFieldString);

  const foodField = document.getElementById("food-cost");
  const foodFieldString = foodField.value;
  const foodCost = parseFloat(foodFieldString);

  const rentField = document.getElementById("rent-cost");
  const rentFieldString = rentField.value;
  const rentCost = parseFloat(rentFieldString);

  const clothesField = document.getElementById("clothes-cost");
  const clothesFieldString = clothesField.value;
  const clothesCost = parseFloat(clothesFieldString);

  const previousTotalExpense = document.getElementById("total-expense");
  const previousTotalString = previousTotalExpense.innerText;
  const previousTotal = parseFloat(previousTotalString);

  const totalExpense = foodCost + rentCost + clothesCost;
  const newTotal = previousTotal + totalExpense;

  previousTotalExpense.innerText = newTotal;

  const balanceLeft = document.getElementById("balance-left");
  const previousBalanceString = balanceLeft.innerText;
  const previousBalanceLeft = parseFloat(previousBalanceString);

  const newBalance = incomeInput - totalExpense;
  const balance = previousBalanceLeft + newBalance;

  balanceLeft.innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const incomeField = document.getElementById("income-input");
  const incomeFieldString = incomeField.value;
  const incomeInput = parseFloat(incomeFieldString);

  const savingInput = document.getElementById("save-percent");
  const savingInputString = savingInput.value;
  const savingPercentNumber = parseFloat(savingInputString);
  // console.log(savingPercentNumber)

  const totalSaving = (savingPercentNumber / 100) * incomeInput;

  const savingAmount= document.getElementById('save-amount');
  const savingAmountString= savingAmount.innerText;
  const previousSavings= parseFloat(savingAmountString);

  const savings= previousSavings + totalSaving;
  savingAmount.innerText= savings;

  // remaining balance

  const balanceLeft = document.getElementById("balance-left");
  const previousBalanceString = balanceLeft.innerText;
  const previousBalanceLeft = parseFloat(previousBalanceString);

  const remainingBalance= document.getElementById('remaining-amount');
  const remainingBalanceString= remainingBalance.innerText;
  const previousRemaining= parseFloat(remainingBalanceString);

  const newRemainingBalance=previousBalanceLeft-totalSaving;
  const balanceRemaining= previousRemaining+ newRemainingBalance;
  remainingBalance.innerText= balanceRemaining;

  // const newRemainingBalance= previousRemaining + newRemainingBalance;
  // const remainingBalanceTotal= previousBalanceLeft - savings;
  
  // remainingBalance.innerText = remainingBalanceTotal;
  
});
