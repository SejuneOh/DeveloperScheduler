import {
  getActionsDB,
  getGoalsDB,
  getProjectsDB,
} from "./../controllers/postCtrl";
import { Router } from "express";

const router = Router();

router.get("/goals", getGoalsDB);
router.get("/projects", getProjectsDB);
router.get("/actions", getActionsDB);
router.get("/actions/calendar", getActionsDB);

export default router;
