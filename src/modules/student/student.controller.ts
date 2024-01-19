import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import * as services from './services';
import * as response from 'src/common/dto';
import * as exception from 'src/exception';

@Controller('student/v1.0')
@ApiTags('STUDENT')
export class StudentController {
  constructor(
    private readonly fnStudentService: services.FnStudentService,
  ) {}

  @UseGuards(ThrottlerGuard)
  @Throttle()
  @Get('/:idStudent')
  @ApiCreatedResponse({
    description: 'The find student has been successfully.',
    type: response.ResponseGenericDto,
  })
  @ApiConflictResponse({
    description: 'The find student has been failed by conflict.',
  })
  @ApiInternalServerErrorResponse({
    description: 'The find student has been failed by internal error.',
  })
  findStudentById(@Param("idStudent") idStudent: string): Promise<response.ResponseGenericDto> {
    return this.fnStudentService.execute(idStudent, idStudent);
  }
}
