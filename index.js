let image = document.querySelector("img");
console.log(image);
window.onresize = function () {
  if (window.innerWidth<= 375) { 
 
    image.src = "./images/image-product-mobile.jpg";
  } 
  else{
    image.src = "./images/image-product-desktop.jpg";
  }
};
I've just completed a front-end coding challenge from @frontendmentor! 🎉

You can see my solution here: https://www.frontendmentor.io/solutions/responsive-cart-bZ7_kQPkJ3

Any suggestions on how I can improve are welcome!