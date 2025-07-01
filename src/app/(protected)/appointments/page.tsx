import { headers } from "next/headers";

import { DataTable } from "@/components/ui/data-table";
import {
  PageContainer,
  PageContent,
  PageHeaderActions,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { db } from "@/db";
import { auth } from "@/lib/auth";

import { AddAppointmentButton } from "./_components/add-appointment-button";
import { appointmentsTableColumns } from "./_components/table-columns";

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

  const appointments = await db.query.appointmentsTable.findMany({
    where: (appointments, { eq }) => eq(appointments.clinicId, session.user.clinic!.id),
    with: {
      doctor: true,
      patient: true,
    },
  });

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageHeaderContent>
          <PageHeaderTitle>Agendamentos</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os agendamentos da sua clínica.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <AddAppointmentButton doctors={doctors} patients={patients} />
        </PageHeaderActions>
      </PageHeaderContainer>
      <PageContent>
        <DataTable columns={appointmentsTableColumns} data={appointments} />
      </PageContent>
    </PageContainer>
  );
} 