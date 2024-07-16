console.log(document.referrer.indexOf(window.location.hostname) !== -1);
if (document.referrer.indexOf(window.location.hostname) !== -1) {
	document.body.classList.add("noMove");
	const movedFromPage = document.getElementById("movedFromPageWrap");
	movedFromPage.insertAdjacentHTML(
		"afterbegin",
		`<div class="wave1"></div><div class="wave2"></div><div class="wave3"></div>`
	);

	setTimeout(() => {
		movedFromPage.innerHTML = "";
		document.body.classList.remove("noMove");
	}, 2000);
}

const aTags = document.getElementsByTagName("a");
const moveToPage = document.getElementById("moveToPageWrap");

for (const a of aTags) {
	console.log(a);
	a.addEventListener("click", (e) => {
		e.preventDefault();

		moveToPage.insertAdjacentHTML(
			"afterbegin",
			`<div class="wave1"></div><div class="wave2"></div><div class="wave3"></div>`
		);

		setTimeout(() => {
			window.location.href = a.href;
		}, 2000);
	});
}
