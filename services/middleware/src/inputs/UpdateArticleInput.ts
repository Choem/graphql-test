import { Field, Int, InputType } from "type-graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class UpdateArticleInput {
  @Field(type => Int)
  id!: number;

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