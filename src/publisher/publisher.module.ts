import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { publisher } from './entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([publisher])],
  controllers: [PublisherController],
  providers: [PublisherService]
})
export class PublisherModule {}