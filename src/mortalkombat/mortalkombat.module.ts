import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MortalkombatService } from './mortalkombat.service';
import { MortalkombatController } from './mortalkombat.controller';
import { Mortalkombat, mortalkombatSchema } from './entities/mortalkombat.entity';

@Module({
  controllers: [MortalkombatController],
  providers: [MortalkombatService],
  imports: [
    ConfigModule,
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
