import "./style.css";
import "./variables.css";
import Navbar from "./components/navbar/navbar.ts";
import SectorTool from "./components/sectorTool/sectorTool.ts";

class Main {
  constructor() {
    const app = document.querySelector<HTMLDivElement>("#app")!;
    new Navbar(app);
    new SectorTool(app);
  }
}

new Main();
