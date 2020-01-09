import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'pepe',
        password: 'san',
      },
      {
        userId: 2,
        username: 'chari',
        password: 'nyska',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'invitada',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
