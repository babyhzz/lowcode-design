/*
  Warnings:

  - You are about to drop the column `renderParams` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `renderType` on the `Permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `renderParams`,
    DROP COLUMN `renderType`,
    ADD COLUMN `schemaContent` TEXT NULL,
    ADD COLUMN `schemaType` TINYINT UNSIGNED NULL;
