import { InjectRepository } from "@mikro-orm/nestjs";
import type { EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import bcrypt from "bcryptjs";

import { User } from "@/models";
import type { AuthenticationRegisterInput } from "@/modules/authentication/authentication.dto";

@Injectable()
export class UserService {
  public constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>) {}

  public async findByID(id: string) {
    return this.userRepository.findOne({ id });
  }

  public async findByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  public async create({ password, ...rest }: AuthenticationRegisterInput) {
    const hash = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ password: hash, ...rest });

    await this.userRepository.persistAndFlush(user);
    return user;
  }
}
