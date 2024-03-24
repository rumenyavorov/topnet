/*
  Warnings:

  - You are about to drop the column `internetPlanId` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `tvPlanId` on the `Clients` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `InternetPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `TvPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_internetPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_tvPlanId_fkey";

-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "internetPlanId",
DROP COLUMN "tvPlanId";

-- AlterTable
ALTER TABLE "InternetPlan" ADD COLUMN     "clientId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TvPlan" ADD COLUMN     "clientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "InternetPlan" ADD CONSTRAINT "InternetPlan_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TvPlan" ADD CONSTRAINT "TvPlan_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
