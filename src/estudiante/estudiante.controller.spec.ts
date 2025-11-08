import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Query,
  Param,
  Body,
  NotFoundException,
  UsePipes,
} from '@nestjs/common';
import { EstudianteService } from './estudiante.service';

/* DTOs  */
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PatchEstudianteDto } from './dto/patch-estudiante.dto';

/* Esquemas Zod para los pipes */
import {
  CreateEstudianteSchema,
  UpdateEstudianteSchema,
  PatchEstudianteSchema,
} from './esquema/estudiante.schema';

/* Pipe */
import { ZodValidationPipe } from './pipes/zod-validation.pipe';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll(
    @Query('nombre') nombre?: string,
    @Query('apellido') apellido?: string,
  ) {
    return this.estudianteService.findAll(nombre, apellido);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const estudiante = this.estudianteService.findOne(+id);
    if (!estudiante) throw new NotFoundException('Estudiante no encontrado');
    return estudiante;
  }

  /* ---------- POST ---------- */
  @Post()
  @UsePipes(new ZodValidationPipe(CreateEstudianteSchema))
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  /* ---------- PUT (reemplaza todo) ---------- */
  @Put(':id')
  @UsePipes(new ZodValidationPipe(UpdateEstudianteSchema))
  update(
    @Param('id') id: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    const updated = this.estudianteService.update(+id, updateEstudianteDto);
    if (!updated) throw new NotFoundException('Estudiante no encontrado');
    return updated;
  }

  /* ---------- PATCH (parcial) ---------- */
  @Patch(':id')
  @UsePipes(new ZodValidationPipe(PatchEstudianteSchema))
  patch(
    @Param('id') id: string,
    @Body() patchEstudianteDto: PatchEstudianteDto,
  ) {
    const patched = this.estudianteService.patch(+id, patchEstudianteDto);
    if (!patched) throw new NotFoundException('Estudiante no encontrado');
    return patched;
  }

  /* ---------- DELETE ---------- */
  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.estudianteService.remove(+id);
    if (!deleted) throw new NotFoundException('Estudiante no encontrado');
    return { message: `Estudiante con id ${id} eliminado correctamente.` };
  }
}
