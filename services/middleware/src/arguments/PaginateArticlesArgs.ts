import { ArgsType, Field, Int } from "type-graphql";
import { Min, Max } from "class-validator";

@ArgsType()
export class PaginateArticlesArgs {
  @Field()
  filter: string = '';

  @Field(type => Int)
  @Min(0)
  pageIndex: number = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  pageSize: number = 25;
}