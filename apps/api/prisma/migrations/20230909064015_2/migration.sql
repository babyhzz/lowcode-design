-- AlterTable
ALTER TABLE `Permission` ADD COLUMN `redirectUrl` VARCHAR(191) NULL,
    MODIFY `renderParams` TEXT NULL,
    MODIFY `renderType` TINYINT UNSIGNED NULL;
