-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_tvPlanId_fkey";

-- AlterTable
ALTER TABLE "Clients" ALTER COLUMN "tvPlanId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "TvPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
