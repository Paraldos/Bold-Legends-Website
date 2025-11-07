import World from "./world.ts";
import { shuffleArray } from "../../../utils/utils.ts";

export type HexType = "empty" | "star" | "blackHole";

export default class Hex {
  public id: string;
  public type: HexType;
  public title: string;
  public worlds: (World | null)[];

  constructor(title: string, type: HexType) {
    this.id = crypto.randomUUID();
    this.type = type;
    this.title = title;
    this.worlds = this.generateWorlds();
  }

  private generateWorlds(): (World | null)[] {
    const numberOfWorlds = Math.round(Math.random() * 3);
    const worlds: (World | null)[] = new Array(9).fill(null);
    for (let i = 0; i < numberOfWorlds; i++) {
      worlds[i] = World.generateWorld();
    }
    return shuffleArray(worlds);
  }
}
