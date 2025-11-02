import "./navbar.css";

export default class Navbar {
  constructor() {
    this.initHtml();
    this.addListeners();
  }

  private initHtml(): void {
    const nav = document.querySelector("nav");
    if (!nav) {
      console.error("Error: <nav> element not found");
      return;
    }

    nav.innerHTML = `
		<ul class="navbar">
			<li class="navbar__home navbar__btn">Home</li>
			<li class="navbar__downloads navbar__btn">Downloads</li>
			<li class="navbar__sectortools navbar__btn selected">Sector Tools</li>
		</ul>
	`;
  }

  private addListeners(): void {
    const links = document.body.querySelectorAll(".navbar__btn");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        this.resetNavbarLinks();
        link.classList.add("selected");
        this.emitNavbarBtnEvent((link as HTMLElement).innerText);
      });
    });
  }
  private emitNavbarBtnEvent(selectedLink: String) {
    const navElementSelected = new CustomEvent("navbarBtnClicked", {
      detail: { selection: selectedLink },
    });
    document.dispatchEvent(navElementSelected);
  }

  private resetNavbarLinks(): void {
    const links = document.querySelectorAll(".navbar__btn");
    links.forEach((link) => link.classList.remove("selected"));
  }
}
