const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
<<<<<<< HEAD
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "User created Successfully!",
=======
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
>>>>>>> HEAD@{1}
  });
});

router.get("/courses", async (req, res) => {
<<<<<<< HEAD
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    Courses: response,
=======
  const response = await Course.find({});

  res.json({
    courses: response,
>>>>>>> HEAD@{1}
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
<<<<<<< HEAD
    msg: "Purchased Successfully!",
=======
    message: "Purchase complete!",
>>>>>>> HEAD@{1}
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

<<<<<<< HEAD
  const courses = await Course.findOne({
=======
  console.log(user.purchasedCourses);
  const courses = await Course.find({
>>>>>>> HEAD@{1}
    _id: {
      $in: user.purchasedCourses,
    },
  });
<<<<<<< HEAD
=======

>>>>>>> HEAD@{1}
  res.json({
    courses: courses,
  });
});

module.exports = router;
