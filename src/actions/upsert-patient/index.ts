"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

import { PatientSchema } from "./schema";

export const upsertPatient = actionClient
  .schema(PatientSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    //verificar si el usuario esta logado
    if (!session?.user) {
      throw new Error("Usuario no autorizado");
    }
    //verificar si usuario tiene clinica
    if (!session?.user.clinic?.id) {
      throw new Error("Clínica no encontrada");
    }

    await db
      .insert(patientsTable)  
      .values({
        ...parsedInput,
        clinicId: session.user.clinic.id,
      })
      .onConflictDoUpdate({
        target: [patientsTable.id],
        set: {
          ...parsedInput,
          updatedAt: new Date(),
        },
      });
    revalidatePath("/patients");
  });
