import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin-User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Admin@64", 10),
    isAdmin:true
  },
  {
    name: "Ajay raju",
    email: "register@gmail.com",
    password: bcrypt.hashSync("Register@64", 10),
  },
  {
    name: "Arunsai ask",
    email: "nanipatel9@gmail.com",
    password: bcrypt.hashSync("Nanipatel@64", 10),
  }
];

export default users
