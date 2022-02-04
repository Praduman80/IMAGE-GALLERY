const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click',function(){
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    if(currentlySelected === 0)
    {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }
    else{
        nextBtn.disabled = false;
    }
});

nextBtn.addEventListener('click',function(){
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;
    if(galleryImgs.length === currentlySelected+1)
    {
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
    }
});