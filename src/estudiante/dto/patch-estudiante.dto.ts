import { createZodDto } from 'nestjs-zod';
import { PatchEstudianteSchema } from '../esquema/estudiante.schema';

export class PatchEstudianteDto extends createZodDto(PatchEstudianteSchema) {}
