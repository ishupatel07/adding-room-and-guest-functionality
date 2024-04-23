
    const guestAndRoomsContainer = document.querySelector("#guestAndRooms");
    const addBtn = document.getElementById("add");
    const deleteBtn = document.getElementById("delete");
    const noOfRoomsElement = document.querySelector("#noOfRooms");

    // Initial state
    let totalRooms = 1;

    // Event listeners
    guestAndRoomsContainer.addEventListener("click", handleButtonClick);
    addBtn.addEventListener("click", addRoomsDynamically);
    deleteBtn.addEventListener("click", deleteRoomDynamically);

    // Event handler for plus and minus buttons
    function handleButtonClick(event) {
        const target = event.target;
        if (target.classList.contains("plusBtn")) {
            increaseGuestCount(target);
        } else if (target.classList.contains("minusBtn")) {
            decreaseGuestCount(target);
        }
    }

    // Function to decrease guest count
    function decreaseGuestCount(button) {
        const guestCountElement = button.parentNode.querySelector(".noOfGuests");

        let count = parseInt(guestCountElement.textContent);
        if (count > 1) {
            count--;
            guestCountElement.textContent = count;
            updateTotalGuestCount();
        }
    }

    // Function to increase guest count
    function increaseGuestCount(button) {
        const guestCountElement = button.parentNode.querySelector(".noOfGuests");
        let count = parseInt(guestCountElement.textContent);
        if (count < 3) {
            count++;
            guestCountElement.textContent = count;
            updateTotalGuestCount();
        }
    }

    // Function to update total guest count
    function updateTotalGuestCount() {
        const guestCountElements = document.querySelectorAll(".noOfGuests");
        let totalGuests = 0;
        guestCountElements.forEach(function(element) {
            totalGuests += parseInt(element.textContent);
        });
        document.querySelector("#noOfGuest").textContent = totalGuests;
    }

    // Function to add rooms dynamically
    function addRoomsDynamically() {
        if (totalRooms >= 6) {
            return;
        }

        totalRooms++;

        const addRoomDiv = createRoomElement(totalRooms);
        guestAndRoomsContainer.appendChild(addRoomDiv);

        if (totalRooms >= 6) {
            addBtn.disabled = true;
        }
        updateTotalGuestCount();
        updateNoOfRooms();
    }

    // Function to delete rooms dynamically
    function deleteRoomDynamically() {
        if (totalRooms <= 1) {
            return;
        }

        totalRooms--;

        const rooms = document.querySelectorAll('.additionalRooms');
        const lastRoomIndex = rooms.length - 1;
        rooms[lastRoomIndex].remove();

        addBtn.disabled = false;
        updateTotalGuestCount();
        updateNoOfRooms();
    }

    // Function to create room element
    function createRoomElement(roomNumber) {
        const roomDiv = document.createElement("div");
        roomDiv.classList = "additionalRooms";
        roomDiv.innerHTML = `
            <div class="noOfRoomDiv">Room <span class="noOfRooms">${roomNumber}</span></div>
            <div class="noOfGuestDiv">
                <div class="minusBtn">-</div>
                <div class="noOfGuests">1</div>
                <div class="plusBtn">+</div>
            </div>
        `;
        return roomDiv;
    }

    // Function to update the number of rooms
    function updateNoOfRooms() {
        noOfRoomsElement.textContent = totalRooms;
    }

    // Initial update
    updateTotalGuestCount();
    updateNoOfRooms();

