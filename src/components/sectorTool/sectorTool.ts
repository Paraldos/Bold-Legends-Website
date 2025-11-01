import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";

export default class SectorTool extends ContentComponent {
  constructor() {
    super();
    this.setupNavbarListener("Tools");
    this.initHtml();
  }

  initHtml(): void {
    this.contentContainer.innerHTML += `
      <div class="SectorTool">
        <h2>Sector Tool</h2>
      </div>
    `;
  }
}
