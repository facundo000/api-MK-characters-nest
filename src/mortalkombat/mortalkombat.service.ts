import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Mortalkombat } from './entities/mortalkombat.entity';

import { CreateMortalkombatDto } from './dto/create-mortalkombat.dto';
import { UpdateMortalkombatDto } from './dto/update-mortalkombat.dto';

@Injectable()
export class MortalkombatService {

  constructor(
    @InjectModel( Mortalkombat.name )
    private readonly mortalkombatModel: Model<Mortalkombat>
  ) {}

  async create(createMortalkombatDto: CreateMortalkombatDto) {
    createMortalkombatDto.name  = createMortalkombatDto.name.toLocaleLowerCase();

    try{
    const character = await this.mortalkombatModel.create( createMortalkombatDto )
    return character;
    } catch(error) {
      this.handleExceptions( error );
    }
  }

  findAll() {
    return `This action returns all mortalkombat`;
  }

  async findOne(term: string) {
    
    let character: Mortalkombat;

    if( !isNaN(+term) ) {
      character = await this.mortalkombatModel.findOne({ no: term });
      console.log(character)
    }

    //MongoID
    if( !character && isValidObjectId( term ) ) {
      character = await this.mortalkombatModel.findById( term );
      console.log(character)

    }

    //Name
    if( !character ) {
      character = await this.mortalkombatModel.findOne({ name: term.toLowerCase().trim() })
      console.log(character)
    }

    if(!character) {
      throw new NotFoundException(`Character with id, name or no "${ term }" not found `);
    }
    return character;
  }

  async update(term: string, updateMortalkombatDto: UpdateMortalkombatDto) {
    
    const character = await this.findOne( term );
    if( updateMortalkombatDto.name) 
      updateMortalkombatDto.name = updateMortalkombatDto.name.toLowerCase();

    try {
      await character.updateOne( updateMortalkombatDto );
      return {...character.toJSON(), ...updateMortalkombatDto};
    } catch(error) {
      this.handleExceptions( error );
    }
  }

  async remove(id: string) {
    // const character = await this.findOne( id )
    // await character.deleteOne();
    // const result = this.mortalkombatModel.findByIdAndDelete( id );
    const { deletedCount } = await this.mortalkombatModel.deleteOne( { _id: id } );
    if( deletedCount === 0 ) 
      throw new BadRequestException( `Character by Mortal Kombat with id ${id} not found`)

    return;
  }

  private handleExceptions( error: any ) {
    if(error.code === 11000) {
      throw new BadRequestException(`Character exist  in db ${ JSON.stringify( error.keyValue ) }`)
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Character - Check server logs`);

  }
}
