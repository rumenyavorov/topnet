/*
  Warnings:

  - Made the column `firstName` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plan` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `incidents` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `incidents` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "plan" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "incidents" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
