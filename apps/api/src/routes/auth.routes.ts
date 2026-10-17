import { Router } from "express";
import { validateRequest } from "../middleware/validate.middleware.js";
import { userLogin } from "../controllers/login.controller.js";
import Joi from "joi";
import { userLogout } from "../controllers/logout.controller.js";

const router = Router();
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/)
    .required(),
  rememberMe: Joi.boolean(),
}).required();
const logoutSchema = Joi.object({
  email: Joi.string().email().required(),
  userId: Joi.string().required(),
}).required();
router.post("/login", validateRequest(loginSchema, "body"), userLogin);
router.post("/logout", validateRequest(logoutSchema, "body"), userLogout);

export default router;
