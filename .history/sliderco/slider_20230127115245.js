class Slider {
    constructor(images , area){
        this.currentImg=0
        this.area = area
        this.images=images
        this.display()

    }
    display(){
        this.photo=new Image()
        this.photo.style.width='400px'
        this.photo.style.height='400px'
        this.nextbtn=document.createElement('button')
        this.nextbtn.innerHTML='NEXT IMAGE'
        this.prevbtn=document.createElement('button')
        this.prevbtn.innerHTML='PREV IMAGE'
        this.creatslider()
        
    }
    creatslider(){
        this.area.append(this.prevbtn,this.photo,this.nextbtn)
    }
    next(){
      this.currentImg ++ 
      if (this.currentImg > (this.images.length - 1)) {
              this.currentImg = 0;
          }
          this.slider.src = this.images[this.imageNum].img;
    }
    prev(){
        this.currentImg--

    }
}