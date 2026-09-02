import { Router } from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import { getMyAccounts } from "../controllers/account.controller.js";
import {
  getMyTransaction,
  getMyTransactions,
} from "../controllers/transactions.controller.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import Joi, { string } from "joi";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

const getCurrentUserSchema = Joi.object({
  userId: Joi.string().required(),
});

router.use(authMiddleware);
router.post("/", validateRequest(getCurrentUserSchema, "body"), getCurrentUser);
router.get("/accounts", getMyAccounts);
router.get("/transactions", getMyTransactions);
router.get("/transactions/:id", getMyTransaction);

export default router;
