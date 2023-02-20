/*
  Warnings:

  - You are about to drop the column `user_name` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_firstname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_lastname` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_name`,
    ADD COLUMN `user_email` VARCHAR(255) NOT NULL,
    ADD COLUMN `user_firstname` VARCHAR(255) NOT NULL,
    ADD COLUMN `user_fullname` VARCHAR(45) NULL,
    ADD COLUMN `user_lastname` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_email_UNIQUE` ON `user`(`user_email`);
