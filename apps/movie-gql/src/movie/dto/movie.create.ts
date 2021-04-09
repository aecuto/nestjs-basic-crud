import { Field, Float, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';

@InputType()
export class MovieCreate {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(100)
  detail?: string;
}
