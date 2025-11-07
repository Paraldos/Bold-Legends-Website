import Sector from "./sector.ts";
import type { HexData } from "./hex.ts";
import type World from "./world.ts";

export default class MapLegend {
  sectorTool = document.querySelector(".sectorTool") as HTMLElement | null;
  legend: HTMLElement | null;
  sector: Sector;

  constructor(sector: Sector) {
    this.sector = sector;
    this.legend = this.initMapLegend();
    this.addHexes();
  }

  private initMapLegend(): HTMLElement | null {
    if (!this.sectorTool) return null;
    const legend = document.createElement("div");
    legend.classList.add("sectorTools__legend");
    this.sectorTool.appendChild(legend);
    return legend;
  }

  private addHexes(): void {
    if (!this.legend) return;
    this.sector.hexes.forEach((hex, index) => this.addHex(hex, index));
  }

  private addHex(hex: HexData, index: number): void {
    if (!this.legend) return;
    const div = document.createElement("div");
    div.className = "sectorTools__legendHex";
    div.innerHTML = `
	<div>
		${this.getHexHeader(hex, index)}
		${this.getHexBody(hex, index)}
	</div>`;
    this.legend?.appendChild(div);
  }

  private getHexHeader(hex: HexData, index: number): string {
    const div = document.createElement("div");
    div.className = "sectorTools__legendHexHeader";
    div.innerHTML =
      hex.type === "empty"
        ? `<p>${index}:</p>`
        : `<p>${index}: ${hex.title} (${hex.type})</p>`;
    return div.outerHTML;
  }

  private getHexBody(hex: HexData, _index: number): string {
    const div = document.createElement("div");
    if (hex.type == "empty") return div.outerHTML;
    hex.worlds.forEach((world) => {
      if (world == null) return;
      this.getWorld(world);
    });
    return div.outerHTML;
  }

  private getWorld(world: World) {
    const div = document.createElement("div");
    console.log(world.tags);
    return div;
  }
}
