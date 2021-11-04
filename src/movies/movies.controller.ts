import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Post('create')
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }

  @Get('find-all')
  findMany(): Promise<Movie[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<Movie> {
    return this.service.findUnique(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
