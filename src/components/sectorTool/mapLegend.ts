import Sector from "./sector.ts";
import type { HexData } from "./hex.ts";

export default class MapLegend {
  sectorTool = document.querySelector(".sectorTool") as HTMLElement | null;
  legend: HTMLElement | null;
  sector: Sector;

  constructor(sector: Sector) {
    this.sector = sector;
    this.legend = this.initMapLegend();
    this.addHexes();
  }

  initMapLegend(): HTMLElement | null {
    if (!this.sectorTool) return null;
    const legend = document.createElement("div");
    legend.classList.add("sectorTools__legend");
    this.sectorTool.appendChild(legend);
    return legend;
  }

  addHexes(): void {
    if (!this.legend) return;
    this.sector.hexes.forEach((hex, index) => {
      this.addHex(hex, index);
    });
  }

  addHex(hex: HexData, index: number): void {
    if (!this.legend) return;

    const hexDiv = document.createElement("div");
    hexDiv.innerHTML = `<p>${index}</p> <p>${hex.title}</p>`;

    this.legend?.appendChild(hexDiv);
  }
}
