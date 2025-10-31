import "./style.css";
import "./variables.css";
import Navbar from "./components/navbar/navbar.ts";
import SectorTool from "./components/sectorTool/sectorTool.ts";

class Main {
  constructor() {
    new Navbar();
    new SectorTool();
  }
}

new Main();
