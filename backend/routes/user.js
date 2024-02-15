import express from "express";
import { getUsers, setUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/",  getUsers);

router.post("/",  setUser);

router.delete("/:id",  deleteUser);

export default router