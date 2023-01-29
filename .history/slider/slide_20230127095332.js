class Slider {
    constructor() {
        this.imageNum = 0
        this.images = ["img1.jpg", "img2.jpg", "img3.jpg"]
        this.slider = document.getElementById('slide')
        this.next=document.querySelector('.nextBtn')
        this.prev=document.querySelector('.prevBtn')
        
        this.next()
    }
    next(){

        this.domNext.addEventListener('click', this.suivant.bind(this))
        this.imageNum++;  
    if (this.imageNum > (this.images.length - 1)) {
            this.imageNum = 0;
        }
        this.slider.src = this.images[this.imageNum];
    }
}