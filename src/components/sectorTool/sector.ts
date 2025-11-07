import Hex from "./hex.ts";
import type { HexData, HexType } from "./hex.ts";
import { shuffleArray } from "../../utils/utils.ts";
import { stellarNames } from "./sectorData.ts";

export default class Sector {
  columns = 8;
  rows = 10;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 10;
  amountOfBlackHoles = 3;
  hexes: HexData[] = [];

  constructor() {
    this.fillHexesArray();
  }

  private fillHexesArray(): void {
    this.hexes = new Array(this.amountOfHexes).fill(null);
    const listOfStellarNames = shuffleArray(stellarNames);

    for (let i = 0; i < this.amountOfHexes; i++) {
      const fieldTitle = listOfStellarNames[i] ?? `Hex ${i}`;
      let fieldType: HexType = "empty";

      if (i < this.amountOfBlackHoles) {
        fieldType = "blackHole";
      } else if (i < this.amountOfBlackHoles + this.amountOfStars) {
        fieldType = "star";
      }

      this.hexes[i] = Hex.generateHex(fieldTitle, fieldType);
    }

    this.hexes = shuffleArray(this.hexes);
  }
}
