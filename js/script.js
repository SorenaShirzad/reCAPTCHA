var light = document.querySelector(".lgh"),
  height = 200,
  width = 200;

document.addEventListener("mousemove", function (e) {
  setPosition(e);
});

document.addEventListener("touchmove", function (e) {
  setPosition(e);
});

function setPosition(e) {
  light.style.top = e.pageY - height / 4 + "px";
  light.style.left = e.pageX - width / 4 + "px";
}

//......................................

let first = document.getElementById("one");
let second = document.getElementById("two");
let third = document.getElementById("tree");
let fourth = document.getElementById("four");
let entery = document.getElementById("getting");
let change = document.getElementById("refresh");
let submit = document.getElementById("submit");

first.innerHTML = `${Math.floor(Math.random() * 10)}`;
second.innerHTML = `${Math.floor(Math.random() * 10)}`;
third.innerHTML = `${Math.floor(Math.random() * 10)}`;
fourth.innerHTML = `${Math.floor(Math.random() * 10)}`;

change.addEventListener("click", function () {
  first.innerHTML = `${Math.floor(Math.random() * 10)}`;
  second.innerHTML = `${Math.floor(Math.random() * 10)}`;
  third.innerHTML = `${Math.floor(Math.random() * 10)}`;
  fourth.innerHTML = `${Math.floor(Math.random() * 10)}`;
});

submit.addEventListener("click", () => {
  let correct =
    first.innerHTML + second.innerHTML + third.innerHTML + fourth.innerHTML;
  if (entery.value == correct) {
    alert("You are Human");
    entery.value = "";
  } else {
    alert("You are bot");
    entery.value = "";
  }

  first.innerHTML = `${Math.floor(Math.random() * 10)}`;
  second.innerHTML = `${Math.floor(Math.random() * 10)}`;
  third.innerHTML = `${Math.floor(Math.random() * 10)}`;
  fourth.innerHTML = `${Math.floor(Math.random() * 10)}`;
});
