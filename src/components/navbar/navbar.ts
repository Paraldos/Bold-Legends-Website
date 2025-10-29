import "./navbar.css";

export default class Navbar {
  constructor(root: HTMLElement) {
    console.log(root);
    root.innerHTML = `
		<ul class="navbar">
			<li>Home</li>
			<li>Downloads</li>
			<li>Tools</li>
		</ul>
	`;
  }
}
