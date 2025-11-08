import Sector from "./sector/sector.ts";
import "./controls.css";
import Modal from "../modal/modal.ts";

export default class Controls {
  sectorTool = document.querySelector(".sectorTool") as HTMLElement | null;
  sector: Sector;

  constructor(sector: Sector) {
    this.sector = sector;
    this.addControls();
  }

  addControls() {
    const div = document.createElement("div");
    div.classList = "sectorTools__controls";
    this.addNewBtn(div);
    this.addSaveBtn(div);
    this.addLoadBtn(div);
    this.sectorTool?.appendChild(div);
    new Modal();
  }

  addNewBtn(parent: HTMLElement) {
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "New";
    parent.appendChild(saveBtn);
  }

  addSaveBtn(parent: HTMLElement) {
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    parent.appendChild(saveBtn);
  }

  addLoadBtn(parent: HTMLElement) {
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Load";
    parent.appendChild(saveBtn);
  }
}
