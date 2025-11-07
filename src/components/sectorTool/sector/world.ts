import {
  worldTypeTags,
  worldSocietyTags,
  worldGeneralTags,
} from "./sectorData.ts";

export default class World {
  public id: string;
  public tags: string[];

  constructor() {
    this.id = crypto.randomUUID();
    this.tags = [];
  }

  public static generateWorld() {
    return new World();
  }
}
