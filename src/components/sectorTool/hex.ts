import World from "./world.ts";
import { shuffleArray } from "../../utils/utils.ts";

export default class Hex {
  public static generateStar(targetTitle = "Nova", targetType = "empty") {
    return {
      id: crypto.randomUUID(),
      type: targetType,
      title: targetTitle,
      worlds: Hex.generateWorlds(),
    };
  }

  private static generateWorlds(): (Object | null)[] {
    const numberOfWorlds = Math.round(Math.random() * 3);
    let worlds = new Array(9).fill(null);
    for (let i = 0; i < numberOfWorlds; i++) {
      worlds[i] = World.generateWorld();
    }
    return shuffleArray(worlds);
  }
}
