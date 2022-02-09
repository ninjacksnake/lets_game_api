import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ){}

  create(createPublisherDto: CreatePublisherDto) {
    const newPublisher = this.publisherRepository.create(createPublisherDto);
    return this.publisherRepository.save(newPublisher);
  }

  findAll() {
    return this.publisherRepository.find();
  }

  findOne(id: number) {
    return  this.publisherRepository.findOne(id);
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return this.publisherRepository.update(id, updatePublisherDto);
  }

  remove(id: number) {
    return   this.publisherRepository.delete(id);
  }
}
