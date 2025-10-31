import "./sectorTool.css";

export default class SectorTool {
  private contentContainer!: HTMLElement;

  constructor() {
    const contentContainer = document.querySelector(
      ".contentContainer"
    ) as HTMLElement;
    this.initHtml();

    document.body.addEventListener("click", () => {
      console.log("click");
    });
  }

  resetContentContainer() {
    if (!this.contentContainer) {
      console.error('Error: "Content Container" not found');
      return;
    }
    this.contentContainer.innerHTML = "";
  }

  initHtml() {
    this.contentContainer.innerHTML += `<div class="SectorTool" />`;
  }
}
