import { Request, Response } from 'express';
import Queue from '../lib/Queue';
// import RegistrationMail from '../jobs/RegistrationMail';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    const emailData = {
      sender: 'Queue Test <queue@queuetest.com.br>',
      subject: 'Cadastro de usuário Teste',
      name: user.name,
      email: user.email,
      message: `Olá, ${user.name}, Teste fila :D`,
    };
    // Adicionar job RegistrationMail na fila
    await Queue.add('RegistrationMail', { emailData });

    return response.json(user);
  }
}

export default new UserController();
