import Sector from "./sector.ts";
import Hex from "./hex.ts";
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
    this.sector.hexes.forEach((hex, index) => {
      this.legend!.innerHTML += `
		<div class="sectorTools__legendHex">
			${this.getHexHeader(hex, index)}
			${this.getHexBody(hex, index)}
		</div>
	  `;
    });
  }

  private getHexHeader(hex: Hex, index: number): string {
    if (hex.type === "empty") return `<p>${index}</p>`;
    return `<p>${index}: ${hex.title} (${hex.type})</p>`;
  }

  private getHexBody(hex: Hex, _index: number): string {
    if (hex.type !== "star") return `</div>`;
    return `
		<ul>
			${hex.worlds
        .map((world, worldIndex) => this.getWorld(world, hex, worldIndex))
        .join("")}
		</ul>`;
  }

  private getWorld(world: World | null, hex: Hex, worldIndex: number): string {
    if (world === null) return "";
    return `<li>${hex.title} ${worldIndex}</li>`;
  }
}
