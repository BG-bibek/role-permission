import * as express from "express";
import checkPermission from "../middleware/checkPermission";
import controller from "@controller/bookController";
const router = express.Router();

router.get('/', controller.allAcess);
router.post("/", controller.createBook);
router.get("/:id", [checkPermission('book.read')], controller.getResourceById);
router.put("/:id", controller.put);
router.delete("/:id", controller.removeResource);
export default router;