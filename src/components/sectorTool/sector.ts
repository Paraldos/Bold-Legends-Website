import Field from "./field.ts";
import { shuffleArray } from "../../utils/utils.ts";
import { stellarNames } from "./sectorData.ts";

export default class Sector {
  columns = 8;
  rows = 10;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 10;
  fields = new Array(this.amountOfHexes).fill(null);

  constructor() {
    this.fillStarsArray();
  }

  private fillStarsArray() {
    this.fields = new Array(this.amountOfHexes).fill(null);
    const listOfStellarNames = shuffleArray(stellarNames);
    for (let i = 0; i < this.amountOfHexes; i++) {
      const fieldTitle = listOfStellarNames[i];
      const fieldType = i <= this.amountOfStars ? "star" : "empty";
      this.fields[i] = Field.generateStar(fieldTitle, fieldType);
    }
    this.fields = shuffleArray(this.fields);
  }
}
