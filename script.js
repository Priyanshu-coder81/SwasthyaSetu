// Sample hospital data
const hospitals = [
    {
        name: "City General Hospital",
        distance: 2.5,
        beds: 15,
        oxygen: 25,
        blood: 50,
        isAyushman: true,
        phone: "+1234567890",
        lat: 12.9716,
        lng: 77.5946
    },
    {
        name: "Medicare Hospital",
        distance: 3.8,
        beds: 8,
        oxygen: 15,
        blood: 30,
        isAyushman: false,
        phone: "+1234567891",
        lat: 12.9716,
        lng: 77.5946
    }
];

// Get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Populate location into the DOM (assuming an element with ID 'location' exists)
    const locationField = document.getElementById('location');
    if (locationField) {
        locationField.value = `Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`;
    }

    // Placeholder for fetching nearby hospitals
    alert("Location detected! In a real application, this would fetch nearby hospitals.");
}

function showError(error) {
    let errorMessage = "";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
        default:
            errorMessage = "An unknown error occurred.";
            break;
    }
    alert(errorMessage);
}

// Handle login modal
const modal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

if (loginBtn && modal && closeBtn) {
    loginBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate that fields are filled
    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }

    // Placeholder for backend login authentication
    alert(`Login attempted with username: ${username}`);
    modal.style.display = "none";
}

// Get directions using Google Maps
function getDirections(lat, lng) {
    if (lat && lng) {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
    } else {
        alert("Invalid coordinates provided for directions.");
    }
}

// Call hospital
function callHospital(phone) {
    if (phone) {
        window.location.href = `tel:${phone}`;
    } else {
        alert("Invalid phone number.");
    }
}

// Find nearest Ayushman centers
function findNearestCenters() {
    getLocation(); // Trigger location fetching process
    alert("This would show nearby Ayushman centers in a real application.");
}
