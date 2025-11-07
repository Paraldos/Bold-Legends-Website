import Sector from "./sector.ts";

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
    return legend;
  }

  addHexes(): void {
    if (!this.legend) return;
    this.sector.hexes.forEach((hex, index) => {
      this.addHex(hex, index);
    });
  }

  addHex(hex: Object, index: number): void {
    // console.log(hex, index);
  }
}
