import { publisher } from "src/publisher/entities/publisher.entity";


export class CreateGameDto {
    id: number;
    title: string;
    price: number;
    publisherid: number;
    tags: string;
    releaseDate: Date;
    
    // constructor(id: number, title: string, price: number, publisherid: number, tags: string, releaseDate: Date) {
    //     this.id = id;
    //     this.title = title;
    //     this.price = price;
    //     this.publisherid = publisherid;
    //     this.tags = tags;
    //     this.releaseDate = releaseDate;
    // }
}


