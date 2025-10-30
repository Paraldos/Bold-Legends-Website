import "./navbar.css";

export default class Navbar {
  constructor(root: HTMLElement) {
    this.initHtml(root);
    this.addListeners();
  }

  initHtml(root: HTMLElement) {
    root.innerHTML = `
		<nav>
			<ul class="navbar">
				<li class="navbar__home navbar__link">Home</li>
				<li class="navbar__downloads navbar__link">Downloads</li>
				<li class="navbar__tools navbar__link selected">Tools</li>
			</ul>
		</nav>
	`;
  }

  addListeners() {
    const navLinks = document.querySelectorAll(".navbar__link");
    navLinks.forEach((el) => {
      el.addEventListener("click", () => {
        console.log(el);
      });
    });
  }
}
