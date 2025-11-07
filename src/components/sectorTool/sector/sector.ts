import Hex from "./hex.ts";
import type { HexType } from "./hex.ts";
import { shuffleArray } from "../../../utils/utils.ts";
import { stellarNames } from "./sectorData.ts";

export default class Sector {
  columns = 7;
  rows = 9;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 13;
  amountOfBlackHoles = 3;
  hexes: Hex[] = [];
  title: String | undefined;

  constructor() {
    let localListOfStellarNames = shuffleArray(stellarNames);
    this.title = localListOfStellarNames.pop();
    this.fillHexesArray(localListOfStellarNames);
  }

  private fillHexesArray(listOfStellarNames: String[]): void {
    this.hexes = new Array(this.amountOfHexes).fill(null);

    for (let i = 0; i < this.amountOfHexes; i++) {
      const fieldTitle = listOfStellarNames.pop();
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
