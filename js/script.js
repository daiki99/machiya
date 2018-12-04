//ハンバーガーボタン
$(function () {
	$('.menu_trigger').click(function () {
		$(this).toggleClass('active');
	});
});

//メニューアコーディオン
$(function () {
	$('.hamburger_btn').click(function () {
		$('nav').stop().slideToggle();
	});
});