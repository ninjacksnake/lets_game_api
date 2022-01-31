import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {games} from './entities/game.entity'

@Injectable()
export class GamesService {

  constructor(
    @InjectRepository(games)
    private gameRepository: Repository<games>,
    @InjectConnection() private readonly connection: Connection
  ){}

  create(createGameDto: CreateGameDto) {
    console.log(createGameDto);
    const newGame = this.gameRepository.create(createGameDto);
    this.gameRepository.save(newGame);

  }

  findAll() {
    return this.gameRepository.find();
  }

  async findWithPublisher(title?: string){
      const rawData = await this.connection.query(
        `SELECT g.title as Game_Title, p.name, p.siret, p.phone FROM gamesdb.games g 
        left join gamesdb.publisher p 
        on g.publisherId = p.id
        WHERE title = '${title.toString()}';`
      )
    return rawData;
  }

  async cleanUpdateProcess(){
    let result: string;
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.query(`delete from gamesdb.games where timestampdiff( month, releaseDate, sysdate() ) > 18;`);
      await queryRunner.query(`update gamesdb.games set price = price - price * (0.20) where timestampdiff( month, releaseDate, sysdate()) between 12 and <18;`);

      await queryRunner.commitTransaction();
      result ='Task Finished';
    } catch (error) {
      console.log(error)
      await queryRunner.rollbackTransaction()
      result ='Error, Task not finished';
    }finally{
      await queryRunner.release()
    }
    return result;
  }

  findOne(id: number) {
    return this.gameRepository.findOne(id);;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update(id, updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }
  
}
