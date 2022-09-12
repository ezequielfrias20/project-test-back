import UpdateBillUseCase from '../../application/usecases/updateBill.usecases.js';
import BillsRepository from '../repositories/bills.repository.js';

export default async function updateBill(req, res) {
  try {
    const billsRepository = new BillsRepository();
    const updateBillUseCase = new UpdateBillUseCase(billsRepository);
    const responseData = await updateBillUseCase.execute(req.params.id, req.body);
    res.status(responseData.status).json(responseData);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
