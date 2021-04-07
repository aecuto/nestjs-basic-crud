import { Field, Float, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class MovieInput {
  @Field({ nullable: true })
  @MaxLength(30)
  name: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  detail?: string;
}
