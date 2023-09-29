// function for genarate random number
function randomNumber() {
  const random = Math.round(Math.random() * 10000);
  const randomString = random + '';
  if (randomString.length === 4) {
    const randomInput = document.getElementById('randomInput');
    randomInput.value = random;
  } else {
    randomNumber();
  }
}

document.getElementById('randomBtn').addEventListener('click', () => {
  randomNumber();
});

// calculation section for number
document.getElementById('calculation').addEventListener('click', e => {
  const calInput = document.getElementById('calInput');
  const element = e.target.innerText;
  if (isNaN(element)) {
    if (element === 'C') {
      calInput.value = '';
    } else if (element === '<') {
      const calValue = calInput.value;
      if (calValue.length > 0) {
        calInput.value = calValue.slice(0, -1);
      }
    }
  } else {
    calInput.value += element;
  }
});

document.getElementById('submit').addEventListener('click', () => {
  const calInput = document.getElementById('calInput').value;
  const randomInput = document.getElementById('randomInput').value;
  if (calInput === randomInput) {
    document.getElementById('success').style.display = 'block';
    document.getElementById('fail').style.display = 'none';
  } else {
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'block';
    const tryValue = document.getElementById('try');
    const tryValueStirng = tryValue.innerText;
    const tryNum = parseInt(tryValueStirng);
    const newTry = tryNum - 1;
    tryValue.innerText = newTry;
    if (newTry === 0) {
      document.getElementById('submit').setAttribute('disabled', true);
    } else {
      document.getElementById('submit').removeAttribute('disabled');
    }
    document.getElementById('tryAction').style.display = 'block';
  }
});
