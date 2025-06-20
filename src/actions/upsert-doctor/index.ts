import { UpsertDoctorSchema, upsertDoctorSchema } from "./schema";

export const upsertDoctor = async (data: UpsertDoctorSchema) =>{
    upsertDoctorSchema.parse(data)
}