// customers.js
const customers = [];

export function getAllCustomers() {
    return customers;
}

export function createCustomer(name, customerNumber) {
    const customer = { name, customerNumber };
    customers.push(customer);
    return customer;
}

export function getCustomerByNumber(customerNumber) {
    return customers.find(customer => customer.customerNumber === customerNumber);
}

export function deleteCustomerByNumber(customerNumber) {
    const index = customers.findIndex(customer => customer.customerNumber === customerNumber);
    if (index !== -1) {
        return customers.splice(index, 1)[0];
    }
    return null;
}

export function validateCustomerNumber(customerNumber) {
    const pattern = /^ETUR-CN-\d+$/;
    const isValid = pattern.test(customerNumber);
    const exists = customers.some(customer => customer.customerNumber === customerNumber);
    return { isValid, exists };
}