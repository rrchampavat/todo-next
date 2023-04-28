-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "updated_at" DROP NOT NULL;
