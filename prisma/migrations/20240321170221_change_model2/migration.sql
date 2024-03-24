/*
  Warnings:

  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `incidents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `internet_plan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tv_plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'TO_CONFIRM', 'FOR_VIEW', 'TO_CONNECT', 'INCIDENT', 'COMPLETE');

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_internetPlanId_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_tvPlanId_fkey";

-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_clientId_fkey";

-- DropTable
DROP TABLE "clients";

-- DropTable
DROP TABLE "incidents";

-- DropTable
DROP TABLE "internet_plan";

-- DropTable
DROP TABLE "tv_plan";

-- DropEnum
DROP TYPE "status";

-- CreateTable
CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tvPlanId" INTEGER NOT NULL,
    "internetPlanId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternetPlan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "InternetPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvPlan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "TvPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incidents" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "status" VARCHAR(10) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Incidents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "TvPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_internetPlanId_fkey" FOREIGN KEY ("internetPlanId") REFERENCES "InternetPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incidents" ADD CONSTRAINT "Incidents_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
