const API_BASE_URL = "http://localhost:3000"; // Server address
// 1. add a new customer
const addCustomerForm = document.getElementById("customer-form");
const addMessage = document.getElementById("add-message");

addCustomerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const name = document.getElementById("customer-name").value;
  const number = document.getElementById("customer-number").value;

  try {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, number }),
    });

    if (response.ok) {
      addMessage.textContent = "the customer had been added!";
      addMessage.className = "message success";
      fetchCustomers(); // refrish the customers list  
    } else {
      throw new Error("fult to add custmer!");
    }
  } catch (error) {
    addMessage.textContent = error.message;
    addMessage.className = "message error";
  }

  addMessage.style.display = "block";
});

// 2. desply all the customers
const cardsContainer = document.getElementById("cards-container");

async function fetchCustomers() {
  try {
    const response = await fetch(`${API_BASE_URL}/customers`);
    // const response = await fetch(`${API_BASE_URL}/customers`);
    const customers = await response.json();
    cardsContainer.innerHTML = "";

    customers.forEach((customer) => {
      const card = document.createElement("div");
      card.className = "customer-card";
      card.innerHTML = `
        <p>name: ${customer.name}</p>
        <p> customer number: ${customer.number}</p>
      `;
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("fult to get the customer :", error);
  }
}

// 3. customer number veryfiction 
const validateForm = document.getElementById("validate-form");
const validateMessage = document.getElementById("validate-message");

validateForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const number = document.getElementById("validate-number").value;

  try {
    const response = await fetch(`${API_BASE_URL}/customers/${number}`);
    const result = await response.json();

    if (result.exists) {
      validateMessage.textContent = "  the customer number is exist!";
      validateMessage.className = "message success";
    } else {
      validateMessage.textContent = "  the customer number is not found .";
      validateMessage.className = "message error";
    }
  } catch (error) {
    validateMessage.textContent = "there is an error duering veryfiction .";
    validateMessage.className = "message error";
  }

  validateMessage.style.display = "block";
});

// get the customers when the page is loaded    
fetchCustomers();
