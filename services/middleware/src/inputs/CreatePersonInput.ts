import { Field, Int } from "type-graphql";
import { MaxLength, Min, Max } from "class-validator";
import { PersonGender } from "../enums/PersonGender";

export class CreatePersonInput {
  @Field()
  @MaxLength(30)
  name!: string;

  @Field(type => Int)
  @Min(18)
  @Max(99)
  age!: number;

  @Field(type => PersonGender)
  personGender!: PersonGender;
}