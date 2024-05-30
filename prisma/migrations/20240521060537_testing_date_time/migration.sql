-- DropIndex
DROP INDEX "Todo_dateTime_key";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "dateTime" SET DATA TYPE TEXT;
