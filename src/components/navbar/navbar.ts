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
      <li class="navbar__home navbar__link">Home</li>
      <li class="navbar__downloads navbar__link">Downloads</li>
      <li class="navbar__tools navbar__link selected">Tools</li>
    </ul>
  `;
  }

  private addListeners(): void {
    const links = document.body.querySelectorAll(".navbar__link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        this.resetNavbarLinks();
        link.classList.add("selected");
      });
    });
  }

  private resetNavbarLinks(): void {
    const links = document.querySelectorAll(".navbar__link");
    links.forEach((link) => link.classList.remove("selected"));
  }
}
