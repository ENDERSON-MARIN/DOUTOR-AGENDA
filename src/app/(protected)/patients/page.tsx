import {
  PageContainer,
  PageContent,
  PageHeaderActions,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/components/ui/page-container';

import { AddPatientButton } from './_components/add-patient-button';

export default function PatientsPage() {
  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageHeaderContent>
          <PageHeaderTitle>Pacientes</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os pacientes da sua clínica.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <AddPatientButton />
        </PageHeaderActions>
      </PageHeaderContainer>
      <PageContent>
        <div>{/* TODO: Add patients list */}</div>
      </PageContent>
    </PageContainer>
  );
} 