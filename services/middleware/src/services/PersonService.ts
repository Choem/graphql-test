import { BaseService } from './BaseService';
import { Person } from '../entities/Person';
import { CreatePersonInput } from '../inputs/CreatePersonInput';
import { PaginatePersonsArgs } from '../arguments/PaginatePersonsArgs';
import { Like } from 'typeorm';
import { UpdatePersonInput } from '../inputs/UpdatePersonInput';

export class PersonService extends BaseService {
  constructor() {
    super();
  }

  async list() {
    const [persons, total] = await this.repository<Person>(typeof Person).findAndCount();

    return {
      data: persons,
      count: total
    };
  }

  async paginate(paginatePersonsArgs: PaginatePersonsArgs) {
    const [persons, total] = await this.repository<Person>(typeof Person).findAndCount({
      // name: Like(`%${paginatePersonsArgs.filter}%`),
      skip: paginatePersonsArgs.pageIndex * paginatePersonsArgs.pageSize,
      take: paginatePersonsArgs.pageSize
    });

    return {
      data: persons,
      count: total,
      pageIndex: paginatePersonsArgs.pageIndex,
      pageSize: paginatePersonsArgs.pageSize
    };
  }

  async create(createPersonInput: CreatePersonInput) {
    return await this.repository<Person>(typeof Person).create(createPersonInput);
  }

  async findById(id: number) {
    return await this.repository<Person>(typeof Person).findOne({
      where: {
        id
      }
    });
  }

  async findByName(name: string) {
    return await this.repository<Person>(typeof Person).findOne({
      where: {
        name
      }
    });
  }

  async update(updatePersonInput: UpdatePersonInput) {
    return await this.repository<Person>(typeof Person).update(updatePersonInput.id, {
      name: updatePersonInput.name,
      age: updatePersonInput.age,
      gender: updatePersonInput.personGender
    });
  }

  async delete(id: number) {
    await this.repository<Person>(typeof Person).delete({ id });
  }
}