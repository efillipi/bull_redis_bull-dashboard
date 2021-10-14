import { Request, Response } from 'express';
import Queue from '../lib/Queue';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    const emailData = {
      subject: 'Cadastro de usuário Teste',
      to: { name: user.name, email: user.email },
      message: `Olá, ${user.name}, Teste fila :D`,
    };

    // Adicionar job RegistrationMail na fila
    await Queue.add('RegistrationMail', { emailData });
    await Queue.add('UserReport', { user });

    return response.json(user);
  }
}

export default new UserController();
