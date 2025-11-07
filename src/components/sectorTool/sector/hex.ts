import World from "./world.ts";
import { shuffleArray } from "../../../utils/utils.ts";

export type HexType = "empty" | "star" | "blackHole";

export default class Hex {
  public id: string;
  public type: HexType;
  public title: String | undefined;
  public worlds: (World | null)[];

  constructor(title: String | undefined, type: HexType) {
    this.id = crypto.randomUUID();
    this.type = type;
    this.title = title;
    this.worlds = this.generateWorlds();
  }

  private generateWorlds(): (World | null)[] {
    const numberOfWorlds = Math.floor(Math.random() * 3) + 1;
    const worlds: (World | null)[] = new Array(9).fill(null);
    for (let i = 0; i < numberOfWorlds; i++) {
      worlds[i] = new World();
    }
    return shuffleArray(worlds);
  }
}
