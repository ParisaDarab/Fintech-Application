import { Router } from "express";
import { validateRequest } from "../middleware/validate.middleware.js";
import { userLogin } from "../controllers/login.controller.js";
import Joi from "joi";

const router = Router();
const loginSchema=Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/)
    .required()
})
router.post('/login',validateRequest(loginSchema,'body'),userLogin)


export default router;
