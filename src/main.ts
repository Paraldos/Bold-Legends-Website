import "./style.css";
import Navbar from "./components/navbar/navbar.ts";

class Main {
  constructor() {
    const app = document.querySelector<HTMLDivElement>("#app")!;
    new Navbar(app);
  }
}

new Main();
