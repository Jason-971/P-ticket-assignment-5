const buttons = document.querySelectorAll('.seat-btn');
let selectedCount = 0;
let totalPrice = 0; 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (selectedCount < 4 && !this.classList.contains('selected')) {
            this.style.backgroundColor = 'green';
            this.classList.add('selected');
            selectedCount++;

            const seatPrice = 550;
            totalPrice += seatPrice; 

            addTableRow(this.innerText, 'Economy', seatPrice);
        } else if (this.classList.contains('selected')) {
            this.style.backgroundColor = ''; 
            this.classList.remove('selected');
            selectedCount--;

            totalPrice -= 550; 
            removeTableRow(this.innerText);
        } else {
            alert('You can only book four seats');
        }

        updateTotalPrice(); 
    });
}

function addTableRow(seat, seatClass, seatPrice) {
    const tableBody = document.getElementById('selection').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.textContent = seat;
    cell2.textContent = seatClass;
    cell3.textContent = seatPrice;
}

function updateTotalPrice() {
    const totalElement = document.getElementById('total-price');
    totalElement.textContent = totalPrice;
}

let seatNumber = 40;

function scrollToSection() {
    const section = document.getElementById('scrollSection');
    section.scrollIntoView({ behavior: 'smooth' });
}

function incrementSeat() {
    const seatCount = document.getElementById('seat-count');
    const seatReduce = document.getElementById('seat-reduce');
    let count = parseInt(seatCount.textContent);
    if (selectedCount < 4) {
        seatCount.textContent = count + 1;
        seatNumber = seatNumber - 1;
        seatReduce.textContent = seatNumber;
    }
}

function applyDiscount() {
    const couponCode = document.getElementById('couponCode').value;
    if (couponCode === 'NEW15' || couponCode === 'Couple20') {
        let discount = 0;
        if (couponCode === 'NEW15') {
            discount = 15;
        } else if (couponCode === 'Couple20') {
            discount = 20;
        }
        const discountedPrice = totalPrice - (totalPrice * discount / 100);
        updateGrandTotal(discountedPrice);
    } else {
        alert('Invalid coupon code!');
    }
}

function updateGrandTotal(newTotal) {
    document.getElementById('grandTotal').innerText = newTotal;
}
