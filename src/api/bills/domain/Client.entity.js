export default class Bill {
    constructor(data) {
        this.id = data.id,
        this.date_bill = data.date_bill,
        this.user_id = data.user_id,
        this.type = data.type,
        this.observation = data.observation,
        this.value = data.value
    }

    // [AnX]: TODO: Maybe remove this method
    get() {
      return {
        id: this.data.id,
        date_bill: this.data.date_bill,
        user_id: this.data.user_id,
        type: this.data.type,
        observation: this.data.observation,
        value: this.data.value,
      };
    }
  }
  