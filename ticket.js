
const buttons = document.querySelectorAll('.seat-btn');
let selectedCount = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (selectedCount < 4 && !this.classList.contains('selected')) {
            this.style.backgroundColor = 'green';
            this.classList.add('selected');
            selectedCount++;

            const seatNumber = this.innerText;
            const seatClass = 'Economy';
            const seatPrice = 550;

            addTableRow(seatNumber, seatClass, seatPrice);

        } else if (this.classList.contains('selected')) {
            this.style.backgroundColor = ''; // Reset background color
            this.classList.remove('selected');
            selectedCount--;

            removeTableRow(this.innerText);
        } else {
            alert('You can only book four seats');
        }
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


