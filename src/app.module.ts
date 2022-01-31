import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherModule } from './publisher/publisher.module';
import { games } from './games/entities/game.entity';
import { getConnectionOptions } from 'typeorm';
import { publisher } from './publisher/entities/publisher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "Michael",
      password: "",
      database: "Gamesdb",
      entities: [games, publisher],
      synchronize: false
    }),
    GamesModule,
    PublisherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
