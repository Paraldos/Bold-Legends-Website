import "./sectorTool.css";

export default class SectorTool {
  constructor(root: HTMLElement) {
    this.initHtml(root);
  }

  initHtml(root: HTMLElement) {
    root.innerHTML += `
		<div>
			<h1>Tools</h1>
		</div>
	`;
  }
}
