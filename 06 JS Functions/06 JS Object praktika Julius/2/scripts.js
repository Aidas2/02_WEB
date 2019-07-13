let input = document.querySelector('input');
let option = document.querySelector('#putSelect');
let showOptions = document.querySelector('#showSelect');
let buttonPut = document.querySelector('.btnPut');
let buttonShow = document.querySelector('.btnShow');
let transactions = document.querySelector('.transactions');
let p = document.querySelector('p');
let initialAmount = 500;
let operations = [];

function Operation(type, amount, date) {
    this.type = type,
        this.amount = amount,
        this.date = date;
}

p.textContent = `Sąskaitoje yra ${initialAmount} £`;

input.addEventListener("input", (e) => {
    input.value = input.value.replace(/[^\d]/, '');
});

buttonShow.addEventListener('click', (e) => {
    let message = '';
    let operationArray = [...operations];

    byAmount = () => {
        operationArray.sort((itemA, itemB) => {
            return itemA.amount - itemB.amount;
        });
    };

    byOperation = () => {
        operationArray.sort((itemA, itemB) => {
            return itemA.type > itemB.type;
        });
    };

    byDate = () => {
        operationArray.sort((itemA, itemB) => {
            return itemA.date - itemB.date;
        });
    };

    switch (showOptions.selectedIndex) {
        case 0:
            break;
        case 1:
            byDate();
            break;
        case 2:
            byAmount();
            break;
        case 3:
            byOperation();
            break;
        default:
            break;
    }

    (() => {

        if (operationArray.length > 0) {
            operationArray.forEach(item => {
                let fullDate = new Date(item.date) //.toLocaleDateString("lt-LT");
                let date = fullDate.toLocaleString("lt-LT");
                let sing = (item.type === 'in') ? '+' : '-';
                message += `<p class="${item.type}">${date}&nbsp;&nbsp;&nbsp;&nbsp;<b>${sing}${item.amount}£</b> </p>`
            });
        };
    })();

    transactions.innerHTML = message;
});


buttonPut.addEventListener('click', (e) => {
    let amount = parseInt(input.value);

    switch (option.selectedIndex) {
        case 0:
            operations.push(new Operation('in', amount, Date.now()));
            initialAmount += amount;
            break;
        case 1:
            if (initialAmount - amount < 0) {
                alert("Ooops 404 - money not found");
            } else {
                operations.push(new Operation('out', amount, Date.now()));
                initialAmount -= amount;
            }
            break;
        default:
            break;
    }

    p.textContent = `Sąskaitoje yra ${initialAmount} £`;
});