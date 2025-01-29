const customers = []; // تخزين بيانات العملاء محليًا

// إضافة عميل جديد
export const createCustomer = (name, id) => {
  const newCustomer = { name, id };
  customers.push(newCustomer);
  return newCustomer;
};

// إرجاع جميع العملاء
export const getAllCustomers = () => customers;

// إرجاع عميل معين
export const getCustomerById = (id) => customers.find((c) => c.id === id);

// حذف عميل
export const deleteCustomerById = (id) => {
  const index = customers.findIndex((c) => c.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
    return true;
  }
  return false;
};

// التحقق من صحة رقم العميل
export const isValidCustomerNumber = (id) => /ETUR-CN-\w+/.test(id);

// تعريف المسارات
export async function routes(fastify) {
  // إرجاع جميع العملاء
  fastify.get("/customers", async (request, reply) => {
    reply.send(getAllCustomers());
  });

  // إرجاع عميل معين
  fastify.get("/customers/:id", async (request, reply) => {
    const customer = getCustomerById(request.params.id);
    if (!customer) {
      return reply.status(404).send({ error: "Customer not found" });
    }
    reply.send(customer);
  });

  // إضافة عميل جديد
  fastify.post("/customers", async (request, reply) => {
    const { name, id } = request.body;

    if (!isValidCustomerNumber(id)) {
      return reply.status(400).send({ error: "Invalid customer number format" });
    }

    const newCustomer = createCustomer(name, id);
    reply.status(201).send(newCustomer);
  });

  // حذف عميل
  fastify.delete("/customers/:id", async (request, reply) => {
    const success = deleteCustomerById(request.params.id);
    if (!success) {
      return reply.status(404).send({ error: "Customer not found" });
    }
    reply.send({ message: "Customer deleted successfully" });
  });
}
