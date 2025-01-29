// index.js
import Fastify from 'fastify';
import {
    getAllCustomers,
    createCustomer,
    getCustomerByNumber,
    deleteCustomerByNumber,
    validateCustomerNumber
} from './../ETUR01/src/services/customer-number-server/customers.js';

const fastify = Fastify({ logger: true });

// تعريف مسارات العملاء
fastify.get('/customers', async (request, reply) => {
    return getAllCustomers();
});

fastify.get('/customers/:customerNumber', async (request, reply) => {
    const { customerNumber } = request.params;
    const customer = getCustomerByNumber(customerNumber);
    if (customer) {
        return customer;
    } else {
        reply.code(404).send({ message: 'Customer not found' });
    }
});

fastify.post('/customers', async (request, reply) => {
    const { name, customerNumber } = request.body;
    if (!name || !customerNumber) {
        reply.code(400).send({ message: 'Name and customerNumber are required' });
    } else {
        const customer = createCustomer(name, customerNumber);
        return customer;
    }
});

fastify.delete('/customers/:customerNumber', async (request, reply) => {
    const { customerNumber } = request.params;
    const deletedCustomer = deleteCustomerByNumber(customerNumber);
    if (deletedCustomer) {
        return deletedCustomer;
    } else {
        reply.code(404).send({ message: 'Customer not found' });
    }
});

fastify.post('/validate', async (request, reply) => {
    const { customerNumber } = request.body;
    if (!customerNumber) {
        reply.code(400).send({ message: 'customerNumber is required' });
    } else {
        const validationResult = validateCustomerNumber(customerNumber);
        return validationResult;
    }
});

const customerSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                customerNumber: { type: 'string', pattern: '^ETUR-CN-\\d+$' }
            },
            required: ['name', 'customerNumber']
        }
    }
};

// fastify.post('/customers', customerSchema, async (request, reply) => {
//     const { name, customerNumber } = request.body;
//     const customer = createCustomer(name, customerNumber);
//     return customer;
// });

// start run the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server is running on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();