import * as express from "express";

import controller from "@controller/userRoleController";
const router = express.Router();

// router.get('/', controller.allAcess);
router.post("/", controller.createUserRole);
// router.get("/:id", controller.getUserById);
// router.put("/:id", controller.put);
// router.delete("/:id", controller.removeResource);
export default router;