/*
  Warnings:

  - Added the required column `renderParams` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `renderType` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Permission` ADD COLUMN `renderParams` TEXT NOT NULL,
    ADD COLUMN `renderType` TINYINT UNSIGNED NOT NULL;
