import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateWeatherDto {
  @ApiProperty({ example: 25, description: 'The temperature in Celsius' })
  @IsNumber()
  temperature: number;

  @ApiProperty({ example: 80, description: 'The humidity percentage' })
  @IsNumber()
  humidity: number;

  @ApiProperty({
    example: 500,
    description: 'The light intensity in Lumens',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  light?: number;

  @ApiProperty({
    example: 1013,
    description: 'The atmospheric pressure in hPa',
  })
  @IsNumber()
  pressure: number;

  @ApiProperty({
    example: '2021-07-16T09:54:32.000Z',
    description: 'The date and time of the weather data capture',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  date?: string;
}
