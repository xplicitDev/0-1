const zod = require("zod");

function inputValidate(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

inputValidate({
  email: "masood@gmail.com",
  password: "12345678",
});
