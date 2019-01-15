var BreakException = {};

function Restaurant(name, tables) {
    this.name = name,
        this.tables = tables,
        this.reserved = [5, 5, 5, 6, 7],
        this.info = "",

        this.reserve = (number) => {
            if (number !=="") {
                let nr = parseInt(number);
                let tables = this.tablesLeft();
                if ((tables - nr) >= 0) {
                    this.reserved.push(nr);
                    this.info = `${nr} tables reserved`;
                } else {
                    this.info = `Can not reserve ${nr} tables, only ${tables} left.`;
                }
            }
        },
        this.tablesLeft = () => {
            let res = 0;
            if (this.reserved.length > 0) {
                this.reserved.forEach(item => {
                    res += item;
                });
            }
            let tablesLeft = this.tables - res;
            this.info = `${tablesLeft} tables left`;
            return tablesLeft;
        },
        this.cancelReservation = (number) => {
            let nr = parseInt(number);
            let index = null;
            try {
                this.reserved.forEach((item, i) => {
                    if (nr === item) {
                        index = i;
                        throw BreakException;
                    }
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }
            if (index != null) {
                this.reserved.splice(index, 1);
                this.info = `${nr} tables reservation have been canceled.`;
            } else {
                this.info = `There is no such reservation.`;
            }
        }
};



let restaurant = new Restaurant("Julius Kebab's", 56);

document.querySelector(".welcome").textContent = "Welcome to " + restaurant.name;

let reserveInput = document.querySelector("#reserveInput");
let calcelInput = document.querySelector("#calcelInput");

let reserveBtn = document.querySelector(".reserveBtn");
let cancelBtn = document.querySelector(".cancelBtn");
let availableBtn = document.querySelector(".availableBtn");

let pReserve = document.querySelector(".reserve");
let pCancel = document.querySelector(".cancel");
let pAvailable = document.querySelector(".available");

resetText = ()=>{
    pCancel.innerHTML = "";
    pReserve.innerHTML = "";
    pAvailable.innerHTML = "";
};

reserveBtn.addEventListener('click', (e) => {
    resetText();
    restaurant.reserve(reserveInput.value);
    pReserve.innerHTML = restaurant.info;
});

cancelBtn.addEventListener('click', (e) => {
    resetText();
    restaurant.cancelReservation(calcelInput.value);
    pCancel.innerHTML = restaurant.info;
});

availableBtn.addEventListener('click', (e) => {
    resetText();
    restaurant.reserved.forEach(item => {
         pAvailable.innerHTML += item + " tables reserved<br>";
    });
    pAvailable.innerHTML += "Available tables: "+ restaurant.tablesLeft();
});