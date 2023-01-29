class Slider {
    constructor(images , area){
        this.currentImg=0
        this.area = area
        this.images=images
        this.display()

    }
    display(){
        this.nextbtn=document.createElement('button')
        this.nextbtn.innerHTML='NEXT IMAGE'
        this.prevbtn=document.createElement('button')
        this.prevbtn.innerHTML='PREV IMAGE'
        this.photo=new Image()

        this.photo.style=
        this.creatslider()
        
    }
    creatslider(){
        this.area.append(this.prevbtn,this.nextbtn,this.photo)
    }
    next(){
      this.currentImg ++
    }
    prev(){
        this.currentImg--

    }
}