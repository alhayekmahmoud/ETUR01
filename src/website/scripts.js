// script.js
const API_URL = 'http://localhost:3000';

// عناصر واجهة المستخدم
const customerForm = document.getElementById('customer-form');
const customerNameInput = document.getElementById('customer-name');
const customerNumberInput = document.getElementById('customer-number');
const customerList = document.querySelector('.customer-cards');
const checkForm = document.getElementById('check-form');
const checkNumberInput = document.getElementById('check-number');
const checkResult = document.getElementById('check-result');

// إضافة عميل جديد
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
            alert('تم إنشاء العميل بنجاح!');
            customerNameInput.value = '';
            customerNumberInput.value = '';
            fetchAndDisplayCustomers();
        } else {
            alert('حدث خطأ أثناء إنشاء العميل.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// عرض جميع العملاء
async function fetchAndDisplayCustomers() {
    try {
        const response = await fetch(`${API_URL}/customers`);
        const customers = await response.json();
        customerList.innerHTML = ''; // مسح القائمة الحالية
        customers.forEach(customer => {
            const card = document.createElement('div');
            card.className = 'customer-card';
            card.innerHTML = `
                <h3>اسم العميل: ${customer.name}</h3>
                <p>رقم العميل: ${customer.customerNumber}</p>
            `;
            customerList.appendChild(card);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// التحقق من رقم العميل
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
            checkResult.textContent = result.exists ? 'رقم العميل صالح ويوجد في النظام.' : 'رقم العميل صالح ولكنه غير موجود في النظام.';
        } else {
            checkResult.textContent = 'رقم العميل غير صالح.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// تحميل العملاء عند فتح الصفحة
document.addEventListener('DOMContentLoaded', fetchAndDisplayCustomers);