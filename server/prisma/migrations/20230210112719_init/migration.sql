/*
  Warnings:

  - You are about to drop the column `user_pas` on the `user` table. All the data in the column will be lost.
  - Added the required column `user_pass` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_pas`,
    ADD COLUMN `user_pass` VARCHAR(255) NOT NULL;
