import express from "express";

import * as todoController from "../controllers/todoController.js";
import { validateToken } from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateToken);

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
