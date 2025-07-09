'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import UpsertPatientForm from './upsert-patient-form';



export function AddPatientButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar paciente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar paciente</DialogTitle>
        </DialogHeader>
        <UpsertPatientForm
          onSuccess={() => setIsOpen(false)}
          isOpen={isOpen}
        />
      </DialogContent>
    </Dialog>
  );
} 