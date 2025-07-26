import { headers } from "next/headers";

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
      <SubscriptionPlan
            className="w-[350px]"
            active={session!.user.plan === "essential"}
            userEmail={session!.user.email}
          />
      </PageContent>
    </PageContainer>
  );
}
