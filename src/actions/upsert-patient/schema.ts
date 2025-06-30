import { z } from 'zod';

export const PatientSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phoneNumber: z.string().min(1, 'Telefone é obrigatório'),
  sex: z.enum(['male', 'female'], {
    required_error: 'Sexo é obrigatório',
  }),
}); 

export type PatientSchema = z.infer<typeof PatientSchema>;