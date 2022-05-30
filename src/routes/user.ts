import * as express from "express";

import controller from "@controller/userController";
const router = express.Router();

router.get('/', controller.allAcess);
router.post("/", controller.createUser);
router.get("/:id", controller.getResourceById);
router.put("/:id", controller.put);
router.delete("/:id", controller.removeResource);
export default router;