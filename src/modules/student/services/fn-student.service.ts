import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as schemas from 'src/common/schemas';
import * as dto from 'src/common/dto';
import * as exception from 'src/exception';
import * as studentDto from '../dto';

@Injectable()
export class FnStudentService {
  private logger = new Logger(FnStudentService.name);

  constructor(
    @InjectModel(schemas.Students.name)
    private readonly studentModel: mongoose.Model<schemas.StudentsDocument>,
  ) {}

  async execute(idStudent: string, token: string) {
    const student = await this.studentModel.findById(idStudent);
    const result = await this.studentModel.findOne({});
    this.logger.debug(JSON.stringify(result));
    if (!student) {
      throw new exception.NotExistStudentCustomException();
    }

    if (!student.isFirstLogin) {
      await this.studentModel.findByIdAndUpdate(student.id, {
        $set: {
          isFirstLogin: true,
        },
      });
    }

    return <dto.ResponseGenericDto>{
      message: 'Processo exitoso',
      operation: `::${FnStudentService.name}::execute`,
      data: <studentDto.ResponseFindStudentDto>{
        idStudent: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        information: student.information,
        profileUrl: student.profileUrl,
        idCareer: !student.career ? "" : student.career._id,
        career: !student.career ? "" : student.career.name,
        idUniversity: student.university._id.toString(),
        university: student.university.name,
        cicle: student.cicleName,
        isFirstLogin: student.isFirstLogin,
      },
    };
  }
}
