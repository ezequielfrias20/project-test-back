import jwt from 'jsonwebtoken';

class TokenManager {
  constructor() {
    this.secret = process.env.QR_SECRET;
  }

  tokenize(data) {
    const token = jwt.sign(data, this.secret, {
      // expiresIn: 43200 // Rev: Raising Error
    });
    return token;
  }

  detokenize(token) {
    const decoded = jwt.verify(token, this.secret);

    return decoded;
  }
}

export default TokenManager;
