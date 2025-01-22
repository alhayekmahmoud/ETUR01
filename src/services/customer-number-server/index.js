import Fastify from 'fastify';
import { getCustomers, addCustomer, getCustomerById, deleteCustomer } from './customers.js';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

fastify.get('/customers', (request, reply) => {
  reply.send(getCustomers());
});
fastify.register(cors, {
  origin: '*'
});

fastify.get('/customers/:id', (request, reply) => {
  const customer = getCustomerById(request.params.id);
  reply.send(customer || { error: 'Customer not found' });
});

fastify.post('/customers', (request, reply) => {
  const newCustomer = addCustomer(request.body);
  reply.send(newCustomer);
});

fastify.delete('/customers/:id', (request, reply) => {
  const success = deleteCustomer(request.params.id);
  reply.send(success ? { success: true } : { error: 'Customer not found' });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}`);
});

const customerSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    number: { type: 'string', pattern: '^ETUR-CN-\\d+$' }
  },
  required: ['id', 'name', 'number']
};



