import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { get } from 'http';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll(){
    return this.gamesService.findAll();
  }
  
  @Get('cleanupdate')
  cleanProcess(){
    return this.gamesService.cleanUpdateProcess();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
    let returnValue: any ;
    console.log(isNumber(id));
    console.log(typeof(id))
    if (!isNumber(id)){
      returnValue = await this.gamesService.findWithPublisher(id);
    }else{
      returnValue = await this.gamesService.findOne(+id);
    }
   return returnValue
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
