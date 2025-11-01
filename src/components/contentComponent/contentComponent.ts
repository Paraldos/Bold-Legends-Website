export default class ContentComponent {
  public contentContainer!: HTMLElement;

  constructor() {
    const element = document.querySelector(".contentContainer");
    if (!element) {
      throw new Error('".contentContainer" not found in DOM');
    }
    this.contentContainer = element as HTMLElement;
  }

  resetHtml(): void {
    this.contentContainer.innerHTML = "";
  }

  initHtml(): void {}

  setupNavbarListener(selectionName: String): void {
    document.addEventListener("navbarBtnClicked", ((
      e: CustomEvent<{ selection: string }>
    ) => {
      if (e.detail.selection != selectionName) return;
      this.resetHtml();
      this.initHtml();
    }) as EventListener);
  }
}
