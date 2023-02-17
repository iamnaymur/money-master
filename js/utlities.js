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

// alert element
// you can use this alert function to set alerts for wrong input, i am not currently using this function in this project. But i have tried it, it works fine!!
function alertWarningById(elementId){
  const element= document.getElementById(elementId).value;
  if(element!='number'){
    alert('please put a number to continue')
  }
  else{
    element.value;
  }
}
