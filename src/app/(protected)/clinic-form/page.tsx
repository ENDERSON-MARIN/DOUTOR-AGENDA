
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./_components/form";

const ClinicFormPage = () => {
  return (
    <div className="">
      <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Clinica</DialogTitle>
              <DialogDescription>
                Adicione uma clinica para continuar.
              </DialogDescription>
            </DialogHeader>
            <ClinicForm/>
          </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;
