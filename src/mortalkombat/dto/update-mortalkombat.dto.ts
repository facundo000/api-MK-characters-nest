import { PartialType } from '@nestjs/mapped-types';
import { CreateMortalkombatDto } from './create-mortalkombat.dto';

export class UpdateMortalkombatDto extends PartialType(CreateMortalkombatDto) {}
