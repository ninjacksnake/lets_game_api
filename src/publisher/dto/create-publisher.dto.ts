import { IsNotEmpty, IsNumberString } from "class-validator";
import { games } from "src/games/entities/game.entity";

export class CreatePublisherDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsNumberString()
    siret: number;
   
    @IsNotEmpty()
    phone: string;
  
}
