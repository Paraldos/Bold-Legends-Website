import World from "./world";
import { shuffleArray } from "../../utils.ts";

export default class Star {
  public static generateStar(starTitle?: string) {
    const title = starTitle ?? "Nova";

    return {
      id: crypto.randomUUID(),
      index: 0,
      row: 0,
      column: 0,
      type: "Stern",
      title,
      worlds: Star.generateWorlds(),
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
