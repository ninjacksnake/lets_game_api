import { PartialType } from '@nestjs/mapped-types';
import { publisher } from 'src/publisher/entities/publisher.entity';
import { CreateGameDto } from './create-game.dto';


export class UpdateGameDto extends PartialType(CreateGameDto) {
    id: number;
    title: string;
    price: number;
    publisherid: number;
    tags: string;
    releaseDate: Date;    
}
