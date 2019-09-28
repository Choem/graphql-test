import { ObjectType, Field, Int } from "type-graphql";
import { Article } from "../entities/Article";

@ObjectType()
export class ArticleListResult {
  @Field(type => [Article])
  articles: Article[] = [];

  @Field(type => Int)
  count!: number;

  @Field(type => Int, { nullable: true })
  pageIndex?: number;

  @Field(type => Int, { nullable: true })
  pageSize?: number
}