import GetBillsUseCase from '../../application/usecases/getBills.usecases.js';
import BillsRepository from '../repositories/bills.repository.js';

export default async function getBills(req, res){
    try {
        const billsRepository = new BillsRepository();
        const getBillsUseCase = new GetBillsUseCase(billsRepository);
        const responseData = await getBillsUseCase.execute();
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}