// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

// カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
});

// タブ
$('#smarttab').smartTab({
  autoAdjustHeight : false
});

// フェードイン
$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});


$('.point-container-box2 .animate__animated').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },
  offset: '50%',
});

// アコーディオン
// アコーディオンのタイトルがクリックされたら

$('.accordion-box-top').on('click', function(e) {
  // クリックされた`.accordion-box-top`要素から、対応する`.accordion-box-bottom`要素を選択
  var bottom = $(this).next();
  // `.accordion-content`を表示・非表示
  bottom.slideToggle();
  // アイコンの回転
  $(this).find('.accordion-icon').toggleClass('rotate');
});