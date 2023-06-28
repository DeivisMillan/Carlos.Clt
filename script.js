var slider = document.getElementById("mySlider");

slider.addEventListener("input", function() {
  var sliderValue = parseInt(this.value);
  var sliderElement = document.querySelector(".slider");

  if (sliderValue >= 10) {
    sliderElement.style.backgroundImage = "linear-gradient(to right, #1fd8b6 " + sliderValue + "%, #e9eff6 " + sliderValue + "%)";
  } else {
    sliderElement.style.backgroundImage = "linear-gradient(to right, red 0%, #e9eff6 0%)";
  }

  if (sliderValue === 100) {
    window.location.href = "otroarchivo.html";
  }
});
