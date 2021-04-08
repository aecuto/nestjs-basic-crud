import { Field, Float, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class MovieUpdate {
  @Field()
  @MaxLength(30)
  @IsOptional()
  name?: string;

  @Field(() => Float)
  @IsOptional()
  price?: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  detail?: string;
}
