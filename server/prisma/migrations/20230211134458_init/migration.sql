-- CreateTable
CREATE TABLE `product` (
    `product_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` INTEGER NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `last_updated` DATETIME(0) NOT NULL,
    `last_updated_by` INTEGER NULL,
    `desc` VARCHAR(255) NOT NULL,
    `cat_name` VARCHAR(255) NULL,
    `brand` VARCHAR(255) NULL,
    `sales` INTEGER NOT NULL,
    `revenue` INTEGER NOT NULL,
    `avg_value` INTEGER NOT NULL,

    INDEX `fk_last_by_idx`(`last_updated_by`),
    INDEX `fk_type_idx`(`type`),
    PRIMARY KEY (`product_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_category` (
    `category_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `category_id_UNIQUE`(`category_ID`),
    UNIQUE INDEX `category_name_UNIQUE`(`name`),
    PRIMARY KEY (`category_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL,
    `pass` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `fullname` VARCHAR(45) NULL,

    UNIQUE INDEX `user_email_UNIQUE`(`email`),
    INDEX `fk_utype_idx`(`type`),
    PRIMARY KEY (`user_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_category` (
    `utype_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `utype_title` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `utype_title_UNIQUE`(`utype_title`),
    PRIMARY KEY (`utype_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `sid` VARCHAR(191) NOT NULL,
    `data` TEXT NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `session_sid_key`(`sid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_last_by` FOREIGN KEY (`last_updated_by`) REFERENCES `user`(`user_ID`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_type` FOREIGN KEY (`type`) REFERENCES `product_category`(`category_ID`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_utype` FOREIGN KEY (`type`) REFERENCES `user_category`(`utype_ID`) ON DELETE CASCADE ON UPDATE NO ACTION;
