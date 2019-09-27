import { Resolver, Query, Int, Arg, Mutation, Args } from "type-graphql";
import { Person } from "../entities/Person";
import { PersonService } from "../services/PersonService";
import { PaginatePersonsArgs } from "../arguments/PaginatePersonsArgs";
import { CreatePersonInput } from "../inputs/CreatePersonInput";
import { UpdatePersonInput } from "../inputs/UpdatePersonInput";

@Resolver(Person)
export class PersonResolver {
  constructor(
    private personService: PersonService
  ) { }

  @Query(returns => [Person])
  async list() {
    return await this.personService.list();
  }

  @Query(returns => [Person])
  async paginate(@Args() paginatePersonsArgs: PaginatePersonsArgs) {
    return await this.personService.paginate(paginatePersonsArgs);
  }

  @Mutation(returns => Int)
  async create(@Args() createPersonInput: CreatePersonInput) {
    return await this.personService.create(createPersonInput);
  }

  @Query(returns => Person)
  async findById(@Arg('id') id: number) {
    return await this.personService.findById(id);
  }

  @Query(returns => Person)
  async findByName(@Arg('name') name: string) {
    return await this.personService.findByName(name);
  }

  @Mutation(returns => Person)
  async update(@Args() updatePersonInput: UpdatePersonInput) {
    return await this.personService.update(updatePersonInput);
  }

  @Mutation(returns => Boolean)
  async delete(@Arg('id') id: number) {
    try {
      await this.personService.delete(id);
      return true;
    } catch {
      return false;
    }
  }
}