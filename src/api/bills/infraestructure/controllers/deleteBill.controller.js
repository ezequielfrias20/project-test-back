import DeleteBillUseCase from '../../application/usecases/deleteBill.usecases.js';
import BillsRepository from '../repositories/bills.repository.js';

export default async function deleteBill(req, res) {
  try {
    const billsRepository = new BillsRepository();
    const deleteBillUseCase = new DeleteBillUseCase(billsRepository);
    const responseData = await deleteBillUseCase.execute(req.params.id);
    res.status(responseData.status).json(responseData);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
