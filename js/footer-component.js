const links = [
	{
		title: "掲載施設",
		links: [
			{
				name: "下之郷史跡",
				path: "/article/shimonogo/index.html",
			},
			{
				name: "服部遺跡",
				path: "/article/hattori/index.html",
			},
			{
				name: "伊勢遺跡",
				path: "/article/ise/index.html",
			},
			{
				name: "守山宿",
				path: "/article/moriyama_syuku/index.html",
			},
		],
	},
	{
		title: "このサイトについて",
		links: [
			{
				name: "運営者",
				path: "/about/index.html#profile",
			},
			{
				name: "お問い合わせ",
				path: "/about/index.html#contact",
			},
		],
	},
];

const genUrl = (type, path) => {
	if (type === "root") return `.${path}`;
	else if (type === "article") return `../..${path}`;
	else return `..${path}`;
};

class FooterSection extends HTMLElement {
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
		<footer>
				<p>${
					this.path === "root"
						? "守山歴史探訪"
						: this.path === "article"
						? '<a href="../../index.html">守山歴史探訪</a>'
						: '<a href="../index.html">守山歴史探訪</a>'
				}</p>
				<div class="footer_right">
					${links
						.map((link) => {
							return `
							<div class="footer_right_links">
								<p>${link.title}</p>
								<ul>
									${link.links
										.map((data) => {
											return `<li><a href="${genUrl(this.path, data.path)}">${
												data.name
											}</a></li>`;
										})
										.join("")}
								</ul>
							</div>`;
						})
						.join("")}
				</div>
			</footer>

			<style>
				@import url('./css/reset.css');
				footer {
					box-sizing: border-box;
					width: 100%;
					background-color: ${
						this.path === "root"
							? "var(--bg-color-secondary)"
							: "var(--bg-color-primally)"
					};
					display: flex;
					justify-content: space-between;
					padding: 35px 45px;
				}

				footer p {
					font-weight: 500;
				}

				footer a {
					text-decoration: none;
					color: var(--text-primally);
				}

				footer .footer_right {
					display: flex;
					gap: 20px;
				}

				footer .footer_right p {
					margin-bottom: 10px;
				}

				footer .footer_right ul {
					list-style: none;
				}

				footer .footer_right li {
					line-height: 25px;
				}

				@media (width < 500px) {
					footer {
						flex-direction: column;
						gap: 20px;
					}
				}

				@media (width < 300px) {
					footer .footer_right {
						flex-direction: column;
						gap: 10px;
					}
				}
			</style>
		`;
	}
}
customElements.define("footer-section", FooterSection);
