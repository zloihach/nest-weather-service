import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createWeatherDto: CreateWeatherDto) {
    return this.weatherService.createWeatherData(createWeatherDto);
  }

  @Get()
  async findAll() {
    return this.weatherService.getWeatherData();
  }
}
