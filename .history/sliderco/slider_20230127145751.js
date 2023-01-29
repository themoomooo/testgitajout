class Slider {
    constructor(images , area){
        this.currentImg=0
        this.area = area
        this.images=[]
        this.display()
        this.load(images)

    }
    load(images){
        images.array.forEach(element => {
            let image=new Image()
            image.style.width='400px'
            image.style.height='400px'
            image.src = element.src
            this.images.push(image)
            
        });
    }


    display(){
        this.nextbtn=document.createElement('button')
        this.nextbtn.innerHTML='NEXT IMAGE'
        this.prevbtn=document.createElement('button')
        this.prevbtn.innerHTML='PREV IMAGE'

        this.nextbtn.addEventListener('click', this.next.bind(this))
        this.prevbtn.addEventListener('click', this.prev.bind(this))
        this.creatslider()
        
        
    }
    creatslider(){
        this.area.append(this.prevbtn,this.images,this.nextbtn)
    }
    next(){
      this.currentImg ++ 
      if (this.currentImg > (this.images.length - 1)) {
              this.currentImg = 0;
          }
          this.photo.src = this.images[this.currentImg].img;
    }
    prev(){
        this.currentImg--
        if (this.currentImg < 0) {
            this.currentImg = this.images.length - 1;
        }
        this.photo.src = this.images[this.currentImg].img;

    }
}