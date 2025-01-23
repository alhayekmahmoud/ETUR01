const customerExample = {
    id: "1",
    name: "John Doe",
    number: "ETUR-CN-12345"
  };

  const customers = [];
  export const getCustomers = () => customers;

  export const addCustomer = (customer) => {
    customers.push(customer);
    return customer;
  };

  export const getCustomerById = (id) => {
    return customers.find((customer) => customer.id === id);
  };

  
  export const deleteCustomer = (id) => {
    const index = customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      customers.splice(index, 1);
      return true;
    }
    return false;
  };

  
  const pattern = /^ETUR-CN-\d+$/;

export const validateCustomerNumber = (customerNumber) => {
  return pattern.test(customerNumber);
};

const customerSchema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      number: { type: 'string', pattern: '^ETUR-CN-\\d+$' }
    },
    required: ['id', 'name', 'number']
  };
  


  

