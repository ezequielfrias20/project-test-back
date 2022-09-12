import { Response } from '../../../../models/response.model.js';

export default class SignInUseCase {
  constructor(userRepo, encryptor, tokenManager) {
    this.userRepo = userRepo;
    this.encryptor = encryptor;
    this.tokenManager = tokenManager;
  }

  async execute({ username, pass }) {
    // Check if the user already exists
    const user = await this.userRepo.findByEmailOrUsername(username);
    if (!user) {
      return new Response(400, 'Usuario o contraseña son incorrectos.');
    }

    // Compare the encrypted password
    const isPasswordCorrect = await this.encryptor.compareEncryptedPassword(
      pass,
      user.pass
    );
    if ((pass != user.pass)) {
      return new Response(400, 'Usuario o contraseña son incorrectos.');
    }

    // Generate the token
    // const authToken = await this.tokenManager.tokenize({
    //   username: user.username,

    // });

    return new Response(200, 'Usuario autenticado.', {
      username: user.username,
      email: user.email,
    });
  }
}
