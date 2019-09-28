import { Resolver, Query, Int, Arg, Mutation, Args } from "type-graphql";
import { Person } from "../entities/Person";
import { PersonService } from "../services/PersonService";
import { PaginatePersonsArgs } from "../arguments/PaginatePersonsArgs";
import { CreatePersonInput } from "../inputs/CreatePersonInput";
import { UpdatePersonInput } from "../inputs/UpdatePersonInput";
import Container from "typedi";

@Resolver(of => Person)
export class PersonResolver {
  personService: PersonService;

  constructor() {
    this.personService = Container.get(PersonService);
  }

  @Query(returns => [Person])
  async listPersons() {
    return await this.personService.list();
  }

  @Query(returns => [Person])
  async paginatePersons(@Args() paginatePersonsArgs: PaginatePersonsArgs) {
    return await this.personService.paginate(paginatePersonsArgs);
  }

  @Mutation(returns => Int)
  async createPerson(@Arg('input') createPersonInput: CreatePersonInput) {
    return await this.personService.create(createPersonInput);
  }

  @Query(returns => Person)
  async findPersonById(@Arg('id') id: number) {
    return await this.personService.findById(id);
  }

  @Query(returns => Person)
  async findPersonByName(@Arg('name') name: string) {
    return await this.personService.findByName(name);
  }

  @Mutation(returns => Person)
  async updatePerson(@Arg('input') updatePersonInput: UpdatePersonInput) {
    return await this.personService.update(updatePersonInput);
  }

  @Mutation(returns => Boolean)
  async deletePersonById(@Arg('id') id: number) {
    try {
      await this.personService.delete(id);
      return true;
    } catch {
      return false;
    }
  }
}