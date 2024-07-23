// 同一ドメインからの遷移のみアニメーションを再生。
// アニメーションのチラつき防止のためデフォルトで要素表示
const movedFromPage = document.getElementById("movedFromPageWrap");
console.log(document.referrer.indexOf(window.location.hostname) !== -1);
if (document.referrer.indexOf(window.location.hostname) !== -1) {
	document.body.classList.add("noMove");
	setTimeout(() => {
		// movedFromPage.innerHTML = "";
		document.body.classList.remove("noMove");
	}, 2000);
} else {
	movedFromPage.innerHTML = "";
}

const aTags = document.getElementsByTagName("a");
const moveToPage = document.getElementById("moveToPageWrap");

for (const a of aTags) {
	console.log(a);
	a.addEventListener("click", (e) => {
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
