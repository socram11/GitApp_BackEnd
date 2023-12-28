import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser} from "../../controllers/user.controllers";
import { createUserMiddleware } from "../../middlewares/user.middleware";
const router = Router();

router.get("/users", getUsers)
router.post("/users", createUserMiddleware, createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

export default router  