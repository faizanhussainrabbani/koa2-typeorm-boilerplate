import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_details')
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    @Column({
        type: 'character varying',
    })
    public email: string;

    @Column({
        type: 'character varying',
    })
    public password: string;
}
