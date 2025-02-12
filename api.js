const API_BASE_URL = 'http://localhost:8080/api'; // Adjust the port if necessary

async function registerUser (username, password) {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

async function loginUser (username, password) {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

async function fetchCaretakers() {
    const response = await fetch(`${API_BASE_URL}/caretakers`);
    return response.json();
}

async function fetchPetFood() {
    const response = await fetch(`${API_BASE_URL}/pet-food`);
    return response.json();
}

async function fetchPetCareInfo() {
    const response = await fetch(`${API_BASE_URL}/pet-care`);
    return response.json
