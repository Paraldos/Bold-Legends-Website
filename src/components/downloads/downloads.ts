import ContentComponent from "../contentComponent/contentComponent.ts";

export default class Downloads extends ContentComponent {
  constructor() {
    super();
    this.setupNavbarListener("Downloads");
  }

  fill(): void {
    this.contentContainer.innerHTML += `
	  <div class="SectorTool">
		<h2>Downloads</h2>
	  </div>
	`;
  }
}
