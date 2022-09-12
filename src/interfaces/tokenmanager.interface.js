import jwt from 'jsonwebtoken';

class TokenManager {
  constructor() {
    this.secret = process.env.AUTH_SECRET;
  }

  tokenize(data) {
    const token = jwt.sign(data, this.secret, {
      expiresIn: '1d'
    });
    return token;
  }

  detokenize(token) {
    const decoded = jwt.verify(token, this.secret);

    return decoded;
  }
}

export default TokenManager;
