import { ObjectType, Field, Int } from "type-graphql";
import { Person } from "../entities/Person";

@ObjectType()
export class PersonListResult {
  @Field(type => [Person])
  persons: Person[] = [];

  @Field(type => Int)
  count!: number;

  @Field(type => Int, { nullable: true })
  pageIndex?: number;

  @Field(type => Int, { nullable: true })
  pageSize?: number;
}