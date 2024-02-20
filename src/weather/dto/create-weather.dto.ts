import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateWeatherDto {
  @IsNumber()
  temperature: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  @IsOptional()
  light?: number;

  @IsNumber()
  pressure: number;

  @IsDateString()
  @IsOptional()
  date?: string;
}
