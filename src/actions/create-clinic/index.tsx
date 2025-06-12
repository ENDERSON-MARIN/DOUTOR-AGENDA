"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export const createClinic = async (name: string) => {
    // Verifica la sesión del usuario para proteger la server action; solo los usuarios autenticados pueden acceder a este recurso.
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  // Inserta el nombre de la clínica en la tabla y obtiene el registro recién creado.
  const [clinic] = await db.insert(clinicsTable).values({ name }).returning();
  // Asocia la clínica creada con el usuario autenticado.
  await db.insert(usersToClinicsTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });
  // Redirige al usuario al dashboard.
  redirect("/dashboard");
};
