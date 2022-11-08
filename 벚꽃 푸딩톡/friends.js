const arrowUp = document.querySelector(".fa-angle-up");
const bookmark = document.querySelector(".user-profile-crepe");

function clickArrowUp(){
  arrowUp.classList.toggle("arrow-up-clicked");
  bookmark.classList.add("hidden");
};

arrowUp.addEventListener("click", clickArrowUp);