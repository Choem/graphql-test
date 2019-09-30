import { Field, Int, InputType } from "type-graphql";
import { MaxLength, Min, Max, IsNotEmpty } from "class-validator";
import { PersonGender } from "../enums/PersonGender";

@InputType()
export class UpdatePersonInput {
  @Field(type => Int)
  @IsNotEmpty()
  id!: number;

  @Field()
  @MaxLength(30)
  name!: string;

  @Field(type => Int)
  @Min(18)
  @Max(99)
  age!: number;

  @Field(type => PersonGender)
  gender!: PersonGender;
}