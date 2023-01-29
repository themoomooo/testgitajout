class Slider {
    constructor() {
        this.imageNum = 0
        this.images = [{src:"img1.jpg"}, {src:"img2.jpg"},{src:"img3.jpg"} ]
        this.slider = document.getElementById('slide')
        this.next=document.querySelector('.nextBtn')
        this.prev=document.querySelector('.prevBtn')
       this.start()
    }
    start(){
        this.next.addEventListener('click', this.avant.bind(this))
        this.prev.addEventListener('click', this.arriere.bind(this))
    }
    avant(){
        this.imageNum++;  
    if (this.imageNum > (this.images.length - 1)) {
            this.imageNum = 0;
        }
        this.slider.src = this.images;
    }
    arriere(){
        this.imageNum--;
        if (this.imageNum < 0) {
            this.imageNum = this.images.length - 1;
        }
        this.slider.src = this.images[this.imageNum];
    }
}

const slider = new Slider()
slider.start()

