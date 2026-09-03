import { Router } from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import { getMyAccounts } from "../controllers/account.controller.js";
import { getMyTransactions } from "../controllers/transactions.controller.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import Joi, { string } from "joi";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/roleCheck.middleware.js";
import { getMyTransaction } from "../controllers/transaction.controller.js";

const router = Router();

const getCurrentUserSchema = Joi.object({
  userId: Joi.string().required(),
}).required();
const getMyAccountSchema = Joi.object({
  userId: Joi.string().required(),
}).required();

const getMyTransactionsSchema = Joi.object({
  accountId: Joi.string().required(),
}).required();

const getMyTransactionSchema = Joi.object({
  id: Joi.string().required(),
}).required();

router.use([authMiddleware, requireRole("user")]);
router.post("/", validateRequest(getCurrentUserSchema, "body"), getCurrentUser);
router.get(
  "/accounts",
  validateRequest(getMyAccountSchema, "body"),
  getMyAccounts,
);
router.get(
  "/transactions",
  validateRequest(getMyTransactionsSchema, "body"),
  getMyTransactions,
);
router.get(
  "/transactions/:id",
  validateRequest(getMyTransactionSchema, "body"),
  getMyTransaction,
);

export default router;
