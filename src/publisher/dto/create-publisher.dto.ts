import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreatePublisherDto {
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsNumberString()
    siret: number;
    @IsNotEmpty()
    phone: string
}
