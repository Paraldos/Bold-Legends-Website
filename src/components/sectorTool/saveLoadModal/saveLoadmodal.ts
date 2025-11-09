import Modal from "../../modal/modal";
import Sector from "../sector/sector";

export default class SaveLoadModal extends Modal {
  constructor() {
    super();
    for (let i = 0; i < 5; i++) {
      this.addSlot(i);
    }
  }

  addSlot(i: number) {
    const div = document.createElement("div");
    div.classList = "slot";

    const p = document.createElement("p");
    p.innerHTML = `Slot ${i + 1}`;
    div.appendChild(p);

    const loadBtn = document.createElement("button");
    loadBtn.innerHTML = "Load";
    div.appendChild(loadBtn);

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    div.appendChild(saveBtn);

    this.contentContainer.appendChild(div);
  }
}
