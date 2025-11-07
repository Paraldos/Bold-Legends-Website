import World from "./world.ts";
import { shuffleArray } from "../../utils/utils.ts";

export type HexType = "empty" | "star" | "blackHole";

export interface HexData {
  id: string;
  type: HexType;
  title: string;
  worlds: (World | null)[];
}

export default class Hex {
  public static generateHex(
    targetTitle: string = "Nova",
    targetType: HexType
  ): HexData {
    return {
      id: crypto.randomUUID(),
      type: targetType,
      title: targetTitle,
      worlds: Hex.generateWorlds(),
    };
  }

  private static generateWorlds(): (World | null)[] {
    const numberOfWorlds = Math.round(Math.random() * 3);
    const worlds = new Array(9).fill(null);
    for (let i = 0; i < numberOfWorlds; i++) {
      worlds[i] = World.generateWorld();
    }
    return shuffleArray(worlds);
  }
}
