const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const navLinks = document.querySelectorAll(".mobile-nav-overlay a");

// メニューの開閉を切り替える関数
function toggleMenu() {
menuBtn.classList.toggle("active");
mobileNav.classList.toggle("active");

// メニューが開いている時は背面をスクロールさせない
if (mobileNav.classList.contains("active")) {
  document.body.style.overflow = "hidden";
} else {
  document.body.style.overflow = "";
}
}

// ボタンクリック
menuBtn.addEventListener("click", toggleMenu);

// リンクをクリックしたら閉じる
navLinks.forEach((link) => {
link.addEventListener("click", toggleMenu);
});

// ★追加：メニューの背景（画面全体）をクリックしても閉じるようにする
mobileNav.addEventListener("click", (e) => {
if (e.target === mobileNav) {
  // 背景部分をタップした時だけ
  toggleMenu();
}
});
