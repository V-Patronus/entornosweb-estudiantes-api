/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import * as fs from 'fs';
import * as path from 'path';
import { PatchEstudianteDto } from './dto/patch-estudiante.dto';

@Injectable()
export class EstudianteService {
  private readonly dataDir = path.join(process.cwd(), 'database');
  private readonly dataPath = path.join(this.dataDir, 'estudiantes.json');

  constructor() {
    this.ensureDatabase();
  }

  private ensureDatabase(): void {
    try {
      if (!fs.existsSync(this.dataDir))
        fs.mkdirSync(this.dataDir, { recursive: true });
      if (!fs.existsSync(this.dataPath))
        fs.writeFileSync(this.dataPath, JSON.stringify([], null, 2), 'utf8');
    } catch {
      throw new InternalServerErrorException(
        'Error al inicializar la base de datos local.',
      );
    }
  }

  private readData(): Estudiante[] {
    try {
      const raw = fs.readFileSync(this.dataPath, 'utf8');
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private writeData(data: Estudiante[]): void {
    try {
      fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch {
      throw new InternalServerErrorException(
        'Error al escribir en la base de datos.',
      );
    }
  }

  findAll(nombre?: string, apellido?: string): Estudiante[] {
    let estudiantes = this.readData();

    if (nombre) {
      const n = nombre.toLowerCase();
      estudiantes = estudiantes.filter((e) =>
        e.nombre.toLowerCase().includes(n),
      );
    }

    if (apellido) {
      const a = apellido.toLowerCase();
      estudiantes = estudiantes.filter((e) =>
        e.apellido.toLowerCase().includes(a),
      );
    }

    return estudiantes;
  }

  findOne(id: number): Estudiante | null {
    return this.readData().find((e) => e.id === id) || null;
  }

  create(createEstudianteDto: CreateEstudianteDto): Estudiante {
    const estudiantes = this.readData();

    // Descartamos cualquier 'id' que haya podido venir
    const { id: _, ...payload } = createEstudianteDto as any;

    const nuevo: Estudiante = {
      id: estudiantes.length ? estudiantes[estudiantes.length - 1].id + 1 : 1,
      ...payload,
    };

    estudiantes.push(nuevo);
    this.writeData(estudiantes);
    return nuevo;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto): Estudiante | null {
    const estudiantes = this.readData();
    const index = estudiantes.findIndex((e) => e.id === id);
    if (index === -1) return null;

    const { id: _, ...rest } = updateEstudianteDto as any;
    estudiantes[index] = { ...estudiantes[index], ...rest };
    this.writeData(estudiantes);
    return estudiantes[index];
  }

  patch(id: number, patchEstudianteDto: PatchEstudianteDto): Estudiante | null {
    const estudiantes = this.readData();
    const index = estudiantes.findIndex((e) => e.id === id);
    if (index === -1) return null;

    estudiantes[index] = { ...estudiantes[index], ...patchEstudianteDto };
    this.writeData(estudiantes);
    return estudiantes[index];

  
  }

  remove(id: number): boolean {
    const estudiantes = this.readData();
    const filtrados = estudiantes.filter((e) => e.id !== id);
    if (filtrados.length === estudiantes.length) return false;
    this.writeData(filtrados);
    return true;
  }
}
