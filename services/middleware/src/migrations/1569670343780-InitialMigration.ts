import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1569670343780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `person` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `age` int NOT NULL, `gender` enum ('0', '1', '2') NOT NULL DEFAULT '2', PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `article` (`id` int NOT NULL AUTO_INCREMENT, `authorId` int NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `article` ADD CONSTRAINT `FK_a9c5f4ec6cceb1604b4a3c84c87` FOREIGN KEY (`authorId`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `article` DROP FOREIGN KEY `FK_a9c5f4ec6cceb1604b4a3c84c87`", undefined);
        await queryRunner.query("DROP TABLE `article`", undefined);
        await queryRunner.query("DROP TABLE `person`", undefined);
    }

}
