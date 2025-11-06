import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";
import Sector from "./sector.ts";

export default class SectorTool extends ContentComponent {
  constructor() {
    super();
    this.setupNavbarListener("Sector Tools");
    this.contentContainer.innerHTML = `<div class="sectorTool"></div>`;
    new Map();
  }
}

class Map {
  sector = new Sector();
  sectorTool = document.querySelector(".sectorTool") as HTMLElement | null;
  map;

  constructor() {
    this.initGrid();
    this.map = document.querySelector(
      ".sectorTools__map"
    ) as HTMLElement | null;
    this.addHexes();
  }

  private initGrid(): void {
    if (!this.sectorTool) return;
    const map = document.createElement("div");
    map.classList.add("sectorTools__map");
    map.style.display = "grid";
    map.style.gridTemplateColumns = `repeat(${
      this.sector.columns * 2 + 1
    }, 1fr)`;
    map.style.gridTemplateRows = `repeat(${this.sector.rows * 3 + 1}, 1fr)`;
    this.sectorTool.appendChild(map);
  }

  private addHexes(): void {
    if (!this.map) return;
    for (let i = 0; i < this.sector.amountOfHexes; i++) {
      const col = i % this.sector.columns;
      const row = Math.floor(i / this.sector.columns);

      const hex = document.createElement("div");
      hex.className = "sectorTools__hex";
      hex.textContent = `${i + 1}`;

      const isOddRow = row % 2 === 1;
      const colStart = col * 2 + (isOddRow ? 1 : 0) + 1;
      const rowStart = row * 3 + 1;

      hex.style.gridColumn = `${colStart} / span 2`;
      hex.style.gridRow = `${rowStart} / span 4`;

      this.map.appendChild(hex);
    }
  }
}
