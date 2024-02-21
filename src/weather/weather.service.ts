import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { WeatherData } from '@prisma/client';

@Injectable()
export class WeatherService {
  constructor(private readonly db: DbService) {}

  async createWeatherData(
    createWeatherDto: CreateWeatherDto,
  ): Promise<WeatherData> {
    return this.db.weatherData.create({
      data: {
        temperature: createWeatherDto.temperature,
        humidity: createWeatherDto.humidity,
        light: createWeatherDto.light,
        pressure: createWeatherDto.pressure,
        date: createWeatherDto.date
          ? new Date(createWeatherDto.date)
          : new Date(),
      },
    });
  }

  async getWeatherData(): Promise<WeatherData[]> {
    return this.db.weatherData.findMany({
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.db.weatherData.findUnique({
      where: { id: Number(id) },
    });
  }
}
