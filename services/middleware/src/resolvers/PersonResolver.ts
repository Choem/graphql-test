import { Resolver, Query, Int, Arg, Mutation, Args } from "type-graphql";
import { Person } from "../entities/Person";
import { PaginatePersonsArgs } from "../arguments/PaginatePersonsArgs";
import { CreatePersonInput } from "../inputs/CreatePersonInput";
import { UpdatePersonInput } from "../inputs/UpdatePersonInput";
import { Repository } from "typeorm";
import { getDbConnection } from "../..";
import { PersonListResult } from "../results/PersonListResult";

@Resolver(of => Person)
export class PersonResolver {
  personRepository: Repository<Person>;

  constructor() {
    this.personRepository = getDbConnection().getRepository(Person);
  }

  @Query(returns => PersonListResult)
  async listPersons() {
    const [persons, total] = await this.personRepository.findAndCount();

    return {
      persons,
      count: total
    };
  }

  @Query(returns => PersonListResult)
  async paginatePersons(@Args() paginatePersonsArgs: PaginatePersonsArgs) {
    const [persons, total] = await this.personRepository
      .createQueryBuilder('person')
      .skip(paginatePersonsArgs.pageSize * paginatePersonsArgs.pageIndex)
      .take(paginatePersonsArgs.pageSize)
      .where('LOWER(person.name) like :name', { name: `%${paginatePersonsArgs.filter}%`.toLowerCase() })
      .getManyAndCount();

    return {
      persons,
      count: total,
      pageIndex: paginatePersonsArgs.pageIndex,
      pageSize: paginatePersonsArgs.pageSize
    };
  }

  @Mutation(returns => Person)
  async createPerson(@Arg('input') createPersonInput: CreatePersonInput) {
    return await this.personRepository.save(createPersonInput);
  }

  @Query(returns => Person)
  async findPersonById(@Arg('id') id: number) {
    return await this.personRepository.findOne({
      where: {
        id
      }
    });
  }

  @Query(returns => Person)
  async findPersonByName(@Arg('name') name: string) {
    return await this.personRepository.findOne({
      where: {
        name
      }
    });
  }

  @Mutation(returns => Person)
  async updatePerson(@Arg('input') updatePersonInput: UpdatePersonInput) {
    return await this.personRepository.update(updatePersonInput.id, {
      name: updatePersonInput.name,
      age: updatePersonInput.age,
      gender: updatePersonInput.gender
    });
  }

  @Mutation(returns => Boolean)
  async deletePersonById(@Arg('id') id: number) {
    try {
      await this.personRepository.delete({ id });
      return true;
    } catch {
      return false;
    }
  }
}