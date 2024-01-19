import { ApiProperty } from "@nestjs/swagger";

export class ResponseFindStudentDto {
    @ApiProperty()
    idStudent: string

    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    information: string

    @ApiProperty()
    profileUrl: string

    @ApiProperty()
    idUniversity: string

    @ApiProperty()
    university: string

    @ApiProperty()
    idCareer: string

    @ApiProperty()
    career: string

    @ApiProperty()
    cicle: string

    @ApiProperty()
    isFirstLogin: boolean
}