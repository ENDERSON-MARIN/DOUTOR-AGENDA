import {
  PageContainer,
  PageContent,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { Separator } from "@/components/ui/separator";

import SubscriptionPlan from "./_components/subscription-plan";

export default function SubscriptionPage() {
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
        <SubscriptionPlan />
      </PageContent>
    </PageContainer>
  );
}
