import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Article } from './Article';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { PersonGender } from '../enums/PersonGender';

@ObjectType()
@Entity()
export class Person {
  /////////////
  // Columns //
  /////////////

  @Field(type => ID, { name: 'id' })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(type => Int)
  @Column()
  age!: number;

  @Field(type => PersonGender)
  @Column({
    type: "enum",
    enum: PersonGender,
    default: PersonGender.APACHE_HELICOPTER
  })
  gender!: PersonGender;

  ///////////////
  // Relations //
  ///////////////

  @Field(type => [Article])
  @OneToMany(type => Article, article => article.author)
  articles!: Article[];
}