import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";
import Sector from "./sector/sector.ts";
import Map from "./map.ts";
import Legend from "./legend.ts";
import Controls from "./controls.ts";

export default class SectorTool extends ContentComponent {
  sector = new Sector();

  constructor() {
    super();
    this.setupNavbarListener("Sector Tools");
    this.fill();
  }

  fill() {
    this.contentContainer.innerHTML = `<div class="sectorTool"></div>`;
    if (this.sector) {
      new Controls(this.sector);
      new Map(this.sector);
      new Legend(this.sector);
    }
  }
}
