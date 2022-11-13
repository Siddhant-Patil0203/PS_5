//Main Logic
var grow = true;
function fnts() {
  fntsize = document.getElementById("p1").style.fontSize;
  document.getElementById("p1").style.color = "red";

  ifntsize = parseInt(fntsize);
  window.setTimeout(fntGS, 100, ifntsize);
}

function reset() {
  window.location.reload();
}

function fntGS(ifs) {
  if (grow) {
    ifs = ifs + 1;
    if (ifs <= 50) {
      document.getElementById("p1").style.fontSize = ifs + "pt";
    } else {
      grow = false;
      document.getElementById("p1").style.color = "blue";
      document.getElementById("p1").innerHTML = "TEXT-SHRINKING";
    }
  } else {
    ifs = ifs - 1;
    if (ifs < 5) return;
    document.getElementById("p1").style.fontSize = ifs + "pt";
  }
  window.setTimeout(fntGS, 100, ifs);
}

/*theme*/
function darktheme() {
  document.getElementById("body").style.background = "#000005";

  document.getElementById("night").style.color = "#fff";
  document.getElementById("day").style.color = "rgb(120, 120, 120)";

  document.getElementById("theme").style.background = "rgb(27, 27, 27)";
}

function lighttheme() {
  document.getElementById("body").style.background =
    "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)";
  document.getElementById("day").style.color = "#000";
  document.getElementById("night").style.color = "rgb(190, 190, 190)";

  document.getElementById("theme").style.background = "whitesmoke";
}
