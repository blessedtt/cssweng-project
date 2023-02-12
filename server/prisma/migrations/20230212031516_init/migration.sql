/*
  Warnings:

  - You are about to drop the column `last_updated_by` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `fk_last_by`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `last_updated_by`,
    MODIFY `sales` INTEGER NOT NULL DEFAULT 0,
    MODIFY `revenue` INTEGER NULL,
    MODIFY `avg_value` INTEGER NULL;
