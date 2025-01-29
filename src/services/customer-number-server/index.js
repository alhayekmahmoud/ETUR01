// index.js
import Fastify from 'fastify';
import cors from '@fastify/cors';
import {
    getAllCustomers,
    createCustomer,
    getCustomerByNumber,
    deleteCustomerByNumber,
    validateCustomerNumber
} from './customers.js';

import {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
    addCommentToReport,
    closeReport,
} from './reports.js';



const fastify = Fastify({ logger: true });

// add  CORS
fastify.register(cors, {
    origin: '*', //Allows all origins  )
});
// Define customer routes
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



                             //Reports Management

// Create a new report
fastify.post('/reports', async (request, reply) => {
    const { category, customerId, description, labels, owner, priority } = request.body;
    if (!category || !customerId || !description || !owner) {
        reply.code(400).send({ message: 'Missing required fields' });
    } else {
        const report = createReport(category, customerId, description, labels, owner, priority);
        return report;
    }
});

// View all reports
fastify.get('/reports', async (request, reply) => {
    return getAllReports();
});

// View a specific report
fastify.get('/reports/:id', async (request, reply) => {
    const { id } = request.params;
    const report = getReportById(id);
    if (report) {
        return report;
    } else {
        reply.code(404).send({ message: 'Report not found' });
    }
});

// Update a report
fastify.put('/reports/:id', async (request, reply) => {
    const { id } = request.params;
    const updates = request.body;
    const report = updateReport(id, updates);
    if (report) {
        return report;
    } else {
        reply.code(404).send({ message: 'Report not found' });
    }
});

// Delete a report
fastify.delete('/reports/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedReport = deleteReport(id);
    if (deletedReport) {
        return deletedReport;
    } else {
        reply.code(404).send({ message: 'Report not found' });
    }
});

// Add a comment to a report
fastify.post('/reports/:id/comments', async (request, reply) => {
    const { id } = request.params;
    const { author, message, type } = request.body;
    if (!author || !message || !type) {
        reply.code(400).send({ message: 'Missing required fields' });
    } else {
        const report = addCommentToReport(id, author, message, type);
        if (report) {
            return report;
        } else {
            reply.code(404).send({ message: 'Report not found' });
        }
    }
});

// Close a report
fastify.post('/reports/:id/close', async (request, reply) => {
    const { id } = request.params;
    const { reason } = request.body;
    if (!reason) {
        reply.code(400).send({ message: 'Missing close reason' });
    } else {
        const report = closeReport(id, reason);
        if (report) {
            return report;
        } else {
            reply.code(404).send({ message: 'Report not found' });
        }
    }
});

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