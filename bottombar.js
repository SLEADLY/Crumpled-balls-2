class Bottombar {
    constructor (x, y, width, height){
        var options={
            isStatic:true
            
        }
        this.body=Bodies.rectangle (x, y, width, height, options)
        World.add(world,this.body)
        this.width=width
        this.height=height
        this.image=loadImage("dustbingreen.png")
    }
display (){
    fill("red");
translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image, 0,0, this.width, this.height)

}
}