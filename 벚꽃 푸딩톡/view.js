const viewHeartIconBox = document.querySelector(".view__main-heart-box");
const heartIcon = document.querySelector(".view__heart-icon");
const heartIconText = document.querySelector(".view__main-heart-text");

function clickHeartIcon(event){
  // heartIcon.classList.remove();
  // viewHeartIconBox.style.color = "red";
  // heartIcon.style.color = "red";
  /* 트렌지션 넣어놓기 */
  viewHeartIconBox.classList.toggle("clicked");
  heartIcon.classList.toggle("clicked");
}

viewHeartIconBox.addEventListener("click", clickHeartIcon);

// if(){
//   viewHeartIconBox.classList.remove("clicked");
//   heartIcon.classList.remove("clicked");
// }