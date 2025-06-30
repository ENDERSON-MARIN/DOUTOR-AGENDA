import { headers } from "next/headers";

import { db } from "@/db";
import { auth } from "@/lib/auth";

import { AddAppointmentButton } from "./_components/add-appointment-button";

export default async function AppointmentsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.clinic?.id) {
    throw new Error("Unauthorized");
  }

  const doctors = await db.query.doctorsTable.findMany({
    where: (doctors, { eq }) => eq(doctors.clinicId, session.user.clinic!.id),
  });

  const patients = await db.query.patientsTable.findMany({
    where: (patients, { eq }) => eq(patients.clinicId, session.user.clinic!.id),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Agendamentos</h1>
        <AddAppointmentButton doctors={doctors} patients={patients} />
      </div>
    </div>
  );
} 