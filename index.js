function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(122, 239, 250)';
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
}

function displayUserInput() {
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  if (input && display) {
    display.textContent = `You typed: ${input.value}`;
  }
}

function setupEventListeners() {
  const changeBtn = document.getElementById('changeColorButton');
  const resetBtn = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');

  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor);
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  document.body.addEventListener('dblclick', resetBackgroundColor);
  document.addEventListener('keydown', displayKeyPress);

  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};