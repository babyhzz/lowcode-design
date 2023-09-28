/*
  Warnings:

  - You are about to drop the column `url` on the `Permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `url`,
    ADD COLUMN `path` VARCHAR(191) NULL;
