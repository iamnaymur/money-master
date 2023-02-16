document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeInput = stringToNumberConverter("income-input");

  const foodCost = stringToNumberConverter("food-cost");

  const rentCost = stringToNumberConverter("rent-cost");

  const clothesCost = stringToNumberConverter("clothes-cost");

  // const previousTotalExpense = document.getElementById("total-expense");
  // const previousTotalString = previousTotalExpense.innerText;
  // const previousTotal = parseFloat(previousTotalString);

  const previousTotal = getTextElementValueById('total-expense');

  const totalExpense = foodCost + rentCost + clothesCost;
  const newTotal = previousTotal + totalExpense;
  setTextElementValueById("total-expense", newTotal);


  // previousTotalExpense.innerText = newTotal;

  const balanceLeft = document.getElementById("balance-left");
  const previousBalanceString = balanceLeft.innerText;
  const previousBalanceLeft = parseFloat(previousBalanceString);

  const newBalance = incomeInput - totalExpense;
  const balance = previousBalanceLeft + newBalance;

  balanceLeft.innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = stringToNumberConverter("income-input");

  const savingPercentNumber = stringToNumberConverter("save-percent");

  const totalSaving = (savingPercentNumber / 100) * incomeInput;

  const savingAmount = document.getElementById("save-amount");
  const savingAmountString = savingAmount.innerText;
  const previousSavings = parseFloat(savingAmountString);

  const savings = previousSavings + totalSaving;
  savingAmount.innerText = savings;

  // remaining balance

  const balanceLeft = document.getElementById("balance-left");
  const previousBalanceString = balanceLeft.innerText;
  const previousBalanceLeft = parseFloat(previousBalanceString);

  const remainingBalance = document.getElementById("remaining-amount");
  const remainingBalanceString = remainingBalance.innerText;
  const previousRemaining = parseFloat(remainingBalanceString);

  const newRemainingBalance = previousBalanceLeft - totalSaving;
  const balanceRemaining = previousRemaining + newRemainingBalance;
  remainingBalance.innerText = balanceRemaining;
});
