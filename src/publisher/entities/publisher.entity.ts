import { games } from "src/games/entities/game.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany} from "typeorm";

@Entity('publisher')
export class publisher{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    siret: number;

    @Column()
    phone: string;
  
   



}