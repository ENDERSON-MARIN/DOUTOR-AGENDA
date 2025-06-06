import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import LogoutButtom from "./components/logout-buttom";

const DashboardPage = async () => {
  // Desta forma se obtiene la sesion mediante client component, pero se recomienda mejor usar Server
  // components porque mediante el useSession carga despues de montar el componente
  // const session = authClient.useSession();

  // Desda forma se optiene la sesion mediante server component asincrono
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // console.log(session);

  if (!session?.user) {
    redirect("/authentication");
  }

  //Preciso pegar as clinicas do usuario logado
  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
      <br />
      <hr />

      <div>
        <LogoutButtom />
      </div>
    </div>
  );
};

export default DashboardPage;
