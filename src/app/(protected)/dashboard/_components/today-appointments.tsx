/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Calendar } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

import { appointmentsTableColumns } from "../../appointments/_components/table-columns";

interface TodayAppointmentsProps {
  todayAppointments: {
    id: string;
    date: Date;
    appointmentPriceInCents: number;
    patient: {
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      sex: "male" | "female";
    };
    doctor: {
      id: string;
      name: string;
      specialty: string;
    };
  }[];
}

const TodayAppointments = ({ todayAppointments }: TodayAppointmentsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calendar className="text-muted-foreground" />
          <CardTitle className="text-base">Agendamentos de hoje</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={appointmentsTableColumns as any} data={todayAppointments} />
      </CardContent>
    </Card>
  );
};

export default TodayAppointments; 