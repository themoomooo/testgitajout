class Slider {
    constructor() {
        this.imageNum = 0
        this.images = [{img:"img1.jpg"}, {img:"img2.jpg"},{img:"img3.jpg"}]
        this.slider = document.getElementById('slide')
        this.next=document.querySelector('.nextBtn')
        this.prev=document.querySelector('.prevBtn')
       this.start()
    }
    start(){
        this.next.addEventListener('click', this.avant.bind(this))
        this.prev.addEventListener('click', this.arriere.bind(this))
        /* window.setTimeout(this.autoslide.bind(this), 1000); */
    }
    avant(){
        this.imageNum++;  
    if (this.imageNum > (this.images.length - 1)) {
            this.imageNum = 0;
        }
        this.slider.src = this.images[this.imageNum].img;
    }
    arriere(){
        this.imageNum--;
        if (this.imageNum < 0) {
            this.imageNum = this.images.length - 1;
        }
        this.slider.src = this.images[this.imageNum].img;
    }
    autoslide(){
        for (let i = 0; i < this.images.length - 1; i++) {
            
                this.slider.src = this.images[i].img;
        }
    }
            
          
}


const slider = new Slider()
slider.start()

