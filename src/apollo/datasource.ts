import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import type { Breed, Image } from "./types/__generated__";

class CatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.thecatapi.com/v1/";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("x-api-key", process.env.API_KEY);
  }

  breedReducer(breed: Record<string, any>) {
    return {
      id: breed.id,
      name: breed.name,
      description: breed.description,
      image: breed.image?.url,
      temperature: breed.temperature,
      origin: breed.origin,
      lifeSpan: breed.life_span,
      adaptability: breed.adaptability,
      affectionLevel: breed.affection_level,
      childFriendly: breed.child_friendly,
      grooming: breed.grooming,
      intelligence: breed.intelligence,
      healthIssues: breed.health_issues,
      socialNeeds: breed.social_needs,
      strangerFriendly: breed.stranger_friendly
    } as Breed;
  }

  async getBreed(name: string): Promise<Breed> {
    const result = await this.get(`breeds/search?q=${name}`);

    return this.breedReducer(result[0]);
  }

  async getAllBreeds(limit = 10, page = 0): Promise<Breed[]> {
    const result: Record<string, any>[] = await this.get(
      `breeds?limit=${limit}&page=${page}`
    );

    return result.map(breed => this.breedReducer(breed));
  }

  async getBreedPhotos(id: string, limit = 8, page = 0): Promise<Image[]> {
    const result: Record<string, any>[] = await this.get(
      `images/search?breed_ids=${id}&limit=${limit}&page=${page}`
    );

    const images = result.map(image => {
      const { breeds, ...rest } = image;
      return rest;
    });

    return images as Image[];
  }
}

export default CatsAPI;
