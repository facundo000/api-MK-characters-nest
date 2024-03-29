import { Injectable } from '@nestjs/common';
// import axios, { AxiosInstance } from 'axios';
import { MkResponse } from './interfaces/characters-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Mortalkombat } from 'src/mortalkombat/entities/mortalkombat.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Mortalkombat.name )
    private readonly  mortalkombatModel: Model<Mortalkombat>,

    private readonly http: AxiosAdapter,
  ) {}
  
  // private readonly axios: AxiosInstance = axios;

  async executeSeedService() {
    await this.mortalkombatModel.deleteMany({});

    const data = await this.http.get<MkResponse>(`https://www.giantbomb.com/api/characters/?api_key=${process.env.API_KEY}&format=json&field_list=name,image&limit=70`);


    const characterToInsert: { name:string, no: number } [] = [];

    await Promise.all(data.results.map(async (character) => {
    const { name, image } = character;
    const segments = image.medium_url.split("/")[8].split("-")[0];
    const no = +segments;
    
    characterToInsert.push({ name: name.toLowerCase().trim(), no })
    
    return {
      name: name,
      image: image.medium_url
    };
    }));

    await this.mortalkombatModel.insertMany(characterToInsert)

    return 'Seed executed';
  }
}
