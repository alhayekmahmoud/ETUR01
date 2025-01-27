import Fastify from 'fastify';
import cors from '@fastify/cors';
import Report from './models/report.js';

const fastify = Fastify({ logger: true });

// Aktivieren CORS
fastify.register(cors, { origin: '*' });

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});



const reports = []; // Temporary Database



// Create New Report
fastify.post('/reports', async (request, reply) => {
    const reportData = request.body;
    const newReport = new Report({ id: String(reports.length + 1), ...reportData });
    reports.push(newReport);
    return reply.code(201).send(newReport);
});

fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to ETUR API!' };
  });

// Get All Reports
fastify.get('/reports', async (request, reply) => {
    return reply.send(reports);
});

// Get Report by Customer Number
fastify.get('/reports/:customerId', async (request, reply) => {
    const { customerId } = request.params;
    const customerReports = reports.filter(report => report.customerId === customerId);
    if (customerReports.length === 0) {
        return reply.code(404).send({ error: 'No reports found for this customer' });
    }
    return reply.send(customerReports);
});

// Update Report
fastify.put('/reports/:id', async (request, reply) => {
    const { id } = request.params;
    const updatedData = request.body;
    const reportIndex = reports.findIndex(report => report.id === id);

    if (reportIndex === -1) {
        return reply.code(404).send({ error: 'Report not found' });
    }

    reports[reportIndex] = { ...reports[reportIndex], ...updatedData, editedAt: new Date().toISOString() };
    return reply.send(reports[reportIndex]);
});

// Delete Report
fastify.delete('/reports/:id', async (request, reply) => {
    const { id } = request.params;
    const reportIndex = reports.findIndex(report => report.id === id);

    if (reportIndex === -1) {
        return reply.code(404).send({ error: 'Report not found' });
    }

    const deletedReport = reports.splice(reportIndex, 1);
    return reply.send(deletedReport);
});

