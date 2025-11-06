export default class World {
  public static generateWorld() {
    return {
      id: crypto.randomUUID(),
      title: "",
      tags: [],
    };
  }
}
