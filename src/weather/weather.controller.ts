import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create weather data' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The weather data has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request.' })
  async create(@Body() createWeatherDto: CreateWeatherDto) {
    return this.weatherService.createWeatherData(createWeatherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all weather data' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Weather data retrieved successfully.',
  })
  async findAll() {
    return this.weatherService.getWeatherData();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get weather data by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Weather data retrieved successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Weather data not found',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Unique identifier of the weather data',
    type: String,
  })
  async findById(@Param('id') id: string) {
    const data = await this.weatherService.findById(id);
    if (!data) {
      throw new NotFoundException(`Weather data with ID ${id} not found`);
    }
    return data;
  }
}
