let currentStart = 0;//! başlangıç
const slides = document.querySelector('.slider').children;
const allSlide = slides.length;

function nextImage(){
    if(currentStart < allSlide - 1){
        currentStart ++;
    }else{
        currentStart = 0;
    }
    updateSlide();
}

function prevImage(){
    if(currentStart > 0){
        currentStart --;
    }else{
        currentStart = allSlide - 1;
    }
    updateSlide();
}

function updateSlide(){
    const slideValue = -currentStart * 100 + "%"
    document.querySelector(".slider").style.transform = 'translateX(' + slideValue + ')';
}

setInterval (nextImage , 2500)