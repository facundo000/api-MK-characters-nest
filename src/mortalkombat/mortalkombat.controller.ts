import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { MortalkombatService } from './mortalkombat.service';
import { CreateMortalkombatDto } from './dto/create-mortalkombat.dto';
import { UpdateMortalkombatDto } from './dto/update-mortalkombat.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('mortalkombat')
export class MortalkombatController {
  constructor(private readonly mortalkombatService: MortalkombatService) {}

  @Post()
  // @HttpCode( HttpStatus.OK )
  create(@Body() createMortalkombatDto: CreateMortalkombatDto) {
    return this.mortalkombatService.create(createMortalkombatDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto ) {

    return this.mortalkombatService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.mortalkombatService.findOne( term );
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateMortalkombatDto: UpdateMortalkombatDto) {
    return this.mortalkombatService.update(term, updateMortalkombatDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.mortalkombatService.remove(id);
  }
}
