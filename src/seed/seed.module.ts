import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MortalkombatModule } from '../mortalkombat/mortalkombat.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MortalkombatModule, CommonModule]
})
export class SeedModule {}
