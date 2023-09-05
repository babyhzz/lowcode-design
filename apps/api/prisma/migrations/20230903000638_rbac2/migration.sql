-- AlterTable
ALTER TABLE `Permission` MODIFY `createdBy` VARCHAR(191) NULL,
    MODIFY `updatedBy` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Role` MODIFY `createdBy` VARCHAR(191) NULL,
    MODIFY `updatedBy` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `createdBy` VARCHAR(191) NULL,
    MODIFY `updatedBy` VARCHAR(191) NULL;
