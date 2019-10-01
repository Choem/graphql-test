import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Article = {
  __typename?: "Article";
  id: Scalars["ID"];
  authorId: Scalars["Int"];
  name: Scalars["String"];
  description: Scalars["String"];
  createdAt: Scalars["DateTime"];
  author: Person;
};

export type ArticleListResult = {
  __typename?: "ArticleListResult";
  articles: Array<Article>;
  count: Scalars["Int"];
  pageIndex?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type CreateArticleInput = {
  authorId: Scalars["Int"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type CreatePersonInput = {
  name: Scalars["String"];
  age: Scalars["Int"];
  gender: PersonGender;
};

export type Mutation = {
  __typename?: "Mutation";
  createPerson: Person;
  updatePerson: Person;
  deletePersonById: Scalars["Boolean"];
  createArticle: Article;
  updateArticle: Article;
  deleteArticleById: Scalars["Boolean"];
};

export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};

export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};

export type MutationDeletePersonByIdArgs = {
  id: Scalars["Float"];
};

export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};

export type MutationUpdateArticleArgs = {
  input: UpdateArticleInput;
};

export type MutationDeleteArticleByIdArgs = {
  id: Scalars["Float"];
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  name: Scalars["String"];
  age: Scalars["Int"];
  gender: PersonGender;
  articles: Array<Article>;
};

export enum PersonGender {
  Male = "MALE",
  Female = "FEMALE",
  ApacheHelicopter = "APACHE_HELICOPTER"
}

export type PersonListResult = {
  __typename?: "PersonListResult";
  persons: Array<Person>;
  count: Scalars["Int"];
  pageIndex?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  listPersons: PersonListResult;
  paginatePersons: PersonListResult;
  findPersonById: Person;
  findPersonByName: Person;
  listArticles: ArticleListResult;
  paginateArticles: ArticleListResult;
  findArticleById: Article;
};

export type QueryPaginatePersonsArgs = {
  filter?: Maybe<Scalars["String"]>;
  pageIndex?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type QueryFindPersonByIdArgs = {
  id: Scalars["Float"];
};

export type QueryFindPersonByNameArgs = {
  name: Scalars["String"];
};

export type QueryPaginateArticlesArgs = {
  filter?: Maybe<Scalars["String"]>;
  pageIndex?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type QueryFindArticleByIdArgs = {
  id: Scalars["Float"];
};

export type UpdateArticleInput = {
  id: Scalars["Int"];
  authorId: Scalars["Int"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type UpdatePersonInput = {
  id: Scalars["Int"];
  name: Scalars["String"];
  age: Scalars["Int"];
  gender: PersonGender;
};
export type CreateArticleMutationVariables = {
  authorId: Scalars["Int"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type CreateArticleMutation = { __typename?: "Mutation" } & {
  createArticle: { __typename?: "Article" } & Pick<Article, "id">;
};

export type DeleteArticleByIdMutationVariables = {
  id: Scalars["Float"];
};

export type DeleteArticleByIdMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteArticleById"
>;

export type FindArticleByIdQueryVariables = {
  id: Scalars["Float"];
};

export type FindArticleByIdQuery = { __typename?: "Query" } & {
  findArticleById: { __typename?: "Article" } & Pick<
    Article,
    "id" | "name" | "description" | "createdAt"
  > & { author: { __typename?: "Person" } & Pick<Person, "id" | "name"> };
};

export type ListArticlesQueryVariables = {};

export type ListArticlesQuery = { __typename?: "Query" } & {
  listArticles: { __typename?: "ArticleListResult" } & Pick<
    ArticleListResult,
    "count"
  > & {
      articles: Array<
        { __typename?: "Article" } & Pick<
          Article,
          "id" | "name" | "createdAt"
        > & { author: { __typename?: "Person" } & Pick<Person, "name"> }
      >;
    };
};

export type PaginateArticlesQueryVariables = {
  filter?: Maybe<Scalars["String"]>;
  pageIndex: Scalars["Int"];
  pageSize: Scalars["Int"];
};

export type PaginateArticlesQuery = { __typename?: "Query" } & {
  paginateArticles: { __typename?: "ArticleListResult" } & Pick<
    ArticleListResult,
    "count" | "pageIndex" | "pageSize"
  > & {
      articles: Array<
        { __typename?: "Article" } & Pick<
          Article,
          "id" | "name" | "createdAt"
        > & { author: { __typename?: "Person" } & Pick<Person, "name"> }
      >;
    };
};

export type UpdateArticleMutationVariables = {
  id: Scalars["Int"];
  authorId: Scalars["Int"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type UpdateArticleMutation = { __typename?: "Mutation" } & {
  updateArticle: { __typename?: "Article" } & Pick<
    Article,
    "id" | "name" | "description"
  >;
};

export type CreatePersonMutationVariables = {
  name: Scalars["String"];
  age: Scalars["Int"];
  gender: PersonGender;
};

export type CreatePersonMutation = { __typename?: "Mutation" } & {
  createPerson: { __typename?: "Person" } & Pick<Person, "id">;
};

export type DeletePersonByIdMutationVariables = {
  id: Scalars["Float"];
};

export type DeletePersonByIdMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deletePersonById"
>;

export type FindPersonByIdQueryVariables = {
  id: Scalars["Float"];
};

export type FindPersonByIdQuery = { __typename?: "Query" } & {
  findPersonById: { __typename?: "Person" } & Pick<
    Person,
    "id" | "name" | "age" | "gender"
  > & {
      articles: Array<
        { __typename?: "Article" } & Pick<Article, "id" | "name" | "createdAt">
      >;
    };
};

export type FindPersonByNameQueryVariables = {
  name: Scalars["String"];
};

export type FindPersonByNameQuery = { __typename?: "Query" } & {
  findPersonByName: { __typename?: "Person" } & Pick<
    Person,
    "id" | "name" | "age" | "gender"
  > & {
      articles: Array<
        { __typename?: "Article" } & Pick<Article, "id" | "name" | "createdAt">
      >;
    };
};

export type ListPersonsQueryVariables = {};

export type ListPersonsQuery = { __typename?: "Query" } & {
  listPersons: { __typename?: "PersonListResult" } & Pick<
    PersonListResult,
    "count"
  > & {
      persons: Array<
        { __typename?: "Person" } & Pick<
          Person,
          "id" | "name" | "age" | "gender"
        >
      >;
    };
};

export type PaginatePersonsQueryVariables = {
  filter?: Maybe<Scalars["String"]>;
  pageIndex: Scalars["Int"];
  pageSize: Scalars["Int"];
};

export type PaginatePersonsQuery = { __typename?: "Query" } & {
  paginatePersons: { __typename?: "PersonListResult" } & Pick<
    PersonListResult,
    "count" | "pageIndex" | "pageSize"
  > & {
      persons: Array<
        { __typename?: "Person" } & Pick<
          Person,
          "id" | "name" | "age" | "gender"
        >
      >;
    };
};

export type UpdatePersonMutationVariables = {
  id: Scalars["Int"];
  name: Scalars["String"];
  age: Scalars["Int"];
  gender: PersonGender;
};

export type UpdatePersonMutation = { __typename?: "Mutation" } & {
  updatePerson: { __typename?: "Person" } & Pick<
    Person,
    "id" | "name" | "age" | "gender"
  >;
};

export const CreateArticleDocument = gql`
  mutation CreateArticle(
    $authorId: Int!
    $name: String!
    $description: String!
  ) {
    createArticle(
      input: { authorId: $authorId, name: $name, description: $description }
    ) {
      id
    }
  }
`;
export type CreateArticleMutationFn = ApolloReactCommon.MutationFunction<
  CreateArticleMutation,
  CreateArticleMutationVariables
>;
export type CreateArticleComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >,
  "mutation"
>;

export const CreateArticleComponent = (props: CreateArticleComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >
    mutation={CreateArticleDocument}
    {...props}
  />
);

export type CreateArticleProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateArticleMutation,
  CreateArticleMutationVariables
> &
  TChildProps;
export function withCreateArticle<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateArticleMutation,
    CreateArticleMutationVariables,
    CreateArticleProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateArticleMutation,
    CreateArticleMutationVariables,
    CreateArticleProps<TChildProps>
  >(CreateArticleDocument, {
    alias: "createArticle",
    ...operationOptions
  });
}

export function useCreateArticleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >(CreateArticleDocument, baseOptions);
}
export type CreateArticleMutationHookResult = ReturnType<
  typeof useCreateArticleMutation
>;
export type CreateArticleMutationResult = ApolloReactCommon.MutationResult<
  CreateArticleMutation
>;
export type CreateArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateArticleMutation,
  CreateArticleMutationVariables
>;
export const DeleteArticleByIdDocument = gql`
  mutation DeleteArticleById($id: Float!) {
    deleteArticleById(id: $id)
  }
`;
export type DeleteArticleByIdMutationFn = ApolloReactCommon.MutationFunction<
  DeleteArticleByIdMutation,
  DeleteArticleByIdMutationVariables
>;
export type DeleteArticleByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables
  >,
  "mutation"
>;

export const DeleteArticleByIdComponent = (
  props: DeleteArticleByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables
  >
    mutation={DeleteArticleByIdDocument}
    {...props}
  />
);

export type DeleteArticleByIdProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  DeleteArticleByIdMutation,
  DeleteArticleByIdMutationVariables
> &
  TChildProps;
export function withDeleteArticleById<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables,
    DeleteArticleByIdProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables,
    DeleteArticleByIdProps<TChildProps>
  >(DeleteArticleByIdDocument, {
    alias: "deleteArticleById",
    ...operationOptions
  });
}

export function useDeleteArticleByIdMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteArticleByIdMutation,
    DeleteArticleByIdMutationVariables
  >(DeleteArticleByIdDocument, baseOptions);
}
export type DeleteArticleByIdMutationHookResult = ReturnType<
  typeof useDeleteArticleByIdMutation
>;
export type DeleteArticleByIdMutationResult = ApolloReactCommon.MutationResult<
  DeleteArticleByIdMutation
>;
export type DeleteArticleByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteArticleByIdMutation,
  DeleteArticleByIdMutationVariables
>;
export const FindArticleByIdDocument = gql`
  query FindArticleById($id: Float!) {
    findArticleById(id: $id) {
      id
      name
      description
      createdAt
      author {
        id
        name
      }
    }
  }
`;
export type FindArticleByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: FindArticleByIdQueryVariables; skip?: boolean }
    | { skip: boolean });

export const FindArticleByIdComponent = (
  props: FindArticleByIdComponentProps
) => (
  <ApolloReactComponents.Query<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >
    query={FindArticleByIdDocument}
    {...props}
  />
);

export type FindArticleByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  FindArticleByIdQuery,
  FindArticleByIdQueryVariables
> &
  TChildProps;
export function withFindArticleById<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables,
    FindArticleByIdProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables,
    FindArticleByIdProps<TChildProps>
  >(FindArticleByIdDocument, {
    alias: "findArticleById",
    ...operationOptions
  });
}

export function useFindArticleByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >(FindArticleByIdDocument, baseOptions);
}
export function useFindArticleByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FindArticleByIdQuery,
    FindArticleByIdQueryVariables
  >(FindArticleByIdDocument, baseOptions);
}

export type FindArticleByIdQueryHookResult = ReturnType<
  typeof useFindArticleByIdQuery
>;
export type FindArticleByIdQueryResult = ApolloReactCommon.QueryResult<
  FindArticleByIdQuery,
  FindArticleByIdQueryVariables
>;
export const ListArticlesDocument = gql`
  query ListArticles {
    listArticles {
      articles {
        id
        name
        createdAt
        author {
          name
        }
      }
      count
    }
  }
`;
export type ListArticlesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ListArticlesQuery,
    ListArticlesQueryVariables
  >,
  "query"
>;

export const ListArticlesComponent = (props: ListArticlesComponentProps) => (
  <ApolloReactComponents.Query<ListArticlesQuery, ListArticlesQueryVariables>
    query={ListArticlesDocument}
    {...props}
  />
);

export type ListArticlesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  ListArticlesQuery,
  ListArticlesQueryVariables
> &
  TChildProps;
export function withListArticles<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ListArticlesQuery,
    ListArticlesQueryVariables,
    ListArticlesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ListArticlesQuery,
    ListArticlesQueryVariables,
    ListArticlesProps<TChildProps>
  >(ListArticlesDocument, {
    alias: "listArticles",
    ...operationOptions
  });
}

export function useListArticlesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListArticlesQuery,
    ListArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ListArticlesQuery,
    ListArticlesQueryVariables
  >(ListArticlesDocument, baseOptions);
}
export function useListArticlesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListArticlesQuery,
    ListArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ListArticlesQuery,
    ListArticlesQueryVariables
  >(ListArticlesDocument, baseOptions);
}

export type ListArticlesQueryHookResult = ReturnType<
  typeof useListArticlesQuery
>;
export type ListArticlesQueryResult = ApolloReactCommon.QueryResult<
  ListArticlesQuery,
  ListArticlesQueryVariables
>;
export const PaginateArticlesDocument = gql`
  query PaginateArticles($filter: String, $pageIndex: Int!, $pageSize: Int!) {
    paginateArticles(
      filter: $filter
      pageIndex: $pageIndex
      pageSize: $pageSize
    ) {
      articles {
        id
        name
        createdAt
        author {
          name
        }
      }
      count
      pageIndex
      pageSize
    }
  }
`;
export type PaginateArticlesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >,
  "query"
> &
  (
    | { variables: PaginateArticlesQueryVariables; skip?: boolean }
    | { skip: boolean });

export const PaginateArticlesComponent = (
  props: PaginateArticlesComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >
    query={PaginateArticlesDocument}
    {...props}
  />
);

export type PaginateArticlesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  PaginateArticlesQuery,
  PaginateArticlesQueryVariables
> &
  TChildProps;
export function withPaginateArticles<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables,
    PaginateArticlesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables,
    PaginateArticlesProps<TChildProps>
  >(PaginateArticlesDocument, {
    alias: "paginateArticles",
    ...operationOptions
  });
}

export function usePaginateArticlesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >(PaginateArticlesDocument, baseOptions);
}
export function usePaginateArticlesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PaginateArticlesQuery,
    PaginateArticlesQueryVariables
  >(PaginateArticlesDocument, baseOptions);
}

export type PaginateArticlesQueryHookResult = ReturnType<
  typeof usePaginateArticlesQuery
>;
export type PaginateArticlesQueryResult = ApolloReactCommon.QueryResult<
  PaginateArticlesQuery,
  PaginateArticlesQueryVariables
>;
export const UpdateArticleDocument = gql`
  mutation UpdateArticle(
    $id: Int!
    $authorId: Int!
    $name: String!
    $description: String!
  ) {
    updateArticle(
      input: {
        id: $id
        authorId: $authorId
        name: $name
        description: $description
      }
    ) {
      id
      name
      description
    }
  }
`;
export type UpdateArticleMutationFn = ApolloReactCommon.MutationFunction<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>;
export type UpdateArticleComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >,
  "mutation"
>;

export const UpdateArticleComponent = (props: UpdateArticleComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >
    mutation={UpdateArticleDocument}
    {...props}
  />
);

export type UpdateArticleProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
> &
  TChildProps;
export function withUpdateArticle<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateArticleMutation,
    UpdateArticleMutationVariables,
    UpdateArticleProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateArticleMutation,
    UpdateArticleMutationVariables,
    UpdateArticleProps<TChildProps>
  >(UpdateArticleDocument, {
    alias: "updateArticle",
    ...operationOptions
  });
}

export function useUpdateArticleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >(UpdateArticleDocument, baseOptions);
}
export type UpdateArticleMutationHookResult = ReturnType<
  typeof useUpdateArticleMutation
>;
export type UpdateArticleMutationResult = ApolloReactCommon.MutationResult<
  UpdateArticleMutation
>;
export type UpdateArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>;
export const CreatePersonDocument = gql`
  mutation CreatePerson($name: String!, $age: Int!, $gender: PersonGender!) {
    createPerson(input: { name: $name, age: $age, gender: $gender }) {
      id
    }
  }
`;
export type CreatePersonMutationFn = ApolloReactCommon.MutationFunction<
  CreatePersonMutation,
  CreatePersonMutationVariables
>;
export type CreatePersonComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >,
  "mutation"
>;

export const CreatePersonComponent = (props: CreatePersonComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >
    mutation={CreatePersonDocument}
    {...props}
  />
);

export type CreatePersonProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreatePersonMutation,
  CreatePersonMutationVariables
> &
  TChildProps;
export function withCreatePerson<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreatePersonMutation,
    CreatePersonMutationVariables,
    CreatePersonProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreatePersonMutation,
    CreatePersonMutationVariables,
    CreatePersonProps<TChildProps>
  >(CreatePersonDocument, {
    alias: "createPerson",
    ...operationOptions
  });
}

export function useCreatePersonMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >(CreatePersonDocument, baseOptions);
}
export type CreatePersonMutationHookResult = ReturnType<
  typeof useCreatePersonMutation
>;
export type CreatePersonMutationResult = ApolloReactCommon.MutationResult<
  CreatePersonMutation
>;
export type CreatePersonMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePersonMutation,
  CreatePersonMutationVariables
>;
export const DeletePersonByIdDocument = gql`
  mutation DeletePersonById($id: Float!) {
    deletePersonById(id: $id)
  }
`;
export type DeletePersonByIdMutationFn = ApolloReactCommon.MutationFunction<
  DeletePersonByIdMutation,
  DeletePersonByIdMutationVariables
>;
export type DeletePersonByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables
  >,
  "mutation"
>;

export const DeletePersonByIdComponent = (
  props: DeletePersonByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables
  >
    mutation={DeletePersonByIdDocument}
    {...props}
  />
);

export type DeletePersonByIdProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  DeletePersonByIdMutation,
  DeletePersonByIdMutationVariables
> &
  TChildProps;
export function withDeletePersonById<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables,
    DeletePersonByIdProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables,
    DeletePersonByIdProps<TChildProps>
  >(DeletePersonByIdDocument, {
    alias: "deletePersonById",
    ...operationOptions
  });
}

export function useDeletePersonByIdMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeletePersonByIdMutation,
    DeletePersonByIdMutationVariables
  >(DeletePersonByIdDocument, baseOptions);
}
export type DeletePersonByIdMutationHookResult = ReturnType<
  typeof useDeletePersonByIdMutation
>;
export type DeletePersonByIdMutationResult = ApolloReactCommon.MutationResult<
  DeletePersonByIdMutation
>;
export type DeletePersonByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeletePersonByIdMutation,
  DeletePersonByIdMutationVariables
>;
export const FindPersonByIdDocument = gql`
  query FindPersonById($id: Float!) {
    findPersonById(id: $id) {
      id
      name
      age
      gender
      articles {
        id
        name
        createdAt
      }
    }
  }
`;
export type FindPersonByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: FindPersonByIdQueryVariables; skip?: boolean }
    | { skip: boolean });

export const FindPersonByIdComponent = (
  props: FindPersonByIdComponentProps
) => (
  <ApolloReactComponents.Query<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >
    query={FindPersonByIdDocument}
    {...props}
  />
);

export type FindPersonByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  FindPersonByIdQuery,
  FindPersonByIdQueryVariables
> &
  TChildProps;
export function withFindPersonById<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables,
    FindPersonByIdProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables,
    FindPersonByIdProps<TChildProps>
  >(FindPersonByIdDocument, {
    alias: "findPersonById",
    ...operationOptions
  });
}

export function useFindPersonByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >(FindPersonByIdDocument, baseOptions);
}
export function useFindPersonByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FindPersonByIdQuery,
    FindPersonByIdQueryVariables
  >(FindPersonByIdDocument, baseOptions);
}

export type FindPersonByIdQueryHookResult = ReturnType<
  typeof useFindPersonByIdQuery
>;
export type FindPersonByIdQueryResult = ApolloReactCommon.QueryResult<
  FindPersonByIdQuery,
  FindPersonByIdQueryVariables
>;
export const FindPersonByNameDocument = gql`
  query FindPersonByName($name: String!) {
    findPersonByName(name: $name) {
      id
      name
      age
      gender
      articles {
        id
        name
        createdAt
      }
    }
  }
`;
export type FindPersonByNameComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >,
  "query"
> &
  (
    | { variables: FindPersonByNameQueryVariables; skip?: boolean }
    | { skip: boolean });

export const FindPersonByNameComponent = (
  props: FindPersonByNameComponentProps
) => (
  <ApolloReactComponents.Query<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >
    query={FindPersonByNameDocument}
    {...props}
  />
);

export type FindPersonByNameProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  FindPersonByNameQuery,
  FindPersonByNameQueryVariables
> &
  TChildProps;
export function withFindPersonByName<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables,
    FindPersonByNameProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables,
    FindPersonByNameProps<TChildProps>
  >(FindPersonByNameDocument, {
    alias: "findPersonByName",
    ...operationOptions
  });
}

export function useFindPersonByNameQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >(FindPersonByNameDocument, baseOptions);
}
export function useFindPersonByNameLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FindPersonByNameQuery,
    FindPersonByNameQueryVariables
  >(FindPersonByNameDocument, baseOptions);
}

export type FindPersonByNameQueryHookResult = ReturnType<
  typeof useFindPersonByNameQuery
>;
export type FindPersonByNameQueryResult = ApolloReactCommon.QueryResult<
  FindPersonByNameQuery,
  FindPersonByNameQueryVariables
>;
export const ListPersonsDocument = gql`
  query ListPersons {
    listPersons {
      persons {
        id
        name
        age
        gender
      }
      count
    }
  }
`;
export type ListPersonsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ListPersonsQuery,
    ListPersonsQueryVariables
  >,
  "query"
>;

export const ListPersonsComponent = (props: ListPersonsComponentProps) => (
  <ApolloReactComponents.Query<ListPersonsQuery, ListPersonsQueryVariables>
    query={ListPersonsDocument}
    {...props}
  />
);

export type ListPersonsProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  ListPersonsQuery,
  ListPersonsQueryVariables
> &
  TChildProps;
export function withListPersons<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ListPersonsQuery,
    ListPersonsQueryVariables,
    ListPersonsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ListPersonsQuery,
    ListPersonsQueryVariables,
    ListPersonsProps<TChildProps>
  >(ListPersonsDocument, {
    alias: "listPersons",
    ...operationOptions
  });
}

export function useListPersonsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListPersonsQuery,
    ListPersonsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ListPersonsQuery, ListPersonsQueryVariables>(
    ListPersonsDocument,
    baseOptions
  );
}
export function useListPersonsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListPersonsQuery,
    ListPersonsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ListPersonsQuery,
    ListPersonsQueryVariables
  >(ListPersonsDocument, baseOptions);
}

export type ListPersonsQueryHookResult = ReturnType<typeof useListPersonsQuery>;
export type ListPersonsQueryResult = ApolloReactCommon.QueryResult<
  ListPersonsQuery,
  ListPersonsQueryVariables
>;
export const PaginatePersonsDocument = gql`
  query PaginatePersons($filter: String, $pageIndex: Int!, $pageSize: Int!) {
    paginatePersons(
      filter: $filter
      pageIndex: $pageIndex
      pageSize: $pageSize
    ) {
      persons {
        id
        name
        age
        gender
      }
      count
      pageIndex
      pageSize
    }
  }
`;
export type PaginatePersonsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >,
  "query"
> &
  (
    | { variables: PaginatePersonsQueryVariables; skip?: boolean }
    | { skip: boolean });

export const PaginatePersonsComponent = (
  props: PaginatePersonsComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >
    query={PaginatePersonsDocument}
    {...props}
  />
);

export type PaginatePersonsProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  PaginatePersonsQuery,
  PaginatePersonsQueryVariables
> &
  TChildProps;
export function withPaginatePersons<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables,
    PaginatePersonsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables,
    PaginatePersonsProps<TChildProps>
  >(PaginatePersonsDocument, {
    alias: "paginatePersons",
    ...operationOptions
  });
}

export function usePaginatePersonsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >(PaginatePersonsDocument, baseOptions);
}
export function usePaginatePersonsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PaginatePersonsQuery,
    PaginatePersonsQueryVariables
  >(PaginatePersonsDocument, baseOptions);
}

export type PaginatePersonsQueryHookResult = ReturnType<
  typeof usePaginatePersonsQuery
>;
export type PaginatePersonsQueryResult = ApolloReactCommon.QueryResult<
  PaginatePersonsQuery,
  PaginatePersonsQueryVariables
>;
export const UpdatePersonDocument = gql`
  mutation UpdatePerson(
    $id: Int!
    $name: String!
    $age: Int!
    $gender: PersonGender!
  ) {
    updatePerson(input: { id: $id, name: $name, age: $age, gender: $gender }) {
      id
      name
      age
      gender
    }
  }
`;
export type UpdatePersonMutationFn = ApolloReactCommon.MutationFunction<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>;
export type UpdatePersonComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >,
  "mutation"
>;

export const UpdatePersonComponent = (props: UpdatePersonComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >
    mutation={UpdatePersonDocument}
    {...props}
  />
);

export type UpdatePersonProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
> &
  TChildProps;
export function withUpdatePerson<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdatePersonMutation,
    UpdatePersonMutationVariables,
    UpdatePersonProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdatePersonMutation,
    UpdatePersonMutationVariables,
    UpdatePersonProps<TChildProps>
  >(UpdatePersonDocument, {
    alias: "updatePerson",
    ...operationOptions
  });
}

export function useUpdatePersonMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >(UpdatePersonDocument, baseOptions);
}
export type UpdatePersonMutationHookResult = ReturnType<
  typeof useUpdatePersonMutation
>;
export type UpdatePersonMutationResult = ApolloReactCommon.MutationResult<
  UpdatePersonMutation
>;
export type UpdatePersonMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>;
