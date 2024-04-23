document.addEventListener("DOMContentLoaded", function() {
    // Select the parent element that will contain the plus and minus buttons
    const guestAndRoomsContainer = document.querySelector("#guestAndRooms");

    // Add event listener to the container and delegate the events to the buttons
    guestAndRoomsContainer.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a plus or minus button
        if (target.classList.contains("plusBtn")) {
            increaseGuestCount(target);
        } else if (target.classList.contains("minusBtn")) {
            decreaseGuestCount(target);
        }
    });

    // Function to decrease guest count
    function decreaseGuestCount(button) {
        // Find the corresponding guest count element
        const guestCountElement = button.parentNode.querySelector(".noOfGuests");

        // Decrease guest count if greater than 1
        let count = parseInt(guestCountElement.textContent);
        if (count > 1) {
            count--;
            guestCountElement.textContent = count;
        }
    }

    // Function to increase guest count
    function increaseGuestCount(button) {
        // Find the corresponding guest count element
        const guestCountElement = button.parentNode.querySelector(".noOfGuests");

        // Increase guest count if less than 3
        let count = parseInt(guestCountElement.textContent);
        if (count < 3) {
            count++;
            guestCountElement.textContent = count;
        }
    }

    // Add event listeners for adding and deleting rooms
    const addBtn = document.getElementById("add");
    const deleteBtn = document.getElementById("delete");

    addBtn.addEventListener("click", addRoomsDynamically);
    deleteBtn.addEventListener("click", deleteRoomDynamically);

    // Your existing code for adding and deleting rooms
    let guestCount = 1;
    let totalRooms = 1;

    function addRoomsDynamically() {
        if (totalRooms >= 6) {
            // Can't add more than 6 rooms
            return;
        }

        totalRooms++;

        const addRoomDiv = document.createElement("div");
        addRoomDiv.classList = "additionalRooms";
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
});
