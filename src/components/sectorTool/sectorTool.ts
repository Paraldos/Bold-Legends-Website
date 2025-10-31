import "./sectorTool.css";
import ContentComponent from "../contentComponent/contentComponent.ts";

export default class SectorTool extends ContentComponent {
  constructor() {
    super();
    this.initHtml();
    this.setupNavbarListener();
  }

  private initHtml(): void {
    this.contentContainer.innerHTML += `
      <div class="SectorTool">
        <h2>Sector Tool</h2>
      </div>
    `;
  }

  private setupNavbarListener(): void {
    document.addEventListener("navbarBtnClicked", ((
      e: CustomEvent<{ selection: string }>
    ) => {
      console.log("Navbar selection:", e.detail.selection);
    }) as EventListener);
  }
}
