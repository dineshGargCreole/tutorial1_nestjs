import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Get('flavors')
  // findAll() {
  //   return 'This action returns all coffees';
  // }

  // @Get()
  // findAll(@Query() paginationQuery) {
  //   const { limit, offset } = paginationQuery;
  //   return `This action returns all coffees with limit: ${limit}, offset: ${offset}`;
  // }

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  // @HttpCode(HttpStatus.GONE)
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    // return `This action return #${id} coffee`;
    return this.coffeesService.findOne('' + id);
  }

  // @Post()
  // create(@Body() body) {
  //   // return `This action return #${body.name} coffee`;
  //   return this.coffeesService.create(body);
  // }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   // return `This action return #${id} updated coffee`;
  //   return this.coffeesService.update(id, body);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action return #${id} remove coffee`;
    return this.coffeesService.remove(id);
  }
}
