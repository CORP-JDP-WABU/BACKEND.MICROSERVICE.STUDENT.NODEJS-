import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import * as schemas from 'src/common/schemas';
import * as services from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
            name: schemas.Students.name,
            schema: schemas.StudentsSchema,
        },
    ]),
  ],
  controllers: [StudentController],
  providers: [services.FnStudentService],
})
export class StudentModule {}
