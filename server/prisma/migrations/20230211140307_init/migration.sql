/*
  Warnings:

  - Added the required column `sell_price` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `sell_price` INTEGER NOT NULL;
