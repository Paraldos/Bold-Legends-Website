import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";

export default class SectorTool extends ContentComponent {
  columns;
  rows;
  amountOfHexes;

  constructor() {
    super();
    this.columns = 6;
    this.rows = 8;
    this.amountOfHexes = this.columns * this.rows;
    this.setupNavbarListener("Sector Tools");
    this.initHtml();
  }

  initHtml(): void {
    this.contentContainer.innerHTML += `<div class="sectorTool"></div>`;
    this.initGrid();
    this.addHexes();
  }

  private initGrid(): void {
    const sectorTool = document.querySelector(
      ".sectorTool"
    ) as HTMLElement | null;
    if (!sectorTool) return;

    const map = document.createElement("div");
    map.classList.add("sectorTools__map");
    map.style.display = "grid";
    map.style.gridTemplateColumns = `repeat(${this.columns * 2 + 1}, 1fr)`;
    map.style.gridTemplateRows = `repeat(${this.rows * 3 + 1}, 1fr)`;
    sectorTool.appendChild(map);
  }

  addHexes() {
    const map = document.querySelector(
      ".sectorTools__map"
    ) as HTMLElement | null;
    if (!map) return;

    for (let i = 0; i < this.amountOfHexes; i++) {
      const col = i % this.columns;
      const row = Math.floor(i / this.columns);

      const hex = document.createElement("div");
      hex.className = "sectorTools__hex";
      hex.textContent = `${i + 1}`;

      const isOddRow = row % 2 === 1;
      const colStart = col * 2 + (isOddRow ? 1 : 0) + 1;
      const rowStart = row * 3 + 1;

      hex.style.gridColumn = `${colStart} / span 2`;
      hex.style.gridRow = `${rowStart} / span 4`;

      map.appendChild(hex);
    }
  }
}
