/*
  Warnings:

  - You are about to drop the column `action` on the `Permission` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `Permission` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `name` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `action`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `type` INTEGER NOT NULL;
