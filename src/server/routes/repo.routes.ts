import { Router } from "express";
import { getRepos, createRepo, updateRepo, deleteRepo} from "../../controllers/repo.controllers";
import { createRepoMiddleware } from "../../middlewares/repo.middleware";
const router = Router();

router.get("/repos", getRepos)
router.post("/repos", createRepoMiddleware, createRepo)
router.put("/repos/:id", updateRepo)
router.delete("/repos/:id", deleteRepo)

export default router