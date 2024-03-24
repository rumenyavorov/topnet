/*
  Warnings:

  - You are about to drop the column `plan` on the `clients` table. All the data in the column will be lost.
  - Added the required column `internetPlanId` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tvPlanId` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `clients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `clientId` to the `incidents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('NEW', 'TO_CONFIRM', 'FOR_VIEW', 'TO_CONNECT', 'INCIDENT', 'COMPLETE');

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "plan",
ADD COLUMN     "internetPlanId" INTEGER NOT NULL,
ADD COLUMN     "tvPlanId" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "status" NOT NULL;

-- AlterTable
ALTER TABLE "incidents" ADD COLUMN     "clientId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "internet_plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "internet_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tv_plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "tv_plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "tv_plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_internetPlanId_fkey" FOREIGN KEY ("internetPlanId") REFERENCES "internet_plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
