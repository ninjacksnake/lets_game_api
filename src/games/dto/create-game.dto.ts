import {  IsNotEmpty, IsNumber } from "class-validator";
import { Publisher } from "src/publisher/entities/publisher.entity";


export class CreateGameDto {
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNumber()
    price: number;
    @IsNotEmpty()
    publisher: Publisher;
    @IsNotEmpty()
    tags: string[];
    @IsNotEmpty()
    releaseDate: Date;
}


