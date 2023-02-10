-- CreateTable
CREATE TABLE `product` (
    `product_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(255) NOT NULL,
    `product_type` INTEGER NOT NULL,
    `product_stock` INTEGER NOT NULL DEFAULT 0,
    `last_updated` DATETIME(0) NOT NULL,
    `last_updated_by` INTEGER NULL,
    `product_desc` VARCHAR(255) NOT NULL,
    `product_cat_name` VARCHAR(255) NULL,
    `product_brand` VARCHAR(255) NULL,

    INDEX `fk_last_by_idx`(`last_updated_by`),
    INDEX `fk_type_idx`(`product_type`),
    PRIMARY KEY (`product_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_category` (
    `category_ID` INTEGER NOT NULL,
    `category_name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `category_id_UNIQUE`(`category_ID`),
    PRIMARY KEY (`category_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(255) NOT NULL,
    `user_type` INTEGER NOT NULL,
    `user_pas` VARCHAR(255) NOT NULL,

    INDEX `fk_utype_idx`(`user_type`),
    PRIMARY KEY (`user_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_category` (
    `utype_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `utype_title` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `utype_title_UNIQUE`(`utype_title`),
    PRIMARY KEY (`utype_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_last_by` FOREIGN KEY (`last_updated_by`) REFERENCES `user`(`user_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_type` FOREIGN KEY (`product_type`) REFERENCES `product_category`(`category_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_utype` FOREIGN KEY (`user_type`) REFERENCES `user_category`(`utype_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
