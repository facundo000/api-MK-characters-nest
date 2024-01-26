import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MortalkombatModule } from '../mortalkombat/mortalkombat.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MortalkombatModule]
})
export class SeedModule {}
