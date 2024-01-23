import { join } from 'path'; // Paquete de Node 
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { MortalkombatModule } from './mortalkombat/mortalkombat.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mortalkombat'),

    MortalkombatModule,

    CommonModule,
  ],
})
export class AppModule {}
