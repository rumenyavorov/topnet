/*
  Warnings:

  - You are about to drop the column `clientId` on the `InternetPlan` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `TvPlan` table. All the data in the column will be lost.
  - Added the required column `internetPlanId` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tvPlanId` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `InternetPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `InternetPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InternetPlan" DROP CONSTRAINT "InternetPlan_clientId_fkey";

-- DropForeignKey
ALTER TABLE "TvPlan" DROP CONSTRAINT "TvPlan_clientId_fkey";

-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "internetPlanId" INTEGER NOT NULL,
ADD COLUMN     "tvPlanId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "InternetPlan" DROP COLUMN "clientId",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TvPlan" DROP COLUMN "clientId";

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "TvPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_internetPlanId_fkey" FOREIGN KEY ("internetPlanId") REFERENCES "InternetPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
