import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true })
  detail?: string;
}
