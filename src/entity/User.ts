import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import Country from "./Country";


@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    created_at: Date;

    @ManyToOne(() => Country)
    @JoinColumn({ name: "country_code" })
    country: Country;

    @Column()
    password: string;

    @Column()
    email: string;
}
