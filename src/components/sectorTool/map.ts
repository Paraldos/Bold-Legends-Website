import SVG from "../../utils/svg.ts";
import Sector from "./sector/sector.ts";
import Hex from "./sector/hex.ts";
import "./map.css";

export default class Map {
  sectorTool = document.querySelector(".sectorTool") as HTMLElement | null;
  map: HTMLElement | null;
  sector: Sector;

  constructor(sector: Sector) {
    this.sector = sector;
    this.map = this.initMap();
    this.addHexes();
  }

  private initMap(): HTMLElement | null {
    if (!this.sectorTool) return null;
    const map = document.createElement("div");
    map.classList.add("sectorTools__map");
    map.style.aspectRatio = `
		${this.sector.columns * 1.5} / ${this.sector.rows}`;
    map.style.display = "grid";
    map.style.gridTemplateColumns = `repeat(${
      this.sector.columns * 2 + 1
    }, 1fr)`;
    map.style.gridTemplateRows = `repeat(${this.sector.rows * 3 + 1}, 1fr)`;
    this.sectorTool.appendChild(map);
    return map;
  }

  private addHexes(): void {
    if (!this.map) return;
    this.sector.hexes.forEach((hex, index) => this.addHex(hex, index));
  }

  private addHex(hex: Hex, index: number): void {
    if (!this.map) return;

    const col = index % this.sector.columns;
    const row = Math.floor(index / this.sector.columns);
    const isOddRow = row % 2 === 1;
    const colStart = col * 2 + (isOddRow ? 1 : 0) + 1;
    const rowStart = row * 3 + 1;

    const div = document.createElement("div");
    div.className = "sectorTools__mapHex";
    div.innerHTML = `
		<p>${index}</p>
		${hex.type === "star" ? SVG.star() : ""}
		${hex.type === "blackHole" ? SVG.blackHole() : ""}
	`;
    div.style.gridColumn = `${colStart} / span 2`;
    div.style.gridRow = `${rowStart} / span 4`;

    div.addEventListener("click", () => {
      const target = document.getElementById(
        "sectorTools__legendHex__" + index
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });

    this.map.appendChild(div);
  }
}
