import { BaseService } from "./BaseService";
import { Article } from "../entities/Article";
import { CreateArticleInput } from "../inputs/CreateArticleInput";
import { UpdateArticleInput } from "../inputs/UpdateArticleInput";
import { PaginateArticlesArgs } from "../arguments/PaginateArticlesArgs";

export class ArticleService extends BaseService {
  constructor() {
    super();
  }

  async list() {
    const [articles, total] = await this.repository<Article>(typeof Article).findAndCount();

    return {
      data: articles,
      count: total
    };
  }

  async paginate(paginateArticlesArgs: PaginateArticlesArgs) {
    const [articles, total] = await this.repository<Article>(typeof Article).findAndCount({
      // name: Like(`%${paginatePersonsArgs.filter}%`),
      skip: paginateArticlesArgs.pageIndex * paginateArticlesArgs.pageSize,
      take: paginateArticlesArgs.pageSize
    });

    return {
      data: articles,
      count: total,
      pageIndex: paginateArticlesArgs.pageIndex,
      pageSize: paginateArticlesArgs.pageSize
    };
  }

  async create(createArticleInput: CreateArticleInput) {
    return await this.repository<Article>(typeof Article).create(createArticleInput);
  }

  async findById(id: number) {
    return await this.repository<Article>(typeof Article).findOne({
      where: {
        id
      }
    });
  }

  async findByName(name: string) {
    return await this.repository<Article>(typeof Article).findOne({
      where: {
        name
      }
    });
  }

  async update(updateArticleInput: UpdateArticleInput) {
    return await this.repository<Article>(typeof Article).update(updateArticleInput.id, {
      name: updateArticleInput.name,
    });
  }

  async delete(id: number) {
    await this.repository<Article>(typeof Article).delete({ id });
  }
}