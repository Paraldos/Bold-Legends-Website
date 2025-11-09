import Sector from "../sector/sector.ts";
import "./controls.css";
import SaveLoadModal from "../saveLoadModal/saveLoadmodal.ts";

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
    this.addSaveLoadBtn(div);
    this.sectorTool?.appendChild(div);
  }

  addNewBtn(parent: HTMLElement) {
    const btn = document.createElement("button");
    btn.innerHTML = "New";
    parent.appendChild(btn);
  }

  addSaveLoadBtn(parent: HTMLElement) {
    const btn = document.createElement("button");
    btn.innerHTML = "Save / Load";
    btn.addEventListener("click", () => new SaveLoadModal());
    parent.appendChild(btn);
  }
}
