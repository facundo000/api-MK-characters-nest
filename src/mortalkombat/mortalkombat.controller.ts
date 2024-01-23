import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { MortalkombatService } from './mortalkombat.service';
import { CreateMortalkombatDto } from './dto/create-mortalkombat.dto';
import { UpdateMortalkombatDto } from './dto/update-mortalkombat.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('mortalkombat')
export class MortalkombatController {
  constructor(private readonly mortalkombatService: MortalkombatService) {}

  @Post()
  // @HttpCode( HttpStatus.OK )
  create(@Body() createMortalkombatDto: CreateMortalkombatDto) {
    return this.mortalkombatService.create(createMortalkombatDto);
  }

  @Get()
  findAll() {
    return this.mortalkombatService.findAll();
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
