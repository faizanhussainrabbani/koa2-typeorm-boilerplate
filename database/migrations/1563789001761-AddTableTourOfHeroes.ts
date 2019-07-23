import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableTourOfHeroes1563789001761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'heroes',
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
                    length: '100'
                },
                {
                    name: 'isActive',
                    type: 'boolean',
                    default: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('heroes');
    }

}
