import { Publisher } from "src/publisher/entities/publisher.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";


@Entity()
export class games {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @ManyToOne(()=> Publisher, publisher => publisher.id)
    @JoinColumn({name: 'publisherId'})
    publisher:  Publisher ;

    @Column("simple-array")
    tags: string[];

    @Column()
    releaseDate: Date;


}
