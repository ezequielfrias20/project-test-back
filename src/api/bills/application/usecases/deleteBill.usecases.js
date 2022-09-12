import { Response } from '../../../../models/response.model.js';

export default class DeleteBillUseCase {
  constructor(billRepository) {
    this.billRepository = billRepository;
  }
  async execute(id) {
    const bills = await this.billRepository.getBills();
    const exist = bills.findIndex(elem => elem.id == id)
    if (exist === -1 ) {
      return new Response(404, 'El bill no existe.');
    }
    const deleteBill = await this.billRepository.deleteBill(id);
    return new Response(200, 'Bill Eliminado.', {
      id: deleteBill.id
    });
  }
}
