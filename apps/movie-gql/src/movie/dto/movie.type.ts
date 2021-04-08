import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true })
  detail: string;
}
