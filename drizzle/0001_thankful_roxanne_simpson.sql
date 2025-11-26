ALTER TABLE "patients" ALTER COLUMN "sex" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."patient_sex";--> statement-breakpoint
CREATE TYPE "public"."patient_sex" AS ENUM('male', 'female');--> statement-breakpoint
ALTER TABLE "patients" ALTER COLUMN "sex" SET DATA TYPE "public"."patient_sex" USING "sex"::"public"."patient_sex";--> statement-breakpoint
ALTER TABLE "appointments" ADD COLUMN "appointment_price_in_cents" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stripe_customer_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stripe_subscription_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "plan" text;