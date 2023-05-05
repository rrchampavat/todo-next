/*
  Warnings:

  - Made the column `updated_at` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "updated_at" SET NOT NULL;
