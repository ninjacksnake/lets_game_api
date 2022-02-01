import { HttpException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryBuilder, QueryRunner, Repository } from 'typeorm';
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
    
    const newGame = this.gameRepository.create(createGameDto);
    this.gameRepository.save(newGame);

  }

  findAll() {
    return this.gameRepository.find();
  }
  
/**
 * this method select the information about the game publisher 
 * @param title : string 
 * @returns: Promise
 *
 */
  async findWithPublisher(title?: string){
    const queryRunner = await this.connection.createQueryRunner(); 
    try {
      return await this.connection
        .createQueryBuilder(games, 'games', queryRunner)
        .select('games.title', 'game_title')
        .addSelect('p.name', 'publisher_name')
        .addSelect('p.siret', 'publisher_siret')
        .addSelect('p.phone', 'publisher_phone')
        .leftJoin('publisher','p' , 'p.id = games.publisherId')
        .where(`games.title = '${title}'`)
        .getRawMany();     
    } catch (error) {
      return ({
        error: error.message,
        code: error.code,
        message: "unexpected error occurred."
      })
      
    }
  }
 
  /**
  * function to delete games older than 18 months
  * @param queryRunner : queryRunner
  * @returns : Promise
  */
  async delProcess(queryRunner: QueryRunner):Promise<any>{ 
   try {
     return await this.connection
     .createQueryBuilder(queryRunner)
     .delete()
     .from(games)
     .where('timestampdiff( month, releaseDate, sysdate() ) > 18')
     .execute();   
   } catch (error) {
    return ({
      error: error.message,
      code: error.code,
      message: "unexpected error occurred."
    })
   }
  }
  
  /**
  * function to update the game price wich releasedate is between 12 and 18 months
  * @param queryRunner : queryRunner
  * @returns : Promise
  */
  async updtProcess(queryRunner: QueryRunner):Promise<any>{ 
   try {
     return await this.connection
     .createQueryBuilder(queryRunner)
     .update(games)
     .set({
       price: () => 'price - price  * (0.20)',
     })
     .where('timestampdiff( month, releaseDate, sysdate() ) between 12 and 18')
     .execute();    
   } catch (error) {
    return ({
      error: error.message,
      code: error.code,
      message: "unexpected error occurred."
    })
   }
  }

   /**
  * function to update the price (-20%) to the games wich releasedate is between 12 and 18 months
  * @param queryRunner : queryRunner
  * @returns : Promise
  */
    async cleanUpdateProcess(){
    let result: string;
     const queryRunner = await this.connection.createQueryRunner();    
      try {
        await this.delProcess(queryRunner);
        await this.updtProcess(queryRunner);
        result ='Task Finished';
      } catch (error) {
        console.log(error);
        result ='Error, Task not finished';
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
