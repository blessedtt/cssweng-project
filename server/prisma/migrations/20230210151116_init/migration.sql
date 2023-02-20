/*
  Warnings:

  - A unique constraint covering the columns `[category_name]` on the table `product_category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `category_name_UNIQUE` ON `product_category`(`category_name`);
