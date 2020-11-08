// portfolio filter area
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            if(target=="all"){
                items[k].style.display="block";
            }
        }
    })
} 
// lightbox area
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img")

//  Close lightbox by clicking outside the area
lightbox.addEventListener("click",function(){
    if(event.target!=lightboxImage){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})
// end of lightbox by clicking outside the area
   closeLightbox.addEventListener("click",function(){
       lightbox.classList.remove("show");
       lightbox.classList.add("hide");
   })

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")
    })
})


// Testimonial
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click",function(){
        
        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}


 
//  fixed navbar

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 0)
})

// navbar links
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
})

// ham-burger
const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})