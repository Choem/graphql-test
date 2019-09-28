import { Resolver, Query, Mutation, Int, Arg, Args } from "type-graphql";
import { Article } from "../entities/Article";
import { CreateArticleInput } from "../inputs/CreateArticleInput";
import { UpdateArticleInput } from "../inputs/UpdateArticleInput";
import { PaginateArticlesArgs } from "../arguments/PaginateArticlesArgs";
import { Repository } from "typeorm";
import { getDbConnection } from "../..";
import { ArticleListResult } from "../results/ArticleListResult";

@Resolver(of => Article)
export class ArticleResolver {
  articleRepository: Repository<Article>;

  constructor() {
    this.articleRepository = getDbConnection().getRepository(Article);
  }

  @Query(returns => ArticleListResult)
  async listArticles() {
    const [articles, total] = await this.articleRepository.findAndCount();

    return {
      articles,
      count: total
    };
  }

  @Query(returns => ArticleListResult)
  async paginateArticles(@Args() paginateArticlesArgs: PaginateArticlesArgs) {
    const [articles, total] = await this.articleRepository
      .createQueryBuilder('article')
      .skip(paginateArticlesArgs.pageSize * paginateArticlesArgs.pageIndex)
      .take(paginateArticlesArgs.pageSize)
      .where('LOWER(article.name) like :name', { name: `%${paginateArticlesArgs.filter}%`.toLowerCase() })
      .getManyAndCount();

    return {
      articles,
      count: total,
      pageIndex: paginateArticlesArgs.pageIndex,
      pageSize: paginateArticlesArgs.pageSize
    };
  }

  @Mutation(returns => Int)
  async createArticle(@Arg('input') createArticleInput: CreateArticleInput) {
    return await this.articleRepository.create(createArticleInput);
  }

  @Query(returns => Article)
  async findArticleById(@Arg('id') id: number) {
    return await this.articleRepository.findOne({
      where: {
        id
      }
    });
  }

  @Mutation(returns => Article)
  async updateArticle(@Arg('input') updateArticleInput: UpdateArticleInput) {
    return await this.articleRepository.update(updateArticleInput.id, {
      name: updateArticleInput.name,
    });
  }

  @Mutation(returns => Boolean)
  async deleteArticleById(@Arg('id') id: number) {
    try {
      await this.articleRepository.delete({ id });
      return true;
    } catch {
      return false;
    }
  }
}