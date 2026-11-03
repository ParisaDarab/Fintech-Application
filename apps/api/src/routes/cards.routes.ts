import { Router } from "express";
import { getCardList } from "../controllers/cardList.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/roleCheck.middleware.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import Joi from "joi";
const getCardListSchema = Joi.object({
  accountNumber: Joi.string().optional(),
}).required();
const router = Router();
router.use([authMiddleware, requireRole("user")]);
router.post(
  "/cardList",
  validateRequest(getCardListSchema, "body"),
  getCardList,
);

export default router;
