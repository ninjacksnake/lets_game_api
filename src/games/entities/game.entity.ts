//import { publisher } from "src/publisher/entities/publisher.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class games {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    publisherId: number;

    @Column()
    tags: string;

    @Column()
    releaseDate: Date;


}
