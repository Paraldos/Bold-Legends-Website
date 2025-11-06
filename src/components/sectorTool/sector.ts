import Star from "./star.ts";
import { shuffleArray } from "../../utils.ts";

export default class Sector {
  columns = 6;
  rows = 8;
  amountOfHexes = this.columns * this.rows;
  amountOfStars = 10;
  stars = new Array(this.amountOfHexes).fill(null);

  constructor() {
    this.fillStarsArray();
  }

  private fillStarsArray() {
    this.stars = new Array(this.amountOfHexes).fill(null);
    for (let i = 0; i < this.amountOfStars; i++) {
      this.stars[i] = Star.generateStar();
    }
    this.stars = shuffleArray(this.stars);
  }
}
