import { createZodDto } from 'nestjs-zod';
import { UpdateEstudianteSchema } from '../esquema/estudiante.schema';

export class UpdateEstudianteDto extends createZodDto(UpdateEstudianteSchema) {}
