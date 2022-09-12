import { Router } from 'express';
import createBill from '../controllers/createBill.controller.js';
import deleteBill from '../controllers/deleteBill.controller.js';
import getBills from '../controllers/getbills.controller.js';
import updateBill from '../controllers/updateBill.controller.js';

const billsRouter = Router();

billsRouter.get('/', getBills);
billsRouter.post('/', createBill);
billsRouter.put('/:id', updateBill);
billsRouter.delete('/:id', deleteBill);

export default billsRouter;
