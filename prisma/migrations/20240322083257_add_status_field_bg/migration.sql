/*
  Warnings:

  - Added the required column `nameBg` to the `statuses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "statuses" ADD COLUMN     "nameBg" VARCHAR(255) NOT NULL;
