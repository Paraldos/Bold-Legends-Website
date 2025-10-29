export default class Navbar {
  constructor(root: HTMLElement) {
    console.log(root);
    root.innerHTML = `
		<navbar>
			<h1>bert</h1>
		</navbar>
	`;
  }
}
