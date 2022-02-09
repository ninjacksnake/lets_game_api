import { PartialType } from '@nestjs/mapped-types';
import {  IsDateString, IsNotEmpty, IsNumberString } from 'class-validator';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import { CreateGameDto } from './create-game.dto';


export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    @IsNumberString()
    price: number;
    @IsNotEmpty()
    publisher: Publisher;
    tags: string[];
    @IsDateString()
    releaseDate: Date;    
}
