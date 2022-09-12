import bcrypt from 'bcryptjs';

export default class Encryptor {
  constructor() {
    this.salt = parseInt((Math.random() / 3 + 1) * 3);
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(this.salt);
    return await bcrypt.hash(password, salt);
  }

  async compareEncryptedPassword(a, b) {
    return await bcrypt.compare(a, b);
  }
}
