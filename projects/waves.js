let radius = 2
let starty = 80
let x = 0
timer = 0
loop = true
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)

function animate() {
    conts = []
    conts2 = []
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))
    for (i = 0; i < 75;i++) {
        if (timer - x*0.1 >= 0) {
            y = starty + 30*Math.sin(0 - 0.4*(timer - x*0.1))
        }else{
            y = starty
        }
        conts.push({index:i,y: y - starty})
        conts2.push({index: i, y: y - starty})
        c.beginPath()
        //c.arc(x + radius + 0.6,y,radius,0,2*Math.PI)
        c.fillStyle = 'red'
        c.fill()
        c.strokeStyle = 'black'
        c.stroke()
        c.beginPath()
        //c.arc(x + radius - 2,y - 2,radius - radius*0.6,0,2*Math.PI)
        c.fillStyle = 'white'
        c.fill()
        x+= 2*radius
        }

        x = 0
        for (i = 0; i < 75;i++) {
            if (timer - x*0.1 >= 0) {
                y = starty + 30*Math.sin(0 - 0.4*(timer - x*0.1))
            }else{
                y = starty
            }
            conts2[74 - i].y = y - starty
            
            c.beginPath()
            //c.arc(300 - x - radius - 0.6,y,radius,0,2*Math.PI)
            c.fillStyle = 'blue'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(300 - x - radius - 2,y - 2,radius - radius*0.6,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }

        constall = []
        for (cont in conts) {
            constall.push({index:cont,y:conts[cont].y + conts2[cont].y})
        }
        
        x = 0
        for (i = 0; i < 75;i++) {
            c.beginPath()
            c.arc(x + radius + 0.6,constall[i].y + starty,radius,0,2*Math.PI)
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.6,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }

        timer+= 0.1
if (loop == true) {
requestAnimationFrame(animate)
}
}
animate()
}

window.addEventListener('keypress',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p') {
        loop = false
    }
}) 