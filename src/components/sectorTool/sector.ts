import Hex from "./hex.ts";
import { shuffleArray } from "../../utils/utils.ts";
import { stellarNames } from "./sectorData.ts";

export default class Sector {
  columns = 8;
  rows = 10;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 10;
  amountOfBlackHoles = 3;
  hexes = new Array(this.amountOfHexes).fill(null);

  constructor() {
    this.fillStarsArray();
  }

  private fillStarsArray() {
    this.hexes = new Array(this.amountOfHexes).fill(null);
    const listOfStellarNames = shuffleArray(stellarNames);
    for (let i = 0; i < this.amountOfHexes; i++) {
      const fieldTitle = listOfStellarNames[i];
      let fieldType = "empty";
      if (i <= this.amountOfStars + this.amountOfBlackHoles)
        fieldType = "blackHole";
      if (i <= this.amountOfStars) fieldType = "star";
      this.hexes[i] = Hex.generateStar(fieldTitle, fieldType);
    }
    this.hexes = shuffleArray(this.hexes);
  }
}
