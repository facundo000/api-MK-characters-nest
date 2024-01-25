import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { MkResponse } from './interfaces/characters-response.interface';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  async executeSeedService() {
    const response = await axios.get<MkResponse>(`https://www.giantbomb.com/api/characters/?api_key=${process.env.API_KEY}&format=json&field_list=name,image&limit=7`);
    const results = response.data.results.map(character => {
      const { name, image } = character;
      const segments = image.medium_url.split("/")[8].split("-")[0];
      const no = +segments;
      console.log({ name, no });
      return {
        name: name,
        image: image.medium_url
      };
   });
  

    return results;
  }
}
