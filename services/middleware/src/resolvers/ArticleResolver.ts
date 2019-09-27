import { Resolver, Query, Mutation, Int, Arg, Args } from "type-graphql";
import { Article } from "../entities/Article";
import { ArticleService } from "../services/ArticleService";
import { CreateArticleInput } from "../inputs/CreateArticleInput";
import { UpdateArticleInput } from "../inputs/UpdateArticleInput";
import { PaginateArticlesArgs } from "../arguments/PaginateArticlesArgs";

@Resolver(Article)
export class ArticleResolver {
  constructor(
    private articleService: ArticleService
  ) { }

  @Query(returns => [Article])
  async list() {
    return this.articleService.list();
  }

  @Query(returns => [Article])
  async paginate(@Args() paginateArticlesArgs: PaginateArticlesArgs) {
    return this.articleService.paginate(paginateArticlesArgs);
  }

  @Mutation(returns => Int)
  async create(@Args() createArticleInput: CreateArticleInput) {
    return await this.articleService.create(createArticleInput);
  }

  @Query(returns => Article)
  async findById(@Arg('id') id: number) {
    return await this.articleService.findById(id);
  }

  @Mutation(returns => Article)
  async update(@Args() updateArticleInput: UpdateArticleInput) {
    return await this.articleService.update(updateArticleInput);
  }

  @Mutation(returns => Boolean)
  async delete(@Arg('id') id: number) {
    try {
      await this.articleService.delete(id);
      return true;
    } catch {
      return false;
    }
  }
}