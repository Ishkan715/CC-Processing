'use strict';

let process = document.getElementById('process');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');
// process.onclick = function () {
//   modal.style.display = 'block';
// };
closeBtn.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

const cardInfo = document
  .querySelector('#process')
  .addEventListener('click', function () {
    const amount = document.querySelector('#amount').value;
    const ccNum = document.querySelector('#cc_num').value;
    const expDate = document.querySelector('#exp_date').value;

    if (amount > 0) {
      switch (ccNum) {
        case '4000100011112224':
        case '4000100111112223':
        case '4000100211112222':
        case '4000100311112221':
        case '4000100411112220':
        case '4111111111111111':
          if (expDate >= 1122) {
            // console.log('Approved ✔');
            enableProcess();
            modal.style.display = 'block';
            document.querySelector('#result').textContent = 'Approved ✔';
          } else {
            // console.log('Declined 👎: Credit Card is expired');
            enableProcess();
            modal.style.display = 'block';
            document.querySelector('#result').textContent =
              'Declined 👎: Credit Card is expired';
          }
          break;
        default:
          //   console.log('Invalid Card Number ❌');
          enableProcess();
          modal.style.display = 'block';
          document.querySelector('#result').textContent =
            'Invalid Card Number ❌';
      }
    } else {
      //   console.log('Invalid amount');
      enableProcess();
      modal.style.display = 'block';
      document.querySelector('#result').textContent = 'Invalid amount';
    }
  });

function enableProcess() {
  if (
    document.querySelector('#amount').value === '' ||
    document.querySelector('#cc_num').value === '' ||
    document.querySelector('#exp_date').value === ''
  ) {
    document.querySelector('#process').disabled = true;
  } else {
    document.querySelector('#process').disabled = false;
  }
}
