export default class ContentComponent {
  public contentContainer!: HTMLElement;

  constructor() {
    const element = document.querySelector(".contentContainer");
    if (!element) {
      throw new Error('".contentContainer" not found in DOM');
    }
    this.contentContainer = element as HTMLElement;
  }

  resetContentContainer(): void {
    this.contentContainer.innerHTML = "";
  }
}
