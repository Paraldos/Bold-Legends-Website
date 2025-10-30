import "./navbar.css";

export default class Navbar {
  constructor(root: HTMLElement) {
    root.innerHTML = `
		<nav>
			<ul class="navbar">
				<li class="selected">Home</li>
				<li>Downloads</li>
				<li>Tools</li>
			</ul>
		</nav>
	`;
  }
}
