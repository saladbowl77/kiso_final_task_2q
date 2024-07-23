// 同一ドメインからの遷移のみアニメーションを再生。
// アニメーションのチラつき防止のためデフォルトで要素表示
const movedFromPage = document.getElementById("movedFromPageWrap");
if (document.referrer.indexOf(window.location.hostname) !== -1) {
	document.body.classList.add("noMove");
	setTimeout(() => {
		// movedFromPage.innerHTML = "";
		document.body.classList.remove("noMove");
	}, 2000);
} else {
	movedFromPage.innerHTML = "";
}

const moveToPage = document.getElementById("moveToPageWrap");
const addLinkEvent = (aTags) => {
	for (const a of aTags) {
		a.addEventListener("click", (e) => {
			// 遷移先が同一ドメインでない場合はモーションをつけずにreturn
			if (a.href.indexOf(window.location.hostname) === -1) return;
			e.preventDefault();

			moveToPage.insertAdjacentHTML(
				"afterbegin",
				`
					<div class="wave"></div>
				`
			);

			setTimeout(() => {
				window.location.href = a.href;
			}, 2000);
		});
	}
};

addLinkEvent(document.getElementsByTagName("a"));

if (document.getElementsByTagName("header-section").length > 0) {
	addLinkEvent(
		document
			.getElementsByTagName("header-section")[0]
			.shadowRoot.querySelectorAll("header a")
	);
}

addLinkEvent(
	document
		.getElementsByTagName("footer-section")[0]
		.shadowRoot.querySelectorAll("footer a")
);
