"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { doctorsTable, patientsTable } from "@/db/schema";

import { UpsertAppointmentForm } from './upsert-appointment-form';



interface AddAppointmentButtonProps {
  doctors: typeof doctorsTable.$inferSelect[];
  patients: typeof patientsTable.$inferSelect[];
}

export function AddAppointmentButton({
  doctors,
  patients,
}: AddAppointmentButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Novo Agendamento</Button>
      </DialogTrigger>
      <UpsertAppointmentForm
        doctors={doctors}
        patients={patients}
        onSuccess={() => setOpen(false)}
      />
    </Dialog>
  );
} 