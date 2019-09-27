import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Person } from "./Person";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Article {
  /////////////
  // Columns //
  /////////////

  @Field(type => ID, { name: 'id' })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(type => Int)
  @Column()
  authorId!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  createdAt!: Date;

  ///////////////
  // Relations //
  ///////////////

  @Field(type => Person)
  @ManyToOne(type => Person, person => person.articles)
  @JoinColumn({ name: 'authorId' })
  author!: Person;
}