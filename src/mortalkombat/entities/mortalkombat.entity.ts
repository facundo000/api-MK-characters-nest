import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Document  } from 'mongoose';

@Schema()
export class Mortalkombat extends Document {

    @Prop({
        unique:true,
        index: true,
    })
    name: string;

    @Prop({
        unique:true,
        index: true,
    })
    no: string;
}

export const mortalkombatSchema = SchemaFactory.createForClass( Mortalkombat );