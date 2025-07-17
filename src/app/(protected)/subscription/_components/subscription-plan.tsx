import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SubscriptionPlanProps {
  active?: boolean;
}

export default function SubscriptionPlan({
  active = false,
}: SubscriptionPlanProps) {
  const features = [
    "Cadastro de até 3 médicos",
    "Agendamentos ilimitados",
    "Métricas básicas",
    "Cadastro de pacientes",
    "Confirmação manual",
    "Suporte via e-mail",
    "Suporte via WhatsApp",
  ];

  return (
    <Card className="mt-10 w-[350px] max-w-sm">
      <CardHeader className="pb-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Essential Plan</h2>
          {active && (
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
            >
              Atual
            </Badge>
          )}
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Para profissionais autônomos ou pequenas clínicas
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900">R$59</span>
          <span className="text-gray-500">/ mês</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
          variant="outline"
        >
          {active ? "Gerenciar Assinatura" : "Fazer Assinatura"}
        </Button>
      </CardContent>
    </Card>
  );
}
