var leftEye = document.querySelector("#left-eye");
leftEye.addEventListener("mouseover", function () {
  leftEye.style.fill = "gray";
});

leftEye.addEventListener("mouseout", function () {
  leftEye.style.fill = "black";
});

//ask about the call back funciton
//might use the selector all

var rightEye = document.querySelector("#right-eye");
rightEye.addEventListener("mouseover", function () {
  rightEye.style.fill = "gray";
});

rightEye.addEventListener("mouseout", function () {
  rightEye.style.fill = "black";
});

var mouth = document.querySelector("#mouths");
mouth.addEventListener("mouseover", function () {
  mouth.style.fill = "gray";
});

mouth.addEventListener("mouseout", function () {
  mouth.style.fill = "black";
});

var rightarea = document.querySelector("#right-area");
rightarea.addEventListener("mouseover", function () {
  rightarea.style.fill = "gray";
});

rightarea.addEventListener("mouseout", function () {
  rightarea.style.fill = "black";
});

var leftarea = document.querySelector("#left-area");
leftarea.addEventListener("mouseover", function () {
  leftarea.style.fill = "gray";
});

leftarea.addEventListener("mouseout", function () {
  leftarea.style.fill = "black";
});

var video = document.querySelector("video");
var btnPlay = document
  .querySelector("#btnPlay")
  .addEventListener("click", function () {
    video.play();
  });

var btnStop = document
  .querySelector("#btnStop")
  .addEventListener("click", function () {
    video.pause();
  });

var btnmute = document
  .querySelector("#btnmute")
  .addEventListener("click", function () {
    video.muted = !video.muted;
  });

var bar = document
  .querySelector("#myrange")
  .addEventListener("change", function () {
    video.volume = myrange.value;
  });

var progress = document.querySelector("#prg");
video.addEventListener("timeupdate", function () {
  progress.value = video.currentTime;
});

var loc = document.querySelector("#loc");
loc.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (p) {
    console.log(p.coords.latitude, p.coords.longitude);
    window.open(
      "https://www.google.com/maps/@" +
        p.coords.latitude +
        "," +
        p.coords.longitude
    );
  });
});
