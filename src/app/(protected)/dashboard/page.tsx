import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageContainer,
  PageContent,
  PageHeaderActions,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

import { DatePicker } from "./_components/date-picker";

const DashboardPage = async () => {
  // Desda forma se optiene la sesion mediante server component asincrono
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/authentication");

  //Se optimiza desta manera porque ya fue adicionado en el modelo las clinicas del usuario.
  if (!session.user.clinic) redirect("/clinic-form");

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageHeaderContent>
          <PageHeaderTitle>Dashboard</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os pacientes da sua clínica.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <DatePicker />
        </PageHeaderActions>
      </PageHeaderContainer>
      <PageContent>
        <></>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
