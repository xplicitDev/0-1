const mongoose = require("mongoose");
const { string, number } = require("zod");

// Connect to MongoDB
mongoose.connect();

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: string,
  password: string,
});

const UserSchema = new mongoose.Schema({
  username: string,
  password: string,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: string,
  description: string,
  imageLink: string,
  price: number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
