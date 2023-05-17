document.getElementById('btnDeposit').addEventListener('click', function () {
    const getDeposit = document.getElementById('deposit');
    const showCurrentDeposit = parseFloat(getDeposit.value);

    const getDepoBalance = document.getElementById('DepoBalance');
    const showDepoBalance = parseFloat(getDepoBalance.innerText);
    const newDepoBalance = showDepoBalance + showCurrentDeposit;
    getDepoBalance.innerText = newDepoBalance;
    getDeposit.value = '';

    const availableBal = document.getElementById('availBalance');
    const showAvailBalance = parseFloat(availableBal.innerText);
    const sumAvailBalance = showAvailBalance + showCurrentDeposit;

    availableBal.innerText = sumAvailBalance;

})

document.getElementById('btnWithdraw').addEventListener('click', function () {
    const getWithdraw = document.getElementById('withdraw');
    const showWithdraw = getWithdraw.value;

    const getWithBalance = document.getElementById('WithBalance');
    const showWithBalance = getWithBalance.innerText;
    getWithBalance.innerText = showWithdraw;
    getWithdraw.value = '';
})



