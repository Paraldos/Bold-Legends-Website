import "./navbar.css";

export default class Navbar {
  constructor(root: HTMLElement) {
    this.initHtml(root);
    const home = root.querySelector(".navbar__home");
    const downloads = root.querySelector(".navbar__downloads");
    const tools = root.querySelector(".navbar__tools");
    this.addListeners(home, downloads, tools);
  }

  initHtml(root: HTMLElement) {
    root.innerHTML = `
		<nav>
			<ul class="navbar">
				<li class="navbar__home">Home</li>
				<li class="navbar__downloads">Downloads</li>
				<li class="navbar__tools selected">Tools</li>
			</ul>
		</nav>
	`;
  }

  addListeners(
    home: Element | null,
    downloads: Element | null,
    tools: Element | null
  ) {
    home?.addEventListener("click", () => {
      console.log("home");
    });

    downloads?.addEventListener("click", () => {
      console.log("downloads");
    });

    tools?.addEventListener("click", () => {
      console.log("tools");
    });
  }
}
