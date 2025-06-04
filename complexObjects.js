const allUsers = [
  {
    firstName: "Masood",
    age: 19,
    gender: "male",
  },
  {
    firstName: "Keshav",
    age: 18,
    gender: "male",
  },
  {
    firstName: "Khusi",
    age: 19,
    gender: "female",
  },
];

for (i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "female") {
    console.log(allUsers[i]["firstName"]);
  }
}
