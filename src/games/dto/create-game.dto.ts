import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";



export class CreateGameDto {
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNumber()
    price: number;
    @IsNumber()
    publisherId: number;
    @IsNotEmpty()
    tags: string;
    @IsNotEmpty()
    releaseDate: Date;
}


