import { Router } from 'express';
import signInController from '../controllers/signIn.controller.js';


const authRouter = Router();


authRouter.post('/login', signInController);

export default authRouter;
