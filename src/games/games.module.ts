import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { games } from './entities/game.entity';
import { publisher } from 'src/publisher/entities/publisher.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([games, publisher])],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
