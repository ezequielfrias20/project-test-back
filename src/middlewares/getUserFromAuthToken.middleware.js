import TokenManager from '../api/auth/infraestructure/interfaces/tokenmanager.interface.js';
import UserRepository from '../api/auth/infraestructure/repositories/user.repository.js';
import { Response } from '../models/response.model.js';

export default async function getUserFromAuthToken(req, res, next) {
  const userRepository = new UserRepository();
  const tokenManager = new TokenManager();

  try {
    const authorization = req.headers.authorization;

    // Check token format
    if (!authorization) {
      res.status(401).json(new Response(401, 'No se encontró el token.'));
      return;
    }
    if (!authorization.startsWith('Bearer ')) {
      res.status(401).json(new Response(401, 'Token no válido.'));
      return;
    }

    // Extract token
    const token = authorization.substring(7, authorization.length);
    const payload = tokenManager.detokenize(token);

    // Search user
    const user = await userRepository.findByEmailOrUsername(payload.username);
    if (!user) {
      res.status(401).json(new Response(401, 'Usuario no encontrado.'));
      return;
    }

    // Remove password
    delete user.password;

    // Add to request
    req.user = user;

    next();
  } catch (err) {
    res
      .status(500)
      .json(new Response(500, 'Ocurrio un error al obtener el usuario.'));
    return;
  }
}
