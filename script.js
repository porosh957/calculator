function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value
    .replace(/√\(/g, 'Math.sqrt(')
    .replace(/log\(/g, 'Math.log10(')
    .replace(/\^/g, '**')
    .replace(/%/g, '/100'); // This converts % to division by 100

  try {
    const result = eval(expression);
    if (isNaN(result) || result === Infinity || result === -Infinity) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}


