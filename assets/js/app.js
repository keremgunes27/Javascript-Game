// Score Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Rules Modal
const modal = document.getElementById("popup-box");
var popupclose = document.getElementById("close-text-i");
var popupopen = document.getElementById("rules");

popupclose.onclick = function () {
  modal.style.display = "none";
};
popupopen.onclick = function () {
  modal.style.display = "flex";
};

// Events
var gameBtns = $(".game-buttons");
var gameHeader = $(".game-header");
var housePickedBox = $(".house-picked-box");

var scissors = $(".scissors");
var paper = $(".paper");
var rock = $(".rock");

var scissorsHouse = $(".scissorsHouse");
var paperHouse = $(".paperHouse");
var rockHouse = $(".rockHouse");

var click = false;
var button;

var score = getCookie("Score");

$(".score-text").text(score);

scissors.click(function () {
  if (!click) {
    click = true;
    button = "scissors";
    scissors.css("top", "50%");
    scissors.css("left", "0");
    scissors.css("transform", "translateY(-50%)");
    scissors.css("width", "150px");
    scissors.css("height", "150px");
    paper.css("display", "none");
    rock.css("display", "none");

    timer();
    $(".timer").css("display", "flex");

    gameBtns.css("background-image", "none");
    gameHeader.css("opacity", "1");
    housePickedBox.css("display", "flex");
  }
});

paper.click(function () {
  if (!click) {
    click = true;
    button = "paper";
    paper.css("top", "50%");
    paper.css("left", "0");
    paper.css("transform", "translateY(-50%)");
    paper.css("width", "150px");
    paper.css("height", "150px");
    scissors.css("display", "none");
    rock.css("display", "none");

    timer();
    $(".timer").css("display", "flex");

    gameBtns.css("background-image", "none");
    gameHeader.css("opacity", "1");
    housePickedBox.css("display", "flex");
  }
});

rock.click(function () {
  if (!click) {
    click = true;
    button = "rock";
    rock.css("bottom", "50%");
    rock.css("left", "0");
    rock.css("transform", "translate(0,50%)");
    rock.css("width", "150px");
    rock.css("height", "150px");
    scissors.css("display", "none");
    paper.css("display", "none");

    timer();
    $(".timer").css("display", "flex");

    gameBtns.css("background-image", "none");
    gameHeader.css("opacity", "1");
    housePickedBox.css("display", "flex");
  }
});

var scoreBool = false;

function timer() {
  var time = 3;
  var rondomNumber = Math.floor(Math.random() * 10) + 1;

  sayimiBaslat = function () {
    if (time > 0) {
      time--;
      $(".timer").text(time);
    }
    if ((time == 0) & (status == false)) {
      $(".timer").css("display", "none");

      if (rondomNumber <= 3) {
        //taş

        rockHouse.css("display", "flex");
        $(".result").css("display", "flex");
        if (button == "rock") {
          $(".result-text").text("You Tied");
        } else if (button == "paper") {
          $(".result-text").text("You Win");
          if (scoreBool == false) {
            score++;
            setCookie("Score", score, 1);
            $(".score-text").text(score);
            scoreBool = true;
          }
        } else if (button == "scissors") {
          $(".result-text").text("You Lose");
        }
      } else if (rondomNumber <= 6) {
        //kağit
        paperHouse.css("display", "flex");
        $(".result").css("display", "flex");
        if (button == "rock") {
          $(".result-text").text("You Lose");
        } else if (button == "paper") {
          $(".result-text").text("You Tied");
        } else if (button == "scissors") {
          $(".result-text").text("You Win");
          if (scoreBool == false) {
            score++;
            setCookie("Score", score, 1);
            $(".score-text").text(score);
            scoreBool = true;
          }
        }
      } else if (rondomNumber <= 9) {
        //makas
        scissorsHouse.css("display", "flex");
        $(".result").css("display", "flex");
        if (button == "rock") {
          $(".result-text").text("You Win");
          if (scoreBool == false) {
            score++;
            setCookie("Score", score, 1);
            $(".score-text").text(score);
            scoreBool = true;
          }
        } else if (button == "paper") {
          $(".result-text").text("You Lose");
        } else if (button == "scissors") {
          $(".result-text").text("You Tied");
        }
      } else {
        rondomNumber = Math.floor(Math.random() * 10) + 1;
      }
    }
  };
  $(".timer").text(time);
  setInterval("sayimiBaslat()", 1000);
}

$("#playAgain").click(function () {
  window.location.reload();
});
