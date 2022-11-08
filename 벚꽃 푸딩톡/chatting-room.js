const chattingForm = document.querySelector(".chatting-room__chat-form");

function chattingSubmit(event){
  event.preventDefault();
}

chattingForm.addEventListener("submit", chattingSubmit);