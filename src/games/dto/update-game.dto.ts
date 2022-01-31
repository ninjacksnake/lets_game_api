import { PartialType } from '@nestjs/mapped-types';
import {  IsDateString, IsNotEmpty, IsNumberString } from 'class-validator';
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
    publisherId: number;
    tags: string;
    @IsDateString()
    releaseDate: Date;    
}
