import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Country extends BaseEntity{

    @PrimaryGeneratedColumn()
    code: number;

    @Column()
    name: string;

    @Column()
    continent_name: string;

}
