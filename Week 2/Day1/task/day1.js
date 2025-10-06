var imgArr = [];
var data;
var http = new XMLHttpRequest();
http.open("GET", "https://fakestoreapi.com/products", false);
http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    data = JSON.parse(http.responseText);
  }
};
http.send();

for (var i = 0; i < data.length; i++) {
  imgArr.push(data[i].image);
}

var currentIndex = 0;
var imageslide = document.querySelector(".img1");

imageslide.src = imgArr[currentIndex];

// Slideshow
var slideshow = setInterval(function () {
  currentIndex++;
  if (currentIndex >= imgArr.length) {
    currentIndex = 0;
  }
  imageslide.src = imgArr[currentIndex];
}, 3000);

// Previous button
var prev = document.querySelector("#prev");
prev.addEventListener("click", function () {
  console.log(currentIndex);

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgArr.length - 1;
  }
  imageslide.src = imgArr[currentIndex];
});

// Next button
var next = document.querySelector("#next");
next.addEventListener("click", function () {
  console.log(currentIndex);

  currentIndex++;
  if (currentIndex >= imgArr.length) {
    currentIndex = 0;
  }
  imageslide.src = imgArr[currentIndex];
});

// Stop button
var btnStop = document.querySelector("#btnStop");
btnStop.addEventListener("click", function () {
  clearInterval(slideshow);
  console.log("Slideshow stopped");
});

// Play button
var btnplay = document.querySelector("#btnplay");
btnplay.addEventListener("click", function () {
  clearInterval(slideshow); // clear previous
  slideshow = setInterval(function () {
    currentIndex++;
    if (currentIndex >= imgArr.length) {
      currentIndex = 0;
    }
    imageslide.src = imgArr[currentIndex];
  }, 3000);
  console.log("Slideshow started");
});

document.cookie = "username=JohnDoe;";
console.log(document.cookie);

function getCookie(query) {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());

  //   ['username=hossa,', 'password=1223']
  const foundCookie = cookies.find((cookie) => cookie.split("=")[0] === query);

  if (!foundCookie) {
    return null;
  }

  const cookieValue = foundCookie.split("=")[1];

  return [cookieValue];
}
console.log(getCookie("username"));

function checkCookie(key, value) {
  const values = getCookie(key);

  if (!values) {
    return false;
  }

  if (value == undefined) {
    return true;
  }

  return values.includes(value);

  //   let username = getCookie("username");
  //   if (username != "") {
  //     alert("Welcome again " + username);
  //   } else {
  //     username = prompt("Please enter your name:", "");
  //     if (username != "" && username != null) {
  //       setCookie("username", username);
  //     }
  //   }
}
checkCookie("hossam");
