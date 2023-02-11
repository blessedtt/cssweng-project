-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `fk_last_by`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `fk_type`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `fk_utype`;

-- AlterTable
ALTER TABLE `product` MODIFY `product_type` INTEGER NULL;

-- AlterTable
ALTER TABLE `product_category` MODIFY `category_ID` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_last_by` FOREIGN KEY (`last_updated_by`) REFERENCES `user`(`user_ID`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_type` FOREIGN KEY (`product_type`) REFERENCES `product_category`(`category_ID`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_utype` FOREIGN KEY (`user_type`) REFERENCES `user_category`(`utype_ID`) ON DELETE CASCADE ON UPDATE NO ACTION;
