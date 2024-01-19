import { ApiProperty } from '@nestjs/swagger';

import * as studentDto from 'src/modules/student/dto'; 

export class ResponseGenericDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  operation: string;

  @ApiProperty()
  data: studentDto.ResponseFindStudentDto;
}
