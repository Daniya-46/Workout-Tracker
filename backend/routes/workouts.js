const express = require("express");
const {
  getAllWorkouts,
  createNewWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//all workouts getter
router.get("/", getAllWorkouts);

//single workout getter
router.get("/:id", getSingleWorkout);

//post a workout
router.post("/", createNewWorkout);

//delete workout
router.delete("/:id", deleteWorkout);

//update
router.patch("/:id", updateWorkout);

module.exports = router;
