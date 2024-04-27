// Get references to DOM elements
const input = document.getElementById('inpt');
const buttons = document.querySelectorAll('.btn');

// Initialize variables to store calculator state
let currentInput = '';
let currentOperation = null;

// Function to handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Check the button value
    if (value >= '0' && value <= '9') {
      // Append number to input
      currentInput += value;
      input.value = currentInput;
    } else if (value === 'C') {
      // Clear input
      currentInput = '';
      input.value = '';
    } else if (value === '=') {
      // Perform calculation
      if (currentOperation && currentInput !== '') {
        const result = evaluateExpression(currentOperation, parseInt(input.value));
        input.value = result;
        currentInput = result.toString();
        currentOperation = null;
      }
    } else {
      // Store the operation
      currentOperation = value;
      currentInput = '';
    }
  });
});

// Function to evaluate the arithmetic expression
function evaluateExpression(operation, operand) {
  const currentValue = parseInt(input.value);
  switch (operation) {
    case '+':
      return currentValue + operand;
    case '-':
      return currentValue - operand;
    case 'x':
      return currentValue * operand;
    case '/':
      return currentValue / operand;
    default:
      return currentValue;
  }
}
