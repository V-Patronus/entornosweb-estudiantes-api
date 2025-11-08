import { z } from 'zod';

/* ---------- Esquemas de ENTRADA (sin id) ---------- */
export const CreateEstudianteSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  edad: z
    .number()
    .int()
    .min(5, 'Debe ser mayor de 5')
    .max(110, 'Debe ser menor de 110'),
});

export const UpdateEstudianteSchema = CreateEstudianteSchema.partial(); // partial para PUT
export const PatchEstudianteSchema = CreateEstudianteSchema.partial(); // partial para PATCH

/* ---------- Esquema de SALIDA / BD (con id) ---------- */
export const EstudianteDBSchema = CreateEstudianteSchema.extend({
  id: z.number().int().positive(),
});

/* ---------- Tipos inferidos ---------- */
export type CreateEstudianteType = z.infer<typeof CreateEstudianteSchema>;
export type UpdateEstudianteType = z.infer<typeof UpdateEstudianteSchema>;
export type PatchEstudianteType = z.infer<typeof PatchEstudianteSchema>;
export type EstudianteDBType = z.infer<typeof EstudianteDBSchema>;
