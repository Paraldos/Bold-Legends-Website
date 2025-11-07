import Hex from "./hex.ts";
import type { HexType } from "./hex.ts";
import { shuffleArray } from "../../../utils/utils.ts";
import { stellarNames } from "./sectorData.ts";

export default class Sector {
  columns = 9;
  rows = 7;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 10;
  amountOfBlackHoles = 3;
  hexes: Hex[] = [];

  constructor() {
    this.fillHexesArray();
  }

  private fillHexesArray(): void {
    this.hexes = new Array(this.amountOfHexes).fill(null);
    const listOfStellarNames = shuffleArray(stellarNames);

    for (let i = 0; i < this.amountOfHexes; i++) {
      const fieldTitle = listOfStellarNames[i];
      let fieldType: HexType = "empty";
      if (i < this.amountOfBlackHoles) {
        fieldType = "blackHole";
      } else if (i < this.amountOfBlackHoles + this.amountOfStars) {
        fieldType = "star";
      }
      this.hexes[i] = new Hex(fieldTitle, fieldType);
    }

    this.hexes = shuffleArray(this.hexes);
  }

  static saveSector(sector: Sector, entry: number) {
    const data = JSON.stringify(sector);
    localStorage.setItem("sectorToolEntry_" + entry, data);
  }

  static loadSector(entry: number): Sector | null {
    const data = localStorage.getItem("sectorToolEntry_" + entry);
    return data ? (JSON.parse(data) as Sector) : null;
  }
}
