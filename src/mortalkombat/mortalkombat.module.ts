import { Module } from '@nestjs/common';
import { MortalkombatService } from './mortalkombat.service';
import { MortalkombatController } from './mortalkombat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mortalkombat, mortalkombatSchema } from './entities/mortalkombat.entity';

@Module({
  controllers: [MortalkombatController],
  providers: [MortalkombatService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Mortalkombat.name,
        schema: mortalkombatSchema,
      }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class MortalkombatModule {}
