import { IsNotEmpty, IsUrl, IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  name: string;

  year: Date;
  length: Date;

  @IsNotEmpty()
  storyline: string;

  @IsUrl()
  image: string;
}
