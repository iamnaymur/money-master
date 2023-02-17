document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeInput = stringToNumberConverter("income-input");

  const foodCost = stringToNumberConverter("food-cost");

  const rentCost = stringToNumberConverter("rent-cost");

  const clothesCost = stringToNumberConverter("clothes-cost");

  // EXAMPLE without the common function-->
  // const previousTotalExpense = document.getElementById("total-expense");
  // const previousTotalString = previousTotalExpense.innerText;
  // const previousTotal = parseFloat(previousTotalString);
  // previousTotalExpense.innerText = newTotal;
  // --->
  const previousTotal = getTextElementValueById("total-expense");

  const totalExpense = foodCost + rentCost + clothesCost;
  const newTotal = previousTotal + totalExpense;
  setTextElementValueById("total-expense", newTotal);

  const previousBalanceLeft = getTextElementValueById("balance-left");

  const newBalance = incomeInput - totalExpense;
  const balance = previousBalanceLeft + newBalance;
  setTextElementValueById("balance-left", balance);
});

document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = stringToNumberConverter("income-input");

  const savingPercentNumber = stringToNumberConverter("save-percent");

  const totalSaving = (savingPercentNumber / 100) * incomeInput;
// EXAMPLE without the common function
  // const savingAmount = document.getElementById("save-amount");
  // const savingAmountString = savingAmount.innerText;
  // const previousSavings = parseFloat(savingAmountString);
  // savingAmount.innerText = savings;
  const previousSavings = getTextElementValueById("save-amount");

  const savings = previousSavings + totalSaving;

  setTextElementValueById("save-amount", savings);

  // remaining balance

  const previousBalanceLeft = getTextElementValueById("balance-left");

  const previousRemaining = getTextElementValueById("remaining-amount");

  const newRemainingBalance = previousBalanceLeft - totalSaving;
  const balanceRemaining = previousRemaining + newRemainingBalance;

  setTextElementValueById("remaining-amount", balanceRemaining);
});
