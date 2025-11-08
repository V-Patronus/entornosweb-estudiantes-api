import { Module } from '@nestjs/common';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EstudianteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
