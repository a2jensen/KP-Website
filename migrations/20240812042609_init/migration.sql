-- CreateTable
CREATE TABLE "QuarterDates" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuarterDates_pkey" PRIMARY KEY ("id")
);
