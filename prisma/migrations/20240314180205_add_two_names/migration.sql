-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "plan" VARCHAR(255),
    "address" VARCHAR(255),
    "description" TEXT,
    "status" VARCHAR(200),

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255),
    "description" TEXT,
    "status" VARCHAR(10),

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("id")
);
