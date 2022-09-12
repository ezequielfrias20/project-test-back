import { Response } from '../../../../models/response.model.js';
import SignInUseCase from '../../application/usecases/signIn.usecase.js';
import Encryptor from '../interfaces/encryptor.interface.js';
import TokenManager from '../interfaces/tokenmanager.interface.js';
import UserRepository from '../repositories/user.repository.js';

export default async function signInController(req, res) {
  try {
    const userRepo = new UserRepository();
    const encryptor = new Encryptor();
    const tokenManager = new TokenManager();
    const useCase = new SignInUseCase(userRepo, encryptor, tokenManager);

    const response = await useCase.execute(req.body);

    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json(new Response(500, error.message));
  }
}
