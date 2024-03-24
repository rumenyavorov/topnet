/*
  Warnings:

  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Incidents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InternetPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TvPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_internetPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_tvPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Incidents" DROP CONSTRAINT "Incidents_clientId_fkey";

-- DropTable
DROP TABLE "Clients";

-- DropTable
DROP TABLE "Incidents";

-- DropTable
DROP TABLE "InternetPlan";

-- DropTable
DROP TABLE "TvPlan";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tvPlanId" INTEGER,
    "internetPlanId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statuses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,

    CONSTRAINT "statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internet_plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "speed" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "internet_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tv_plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "tv_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "status" VARCHAR(10) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "tv_plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_internetPlanId_fkey" FOREIGN KEY ("internetPlanId") REFERENCES "internet_plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
