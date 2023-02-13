-- AlterTable
ALTER TABLE `product` MODIFY `cat_name` VARCHAR(255) NULL DEFAULT CONCAT('name', ' ', 'desc'),
    MODIFY `revenue` INTEGER NULL DEFAULT 'sales' * 'sell_price',
    MODIFY `avg_value` INTEGER NULL DEFAULT 'stock' * 'sell_price';
