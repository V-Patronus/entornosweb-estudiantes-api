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
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { ZodValidationPipe } from 'nestjs-zod';
import { PatchEstudianteDto } from './dto/patch-estudiante.dto';
import { PatchEstudianteSchema } from './esquema/estudiante.schema';

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

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    const updated = this.estudianteService.update(+id, updateEstudianteDto);
    if (!updated) throw new NotFoundException('Estudiante no encontrado');
    return updated;
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(PatchEstudianteSchema))
  patch(
    @Param('id') id: string,
    @Body() patchEstudianteDto: PatchEstudianteDto, // ← sin Partial
  ) {
    const patched = this.estudianteService.patch(+id, patchEstudianteDto);
    if (!patched) throw new NotFoundException('Estudiante no encontrado');
    return patched;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.estudianteService.remove(+id);
    if (!deleted) throw new NotFoundException('Estudiante no encontrado');
    return { message: `Estudiante con id ${id} eliminado correctamente.` };
  }
}
