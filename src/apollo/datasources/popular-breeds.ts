import { MongoDataSource } from "apollo-datasource-mongodb";
import type { Breed } from "../types/generated/server";

type TData = Pick<Breed, "name"> & { searchCount: number };

class PopularBreeds extends MongoDataSource<TData> {
  async getPopularBreeds(limit = 10, skip = 0) {
    return this.collection
      .find()
      .sort("searchCount", -1)
      .limit(limit)
      .skip(skip);
  }

  async storeBreeds(breeds: Breed[]) {
    const details = breeds.map(breed => ({
      name: breed.name,
      searchCount: 0
    }));

    return this.collection.insertMany(details, { ordered: false });
  }

  async updateSearchCount(name: string) {
    const breed = await this.collection.findOne({ name });

    return this.collection.findOneAndUpdate(
      { name },
      { $set: { searchCount: breed.searchCount + 1 } }
    );
  }
}

export default PopularBreeds;
