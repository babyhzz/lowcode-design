/*
  Warnings:

  - Made the column `createdBy` on table `Permission` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Permission` MODIFY `createdBy` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
