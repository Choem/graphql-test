import { Field, InputType, Int } from "type-graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreateArticleInput {
  @Field(type => Int)
  @IsNotEmpty()
  authorId!: number;

  @Field()
  @MaxLength(50)
  name!: string;

  @Field()
  @MinLength(50)
  description!: string;
}