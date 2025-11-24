function om() {
  const menu = document.getElementById("pm");
  const os = document.getElementById("os");
  const cm = document.getElementById("cm");
  
  if (menu.style.right === "-270px") {
    menu.style.right = "0vw";
    os.style.opacity = "1";
    cm.style.zIndex = "1";
  } else {
    menu.style.right = "-270px";
    os.style.opacity = "0";
    cm.style.zIndex = "-1";
  }
}
function ref() {
  location.reload();
}