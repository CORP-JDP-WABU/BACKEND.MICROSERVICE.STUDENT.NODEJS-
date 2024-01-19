import { ConflictException } from '@nestjs/common';

export class NotExistStudentCustomException extends ConflictException {
  constructor() {
    super(`El usuario ingresado no existe`);
  }
}
