
const images = [
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion1.jpg.jpg",
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion2.jpg.jpg",
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion3.jpg.jpg"
];
let currentIndex = 0;


function changeImage() {
  const displayedImage = document.getElementById("displayedImage");

  
  currentIndex = (currentIndex + 1) % images.length;

  
  displayedImage.src = images[currentIndex];
}
