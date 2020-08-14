
var imgArray=[ "./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg", "./images/8.jpg"],
	i=0;

var target = document.querySelector(".slideshow").firstElementChild;


window.onload=function() {
	
	function changeImage() {
		// debugger;
		target.src=imgArray[i];
		if(i<imgArray.length-1) {
			i++;
		} else {
				i=0;
			}		
	}
	setInterval(changeImage,2000);

}

