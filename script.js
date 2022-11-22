var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

var card = document.querySelectorAll(".card");
var cardBack = document.querySelectorAll(".card_back");
var cardFront = document.querySelectorAll(".card_front");
var cardImgDisplayNone = document.getElementsByClassName("card_img_display_none");
var cardTxtDisplayNone = document.getElementsByClassName("card_txt_display_none");


card.forEach((element, index) => {
  element.addEventListener("mouseover", function () {
    cardFront[index].classList.add("cardAnimated");
    cardImgDisplayNone[index].classList.add("displayNone");
    cardTxtDisplayNone[index].classList.add("displayNone");
  });
  element.addEventListener("mouseout", function () {
    cardFront[index].classList.remove("cardAnimated");
    cardImgDisplayNone[index].classList.remove("displayNone");
    cardTxtDisplayNone[index].classList.remove("displayNone");
  });
});
cardBack.forEach((element, index) => {
  element.addEventListener("mouseover", function () {
    cardFront[index].classList.add("cardAnimated");
    cardImgDisplayNone[index].classList.add("displayNone");
    cardTxtDisplayNone[index].classList.add("displayNone");
  });
  element.addEventListener("mouseout", function () {
    cardFront[index].classList.remove("cardAnimated");
    cardImgDisplayNone[index].classList.remove("displayNone");
    cardTxtDisplayNone[index].classList.remove("displayNone");
  });
});

