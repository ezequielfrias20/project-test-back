import { Response } from "../../../../models/response.model.js";

export default class CreateBillUseCase{
    constructor(billRepository){
        this.billRepository = billRepository
    }
    async execute(body){
        const createBill = await this.billRepository.createBill(body);
        return new Response(201, 'Bill creado.', {
            ...createBill
          });
    }
}