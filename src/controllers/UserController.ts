import { Request, Response } from 'express';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    return response.json(user);
  }
}

export default new UserController();
