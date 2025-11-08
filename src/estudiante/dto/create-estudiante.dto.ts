import { createZodDto } from 'nestjs-zod';
import { CreateEstudianteSchema } from '../esquema/estudiante.schema';

export class CreateEstudianteDto extends createZodDto(CreateEstudianteSchema) {}
