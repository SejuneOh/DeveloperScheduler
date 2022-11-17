import { userRegistCtrl } from "./../controllers/registerCtrl";
import { Router } from "express";
import { userLoginCtrl, userLogoutCtrl } from "../controllers/userCtrls";

const router = Router();

router.post("/login", userLoginCtrl);
router.post("/logout", userLogoutCtrl);
router.post("/register", userRegistCtrl);

export default router;
