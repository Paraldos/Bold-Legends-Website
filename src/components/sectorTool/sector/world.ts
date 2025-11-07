import {
  worldTypeTags,
  worldSocietyTags,
  worldGeneralTags,
} from "./sectorData.ts";
import { shuffleArray } from "../../../utils/utils.ts";

export default class World {
  public id: string;
  public tags: string[];

  constructor() {
    this.id = crypto.randomUUID();
    this.tags = [];
    this.tags.push(shuffleArray(worldTypeTags)[0]);
    this.tags.push(shuffleArray(worldSocietyTags)[0]);
    this.tags.push(shuffleArray(worldGeneralTags)[0]);
  }
}
