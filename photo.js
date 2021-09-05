var noOfLikes = 0;
var noOfDislikes = 0;

function like() {
  //   Like emoji bounces when button is clicked
  document.querySelector(".like_btn").classList.add("animate__animated");
  document.querySelector(".like_btn").classList.add("animate__bounce");
  noOfLikes++;
  // document.querySelector(".display_likes").innerHTML = noOfLikes;
  //   document.querySelector(".like_btn").disabled = true;
}

function dislike() {
  //   Dislike emoji bounces when button is clicked
  document.querySelector(".dislike_btn").classList.add("animate__animated");
  document.querySelector(".dislike_btn").classList.add("animate__bounce");
  noOfDislikes++;
  // document.querySelector(".display_dislikes").innerHTML = noOfDislikes;
  //   document.querySelector(".dislike_btn").disabled = true;
}

var messagesRef = firebase.database().ref("NumberOfLikesAndDislikes");

// create a database in a backend serrver

// connect your html form
$("#likes").submit(function (e) {
  e.preventDefault();
  // push the data into server
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    NoLikes: $(".display_likes").val(),
    NoDislikes: $(".display_dislikes").val(),
  });
});

firebase
  .database()
  .ref("NumberOfLikesAndDislikes")
  .once("value", function (snapshot) {
    snapshot.forEach(function (ChildSnapshot) {
      var likes = ChildSnapshot.val().NoLikes;
      var dislikes = ChildSnapshot.val().NoDislikes;
      document.querySelector(".display_likes").innerHTML = likes;
      document.querySelector(".display_dislikes").innerHTML = dislikes;
    });
  });
