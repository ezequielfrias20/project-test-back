import CreateBillUseCase from '../../application/usecases/createBill.usecases.js';
import BillsRepository from '../repositories/bills.repository.js';

export default async function createBill(req, res){
    try {
        const billsRepository = new BillsRepository();
        const createBillUseCase = new CreateBillUseCase(billsRepository);
        const responseData = await createBillUseCase.execute(req.body);
        res.status(responseData.status).json(responseData);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}