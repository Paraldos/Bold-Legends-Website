import Sector from "./sector/sector.ts";
import Hex from "./sector/hex.ts";
import type World from "./sector/world.ts";
import { toRoman, idToLabel } from "../../utils/utils.ts";

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
    const type = idToLabel(hex.type);
    const title = type != "Empty" ? "/ " + hex.title : "";
    return `<p class="sectorTools__legendHexHeader">${index} / ${type} ${title}</p>`;
  }

  private getHexBody(hex: Hex, _index: number): string {
    if (hex.type !== "star") return `<ul></ul>`;
    return `
		<ul>
			${hex.worlds
        .map((world, worldIndex) => this.getWorld(world, hex, worldIndex))
        .join("")}
		</ul>`;
  }

  private getWorld(world: World | null, hex: Hex, worldIndex: number): string {
    if (world === null) return "";
    const romanNumber = toRoman(worldIndex + 1);
    const tags = world.tags.join(", ");
    return `<li>${hex.title} ${romanNumber} (${tags})</li>`;
  }
}
