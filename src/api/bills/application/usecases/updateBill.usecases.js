import { Response } from '../../../../models/response.model.js';

export default class UpdateBillUseCase {
  constructor(billRepository) {
    this.billRepository = billRepository;
  }
  async execute(id, body) {
    const bills = await this.billRepository.getBills();
    console.log(bills)
    const exist = bills.findIndex(elem => elem.id == id)
    if (exist === -1 ) {
      return new Response(404, 'El bill no existe.');
    }
    const updateBill = await this.billRepository.updateBill(id, body);
    return new Response(200, 'Bill actualizado.', {
      ...updateBill
    });
  }
}
