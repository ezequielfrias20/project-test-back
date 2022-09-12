export default class GetBillsUseCase{
    constructor(billRepository){
        this.billRepository = billRepository
    }
    async execute(){
        return await this.billRepository.getBills();
    }
}