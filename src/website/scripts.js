// script.js
const API_URL = 'http://localhost:3000';

// UI elements
const customerForm = document.getElementById('customer-form');
const customerNameInput = document.getElementById('customer-name');
const customerNumberInput = document.getElementById('customer-number');
const customerList = document.querySelector('.customer-cards');
const checkForm = document.getElementById('check-form');
const checkNumberInput = document.getElementById('check-number');
const checkResult = document.getElementById('check-result');
const deleteForm = document.getElementById('delete-form');
const deleteCustomerNumberInput = document.getElementById('delete-customer-number');
const deleteResult = document.getElementById('delete-result');
const goToCustomerPortal = document.getElementById('go-to-customer-portal');



  //go To Customer Portal
  goToCustomerPortal.addEventListener('click', () => {    
        window.location.href = './../../etur-portal/customer-prtal/index.html'; // Redirect to login page
    });


// Add a new customer
customerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = customerNameInput.value;
    const customerNumber = customerNumberInput.value;

    try {
        const response = await fetch(`${API_URL}/customers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, customerNumber }),
        });
        if (response.ok) {
            alert('Customer created successfully!');
            customerNameInput.value = '';
            customerNumberInput.value = '';
            fetchAndDisplayCustomers();
        } else {
            alert('An error occurred while creating the customer.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Display all customers
async function fetchAndDisplayCustomers() {
    try {
        const response = await fetch(`${API_URL}/customers`);
        const customers = await response.json();
        customerList.innerHTML = ''; // Clear current list
        customers.forEach(customer => {
            const card = document.createElement('div');
            card.className = 'customer-card';
            card.innerHTML = `
                <h3>Customer Nam: ${customer.name}</h3>
                <p>Customer Number: ${customer.customerNumber}</p>
            `;
            customerList.appendChild(card);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Validate customer number
checkForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const customerNumber = checkNumberInput.value;

    try {
        const response = await fetch(`${API_URL}/validate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerNumber }),
        });
        const result = await response.json();
        if (result.isValid) {
            checkResult.textContent = result.exists ? 'The customer number is valid and exists in the system.' : 'The customer number is valid but does not exist in the system.';
        } else {
            checkResult.textContent = 'The customer number is invalid.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// delete number
// Ensure elements are selected correctly
if (deleteForm) {
    deleteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const customerNumber = deleteCustomerNumberInput.value.trim();

        if (!customerNumber) {
            alert('Please enter a valid customer number.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/customers/${customerNumber}`, {
                method: 'DELETE',
                // headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);  // Logs: "Customer deleted successfully"
            } else if (response.status === 404) {
                alert('Customer not found.');
            } else {
                alert('An unexpected error occurred.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
    document.addEventListener('DOMContentLoaded', fetchAndDisplayCustomers);
} else {
    console.error('Delete form not found in the DOM.');
    document.addEventListener('DOMContentLoaded', fetchAndDisplayCustomers);
}

// Load customers when the page opens
document.addEventListener('DOMContentLoaded', fetchAndDisplayCustomers);