/*
  Warnings:

  - You are about to drop the column `redirectUrl` on the `Permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `redirectUrl`,
    ADD COLUMN `redirect` VARCHAR(191) NULL;
