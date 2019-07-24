import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableUserDetails1563948769492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'user_details',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'name',
                    type: 'character varying',
                    length: '200'
                },
                {
                    name: 'email',
                    type: 'character varying',
                    length: '200'
                },
                {
                    name: 'password',
                    type: 'character varying',
                    length: '200'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('user_details');
    }

}
