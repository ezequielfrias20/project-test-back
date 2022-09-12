export default class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.pass= data.pass;
  }

  get() {
    return {
      id: this.id,
      username: this.username,     
      email: this.email,
      pass: this.pass,
    };
  }
}
