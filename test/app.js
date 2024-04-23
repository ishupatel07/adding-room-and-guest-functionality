

const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const noOfGuests = document.querySelector(".noOfGuests");
const noOfRooms = document.querySelector("#noOfGuest");


let guestCount = 1
// Initially, there's one room
let totalRooms = 1;


minusBtn.addEventListener("click", decreaseGuestCount)
plusBtn.addEventListener("click", increaseGuestCount)

addBtn.addEventListener("click", addRoomsDynamically);
deleteBtn.addEventListener("click", deleteRoomDynamically);


function decreaseGuestCount() {
    if (guestCount > 1) {
        guestCount--;
        updateGuestCount();
    }
}

function increaseGuestCount() {
    if (guestCount < 3) {
        guestCount++;
        updateGuestCount();
    }
}

function updateGuestCount() {
    noOfRooms.innerText = guestCount;
    noOfGuests.innerText = guestCount;
}


function addRoomsDynamically() {
    if (totalRooms >= 6) {
        // Can't add more than 6 rooms
        return;
    }

    totalRooms++;

    const addRoomDiv = document.createElement("div");
    addRoomDiv.classList = "additionalRooms"
    addRoomDiv.innerHTML = `
       
        <div class="noOfRoomDiv">Room <span class="noOfRooms">${totalRooms}</span></div>
        <div class="noOfGuestDiv">
        <div class="minusBtn">-</div>
        <div class="noOfGuests">1</div>
        <div class="plusBtn">+</div>
        </div>
        
    `;

    document.querySelector("#guestAndRooms").appendChild(addRoomDiv);

    // Disable the Add button if the maximum number of rooms is reached
    if (totalRooms >= 6) {
        addBtn.disabled = true;
    }
}

function deleteRoomDynamically() {
    if (totalRooms <= 1) {
        // Must have at least 1 room
        return;
    }

    totalRooms--;

    const rooms = document.querySelectorAll('.additionalRooms');
    const lastRoomIndex = rooms.length - 1;
    rooms[lastRoomIndex].remove();

    // Enable the Add button after deleting a room
    addBtn.disabled = false;

}