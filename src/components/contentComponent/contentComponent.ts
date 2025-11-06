import "./contentComponent.css";

export default class ContentComponent {
  public contentContainer!: HTMLElement;

  constructor() {
    const element = document.querySelector(".contentContainer");
    if (!element) {
      throw new Error('".contentContainer" not found in DOM');
    }
    this.contentContainer = element as HTMLElement;
  }

  setupNavbarListener(selectionName: String): void {
    document.addEventListener("navbarBtnClicked", ((
      e: CustomEvent<{ selection: string }>
    ) => {
      if (e.detail.selection != selectionName) return;
      this.reset();
      this.fill();
    }) as EventListener);
  }

  reset(): void {
    this.contentContainer.innerHTML = "";
  }

  fill(): void {}
}
