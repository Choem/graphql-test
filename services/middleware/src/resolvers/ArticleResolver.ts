import { Resolver, Query, Mutation, Int, Arg, Args } from "type-graphql";
import { Article } from "../entities/Article";
import { ArticleService } from "../services/ArticleService";
import { CreateArticleInput } from "../inputs/CreateArticleInput";
import { UpdateArticleInput } from "../inputs/UpdateArticleInput";
import { PaginateArticlesArgs } from "../arguments/PaginateArticlesArgs";
import Container from "typedi";

@Resolver(of => Article)
export class ArticleResolver {
  articleService: ArticleService;

  constructor() {
    this.articleService = Container.get(ArticleService);
  }

  @Query(returns => [Article])
  async listArticles() {
    return this.articleService.list();
  }

  @Query(returns => [Article])
  async paginateArticles(@Args() paginateArticlesArgs: PaginateArticlesArgs) {
    return this.articleService.paginate(paginateArticlesArgs);
  }

  @Mutation(returns => Int)
  async createArticle(@Arg('input') createArticleInput: CreateArticleInput) {
    return await this.articleService.create(createArticleInput);
  }

  @Query(returns => Article)
  async findArticleById(@Arg('id') id: number) {
    return await this.articleService.findById(id);
  }

  @Mutation(returns => Article)
  async updateArticle(@Arg('input') updateArticleInput: UpdateArticleInput) {
    return await this.articleService.update(updateArticleInput);
  }

  @Mutation(returns => Boolean)
  async deleteArticleById(@Arg('id') id: number) {
    try {
      await this.articleService.delete(id);
      return true;
    } catch {
      return false;
    }
  }
}