const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
});
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
});

var fixed = document.querySelector("#fixed-image");
var elems = document.querySelectorAll(".elem");

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");

        var imgTag = document.createElement("img");
        imgTag.src = image;
        imgTag.style.width = "24vw";
        imgTag.style.height = "30vw";
        imgTag.style.objectFit = "cover";
        imgTag.style.display = "block";
        imgTag.style.margin = "auto";
        imgTag.style.borderRadius = "10px";

        fixed.innerHTML = "";
        fixed.appendChild(imgTag);
    });

    e.addEventListener("mouseleave", function(){
        fixed.innerHTML = "";
        
    });
});

var elements = document.querySelectorAll('.design'); // Select all elements
var p1 = document.querySelector('#content1');
var p2 = document.querySelector('#content2');
var p3 = document.querySelector('#content3');
elements.forEach(element => {
    element.addEventListener("click", function() {
        // Reset all elements before applying styles to the clicked one
        elements.forEach(el => {
            el.style.color = "grey"; // Reset color
            el.style.left = "10vw"; // Reset position
            el.style.transform = "scale(1)"; // Reset scale
        });

        // Apply new styles to the clicked element
        this.style.color = "white";
        this.style.left = "15vw";
        this.style.transform = "scale(1.3)";
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

