function openNav() {
  var i =sidenav
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0;
var images =[];
var time = 1000;

images[0] ="images/image1.jpg";
images[1] ="images/image2.jpg";
images[2] ="images/image1.jpg";
function changeImg(){}
document.#slide.src = images[i];
if(i < images.length - 1){
  i++;
} else {
  i = 0;
}

setTimeout("changeImg()", time);
}
window.onload =changeImg;

<img name ="slide" width="424" height="350">
