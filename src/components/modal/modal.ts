import "./modal.css";

export default class Modal {
  modal: HTMLElement;
  contentContainer: HTMLElement;

  constructor() {
    this.modal = this.addModal();
    this.contentContainer = this.addContentContainer();
  }

  addModal(): HTMLElement {
    const div = document.createElement("div");
    div.classList = "modal";
    document.body.appendChild(div);
    return div;
  }

  addContentContainer(): HTMLElement {
    const div = document.createElement("div");
    div.classList = "modal__contentContainer";
    this.modal.appendChild(div);
    return div;
  }
}
