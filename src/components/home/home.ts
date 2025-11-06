import ContentComponent from "../contentComponent/contentComponent.ts";

export default class SectorTool extends ContentComponent {
  constructor() {
    super();
    this.setupNavbarListener("Home");
  }

  fill(): void {
    this.contentContainer.innerHTML += `
      <div class="SectorTool">
        <h2>Home</h2>
      </div>
    `;
  }
}
