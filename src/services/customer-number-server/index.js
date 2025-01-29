
fastify.register(cors, {
  origin: "*", // السماح بجميع المصادر
});

// تعريف مسار الجذر
fastify.get('/', async (request, reply) => {
  return { message: 'Welcome to the Customer Number System!' };
});

// تشغيل الخادم
// const start = async () => {
//   try {
//     await fastify.listen({ port: 3000 });
//     console.log("Server is running at http://localhost:3000/");
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// };
// start();
const start = async () => {
  try {
    await fastify.listen({port: 3000});
    console.log("Server is running at http://localhost:3000/");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }