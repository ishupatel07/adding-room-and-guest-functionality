const guestCount = document.querySelector(".guest-count")
const guest = document.querySelector(".guests")
let count = 1


// Function to toggle box visibility
function toggleBox() {
    var box2 = document.getElementById("box2");
    box2.classList.toggle("hidden");
}

// Event listener to toggle box on click
document.querySelector("#box1").addEventListener("click", toggleBox);

// Function to decrease guest count
function decreaseGuestCount() {
    if (count > 1) {
        count--;
        updateGuestCount();
    }
}

// Function to increase guest count
function increaseGuestCount() {
    if (count < 3) {
        count++;
        updateGuestCount();
    }
}

// Function to update guest count in UI
function updateGuestCount() {
    guestCount.innerText = count;
    guest.innerText = count;
}

// Event listener for decreasing guest count
document.querySelector(".minus").addEventListener("click", decreaseGuestCount);

// Event listener for increasing guest count
document.querySelector(".plus").addEventListener("click", increaseGuestCount);

// Function to add rooms dynamically
// function addRooms() {
//     const addRoomAndGuest = document.createElement("div");
//     addRoomAndGuest.classList = "add-room-and-guest";
    
//     const roomCounter = document.createElement("div");
//     roomCounter.classList = "room-counter";
//     const roomCountingSpan = document.createElement("span");
//     roomCountingSpan.innerText = rooms;
//     roomCounter.appendChild(roomCountingSpan);
    
//     const guestCounter = document.createElement("div");
//     guestCounter.classList = "guest-counter";
//     const minusDiv = document.createElement("div");
//     minusDiv.innerText = "-";
//     const guestCount = document.createElement("div");
//     guestCount.innerText = "1";
//     const plusDiv = document.createElement("div");
//     plusDiv.innerText = "+";
    
//     minusDiv.addEventListener("click", decreaseGuestCount);
//     plusDiv.addEventListener("click", increaseGuestCount);
    
//     guestCounter.appendChild(minusDiv);
//     guestCounter.appendChild(guestCount);
//     guestCounter.appendChild(plusDiv);
    
//     addRoomAndGuest.appendChild(roomCounter);
//     addRoomAndGuest.appendChild(guestCounter);
    
//     document.querySelector(".add-rooms-and-guest").appendChild(addRoomAndGuest);
    
//     rooms++; // Increment room count
// }

// Function to add rooms dynamically
// Function to add rooms dynamically

let rooms = 1



function addRooms() {
    const addRoomAndGuest = document.createElement("div");
    addRoomAndGuest.classList = "add-room-and-guest";
    
    const roomCounter = document.createElement("div");
    roomCounter.classList = "room-counter";
    const roomCountingSpan = document.createElement("span");
    roomCountingSpan.innerText = rooms; // Set room number directly
    roomCounter.appendChild(roomCountingSpan);
    
    const guestCounter = document.createElement("div");
    guestCounter.classList = "guest-counter";
    const minusDiv = document.createElement("div");
    minusDiv.classList = "minus"; // Add class for styling
    minusDiv.innerText = "-";
    const guestCount = document.createElement("div");
    guestCount.innerText = "1"; // Set initial guest count
    const plusDiv = document.createElement("div");
    plusDiv.classList = "plus"; // Add class for styling
    plusDiv.innerText = "+";
    
    minusDiv.addEventListener("click", decreaseGuestCount);
    plusDiv.addEventListener("click", increaseGuestCount);
    
    guestCounter.appendChild(minusDiv);
    guestCounter.appendChild(guestCount);
    guestCounter.appendChild(plusDiv);
    
    addRoomAndGuest.appendChild(roomCounter);
    addRoomAndGuest.appendChild(guestCounter);
    
    document.querySelector(".add-rooms-and-guest").appendChild(addRoomAndGuest);
    
    rooms++; // Increment room count
}


// Event listener for adding rooms
document.querySelector(".add").addEventListener("click", addRooms);
