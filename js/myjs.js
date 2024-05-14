function funcTheme() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}

function sembunyikanFitur() {
  var element1 = document.getElementById("flexSwitchChecked");
  var element2 = document.getElementById("kotakpencarian");
  var element3 = document.getElementById("imagelogo");

  if (element1.style.display == "none") {
    element3.style.marginTop = "0px";
  } else {
    element3.style.marginTop = "22px";
  }

  if (element1.style.display == "none") {
    element1.style.display = "block";
  } else {
    element1.style.display = "none";
  }

  if (element2.style.display == "none") {
    element2.style.display = "block";
  } else {
    element2.style.display = "none";
  }
}

function ubahTampilan(but, id_display) {
  var button = document.querySelectorAll(".rek-button");
  for (var i of button) {
    if (i == but) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  }

  var display = document.querySelector(".tampilanrekomendasi");
  display.classList.remove("tampilanrekomendasi");
  display.classList.add("nontampilanrekomendasi");

  var pilihanDisplay = document.getElementById(id_display);
  pilihanDisplay.classList.remove("nontampilanrekomendasi");
  pilihanDisplay.classList.add("tampilanrekomendasi");
}

function ubahTampilanMBS(but, id_display) {
  var button = document.querySelectorAll(".mbs-button");
  for (var i of button) {
    if (i == but) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  }

  var display = document.querySelector(".tampilanrekomendasi-mbs");
  display.classList.remove("tampilanrekomendasi-mbs");
  display.classList.add("nontampilanrekomendasi-mbs");

  var pilihanDisplay = document.getElementById(id_display);
  pilihanDisplay.classList.remove("nontampilanrekomendasi-mbs");
  pilihanDisplay.classList.add("tampilanrekomendasi-mbs");
}
