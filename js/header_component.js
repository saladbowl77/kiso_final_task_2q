class HeaderSection extends HTMLElement {
	constructor() {
		super();
		this.path = "root";
	}

	static get observedAttributes() {
		return ["path"];
	}

	attributeChangedCallback(property, oldValue, newValue) {
		if (oldValue === newValue) return;
		this[property] = newValue;
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });
		shadow.innerHTML = `
			<header>
			${
				this.path === "root"
					? "守山歴史探訪"
					: this.path === "article"
					? '<a href="../../index.html">守山歴史探訪</a>'
					: '<a href="../index.html">守山歴史探訪</a>'
			}
			</header>

			<style>
				@import url('./css/reset.css');

				header {
					position: sticky;
					top: 0;
					left: 0;
					box-sizing: border-box;
					width: 100%;
					max-width: 1300px;
					display: flex;
					justify-content: flex-start;
					padding: 20px 30px 15px;
					margin: 0 auto;
					-webkit-backdrop-filter: blur(10px);
					backdrop-filter: blur(10px);
					background-color: rgba(177, 212, 247, 0.7);
					z-index: 10;
				}

				header a {
					text-decoration: none;
					color: #000;
					font-size: 20px;
					line-height: 30px;
					font-weight: 700;
				}
			</style>
		`;
	}
}
customElements.define("header-section", HeaderSection);
