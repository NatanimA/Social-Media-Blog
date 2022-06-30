var buildings = 30;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (buildings--) {
  var building = document.createElement("div"),
    left = getRandomInt(0, 100),
    width = getRandomInt(20, 120),
    height = getRandomInt(10, 90),
    blue = getRandomInt(30, 70);
  building.className = "building";
  building.style.left = left + "%";
  building.style.backgroundColor = "rgba(0,20," + blue + ",1)";
  building.style.width = width + "px";
  building.style.height = height + "%";
  building.style.background= transparent;
  document.getElementById('city').appendChild(building);
}