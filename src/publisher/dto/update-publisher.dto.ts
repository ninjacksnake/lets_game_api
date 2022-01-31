import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumberString } from 'class-validator';
import { CreatePublisherDto } from './create-publisher.dto';

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {
 
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
