/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe<T extends ZodSchema> implements PipeTransform {
  constructor(private schema: T) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (err: any) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Validación fallida',
        errors: err.errors,
      });
    }
  }
}
