class Slider {
    constructor(images , area){
        this.currentImg=0
        this.area = area
        this.display()

    }
    display(){
        
    }
    creatslider(){
        this.nextbtn=document.createElement('div')
        this.nextbtn.innerHTML='NEXT IMAGE'
        this.nextbtn.append()
    }
    next(){
      this.currentImg ++
    }
    prev(){
        this.currentImg--

    }
}