import express from "express";
import { deletebyId,getAll, create, update} from "./controllers/bookController.js";

const router = express.Router();

router.post("/createBook",create);
router.put("/updateBook",update);
router.get("/readBooks",getAll);
router.delete("/deleteBook/:id",deletebyId)

export default router;
