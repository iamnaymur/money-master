// get input field value by id
function stringToNumberConverter(id) {
  const element = document.getElementById(id).value;
  return parseFloat(element);
}
// get text element by id
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;

    // const previousTotalExpense = document.getElementById("total-expense");
  // const previousTotalString = previousTotalExpense.innerText;
  // const previousTotal = parseFloat(previousTotalString);
}
// set text element
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue; /*confusion on this line */
}
