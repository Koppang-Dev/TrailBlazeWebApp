const express = require("express");
const router = express.Router();

// Import controller functions for user actions
const {
  createUser,
  getUser,
  deleteUser,
  updateUserNames,
  updateUserEmail
} = require("../controllers/userController");

// Import middleware to authenticate Firebase tokens
const authenticateUser = require("../middleware/firebaseMiddleware");

console.log("createUser:", createUser);
console.log("getUser:", getUser);
console.log("authenticateUser:", authenticateUser);

// POST request to '/' with authentication middleware
router.post("/", authenticateUser, createUser);

// GET request to '/:firebaseUID' with authentication middleware
router.get("/:firebaseUID", authenticateUser, getUser);

// PUT request to /names with authentication middleware
router.put("/names", authenticateUser, updateUserNames);

// PUT request to /email with authentication middleware
router.put("/email", authenticateUser, updateUserEmail)

// DELETE request to '/:firebaseUID' with authentication middleware
router.delete("/:firebaseUID", authenticateUser, deleteUser);

module.exports = router;
