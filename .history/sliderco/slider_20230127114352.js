class Slider {
    constructor(images , area){
        this.currentImg=0
        this.area = area
        this.display()

    }
    display(){
        this.nextbtn=document.createElement('button')
        this.nextbtn.innerHTML='NEXT IMAGE'
        this.prevbtn=document.createElement('button')
        this.prevbtn.innerHTML='PREV IMAGE'
        this.creatslider()
        
    }
    creatslider(){
        this.area.append(this.prevbtn,this.prevbtn)
    }
    next(){
      this.currentImg ++
    }
    prev(){
        this.currentImg--

    }
}