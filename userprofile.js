document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profileImage");
    const userInfo = document.getElementById("userInfo");
    const editButton = document.getElementById("editButton");

    // Simulated user data (replace with actual user data)
    let userData = {
        name: "John Doe",
        email: "john@example.com",
        location: "New York, USA",
        image: "user_image.jpg"
    };

    // Display user profile data
    function displayUserProfile() {
        profileImage.src = userData.image;
        userInfo.querySelector("h2").textContent = userData.name;
        userInfo.querySelector("p:nth-child(2)").textContent = `Email: ${userData.email}`;
        userInfo.querySelector("p:nth-child(3)").textContent = `Location: ${userData.location}`;
    }

    // Display edit profile form
    function displayEditForm() {
        userInfo.innerHTML = `
            <h2>Edit Profile</h2>
            <input type="text" id="editName" placeholder="Name" value="${userData.name}">
            <input type="email" id="editEmail" placeholder="Email" value="${userData.email}">
            <input type="text" id="editLocation" placeholder="Location" value="${userData.location}">
            <button id="saveButton">Save Changes</button>
        `;
        document.getElementById("editName").focus();

        const saveButton = document.getElementById("saveButton");
        saveButton.addEventListener("click", saveChanges);
    }

    // Save edited profile data
    function saveChanges() {
        userData.name = document.getElementById("editName").value;
        userData.email = document.getElementById("editEmail").value;
        userData.location = document.getElementById("editLocation").value;
        // You might also add validation and update other fields as needed

        // Display updated profile
        displayUserProfile();
    }

    // Simulate edit profile functionality
    editButton.addEventListener("click", displayEditForm);

    // Initial display of user profile data
    displayUserProfile();
});