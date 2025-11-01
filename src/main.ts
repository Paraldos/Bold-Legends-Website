import "./style.css";
import "./variables.css";
import Navbar from "./components/navbar/navbar.ts";
import Home from "./components/home/home.ts";
import Downloads from "./components/downloads/downloads.ts";
import SectorTool from "./components/sectorTool/sectorTool.ts";

class Main {
  constructor() {
    new Navbar();
    new Home();
    new Downloads();
    new SectorTool();
  }
}

new Main();
