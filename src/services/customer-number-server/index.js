import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: "*", 
});


fastify.get('/', async (request, reply) => {
  return { message: 'Welcome to the Customer Number System!' };
});


const start = async () => {
  try {
    await fastify.listen({port: 3000});
    console.log("Server is running at http://localhost:3000/");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}