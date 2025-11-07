import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";
import Sector from "./sector.ts";
import SectorMap from "./sectorMap.ts";
import MapLegend from "./mapLegend.ts";

export default class SectorTool extends ContentComponent {
  sector = new Sector();

  constructor() {
    super();
    this.setupNavbarListener("Sector Tools");
    this.fill();
  }

  fill() {
    this.contentContainer.innerHTML = `<div class="sectorTool"></div>`;
    // if (this.sector) new SectorMap(this.sector);
    if (this.sector) new MapLegend(this.sector);
  }
}
