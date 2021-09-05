var noOfLikes = 0;
var noOfDislikes = 0;

function like() {
  //   Like emoji bounces when button is clicked
  document.querySelector(".like_btn").classList.add("animate__animated");
  document.querySelector(".like_btn").classList.add("animate__bounce");
  noOfLikes++;
  document.querySelector(".display_likes").innerHTML = noOfLikes;
  //   document.querySelector(".like_btn").disabled = true;
}

function dislike() {
  //   Dislike emoji bounces when button is clicked
  document.querySelector(".dislike_btn").classList.add("animate__animated");
  document.querySelector(".dislike_btn").classList.add("animate__bounce");
  noOfDislikes++;
  document.querySelector(".display_dislikes").innerHTML = noOfDislikes;
  //   document.querySelector(".dislike_btn").disabled = true;
}
