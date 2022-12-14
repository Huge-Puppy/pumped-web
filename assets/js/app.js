// const toggleBtn = document.getElementById("toggleBtn");
const navlist = document.getElementById("navlist");
const overlay = document.querySelector("._overlay");
const navitem = document.querySelectorAll(".navitem");

// toggleBtn.addEventListener("click", function () {
  // navlist.classList.toggle("open_navbar");
  // const x = false;
  // if (!navlist.classList.contains("open_navbar")) {
    // overlay.style.display = "none";
    // document.getElementsByTagName("html")[0].style.overflowY = "unset";
  // } else {
    // overlay.style.display = "flex";
    // document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  // }
// });

function closeSidebar() {
  navlist.classList.remove("open_navbar");
  overlay.style.display = "none";
  document.getElementsByTagName("html")[0].style.overflowY = "unset";
}

navitem.forEach((element) => {
  element.addEventListener("click", () => {
    closeSidebar();
  });
});

overlay.addEventListener("click", () => {
  closeSidebar();
});
