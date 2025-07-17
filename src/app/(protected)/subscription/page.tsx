import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageContainer,
  PageContent,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";

import { SubscriptionPlan } from "./_components/subscription-plan";

export default async function SubscriptionPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageHeaderContent>
          <PageHeaderTitle>Assinatura</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie a sua assinatura.
          </PageHeaderDescription>
        </PageHeaderContent>
      </PageHeaderContainer>
      <Separator />
      <PageContent>
        <SubscriptionPlan userEmail={session.user.email} />
      </PageContent>
    </PageContainer>
  );
}
