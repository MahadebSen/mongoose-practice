import express from "express";
import {
  createUser,
  getOneUser,
  getUsers,
  getVoterUser,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/voters", getVoterUser);
router.get("/:id", getOneUser);
router.post("/create-user", createUser);

export default router;
