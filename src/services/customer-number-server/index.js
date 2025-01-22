// const express = require('express');
// import {express} from '../customer-number-server/node_modules/express';
// const app = express();

// const PORT = 3000;
console.log("Hello World");
// app.get('/', (req, res) => {
//   res.send('Welcome to Customer Number Server!');
 
// });
// import { getCustomers } from './customers.js';

// console.log(getCustomers());


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);  

// });


import Fastify from 'fastify';
import { getCustomers, addCustomer, getCustomerById, deleteCustomer } from './customers.js';

const fastify = Fastify({ logger: true });

fastify.get('/customers', (request, reply) => {
  reply.send(getCustomers());
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
