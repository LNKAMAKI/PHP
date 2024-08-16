function load() {
    drawPrism()
    drawpen(90*(Math.PI/180))
}

function drawPrism() {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
    b = 70
    h = 60
    fixy = 80
    tg = h/(b/2)
    c.lineWidth = '1'
    c.strokeStyle = 'black'
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b,(150 - fixy)/2 + fixy)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2 + b,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()

    // (0,0) => ((300 - b)/2, 150 - (150 - fixy)/2)
    c.beginPath()
    c.moveTo(0,150 - (150 - fixy)/2)
    c.lineTo(300,150 - (150 - fixy)/2)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2,0)
    c.lineTo((300 - b)/2,150)
    c.stroke()
}

penwidth = 60
fx = 20
fy = 75
touch = false
function drawpen (angle) {
    // centro = fx + penwidth/2, fy
    //c.stroke()

    if (angle >= 0) {
    x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(angle) + fy
    }else{
    x2 = -(penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(Math.PI + angle) + fy
    x = (penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(Math.PI + angle) + fy
    }

    if (mousey >= fy && mousex >= fx + penwidth/2) { // mouse em baixo e na direita
        x2 = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = (penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*-Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*-Math.sin(angle) + fy
    }else if(mousey >= fy && mousex <= fx + penwidth/2){ // mouse em baixo e na esquerda
        x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
       y2 = -(penwidth/2)*Math.sin(angle) + fy
       x = (penwidth/2 )*Math.cos(angle) + fx + penwidth/2
       y = (penwidth/2)*Math.sin(angle) + fy
    }
   

    c.lineWidth = '2'
    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x2,y2)
    c.strokeStyle = 'black'
    c.stroke()

    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'blue'
    c.stroke()

    xc = x  - (300 - b)/2 // pra direita = +
    yc = ((150 - fixy)/2 + fixy) - y // pra cima = +
    // y = tg(angle).xc + cc
    // cc = y - tg(angle).xc
    cc =  yc + Math.tan(angle)*xc // tangente tem que coincidir com a equação do prisma - -tg(angle)
    // y = tg*x
    // y = tg(angle)*xc + cc
    // quando inteceptam:
    // tg(prisma)*x' = tg(angle)*x' + cc
    // x'(tg(prisma) - tg(angle)) = cc
    // x' = cc/(tg - tg(angle))
    xl = cc/(tg + Math.tan(angle))
    yl = tg*xl

    notouch = false
    if (Math.tan(angle) > 0 && mousex < fx + penwidth/2) {
        notouch = true
    }else if(Math.tan(angle) < 0 && mousex < fx + penwidth/2) {
        notouch = true
    }
    if (xl >= 0 && xl <= b/2 && notouch == false) {
        touch = true
    }else{
        touch = false
    }
  
    c.beginPath()
    c.moveTo(x2,y2)
    // y = tg(angle)*x
    // x = y/tg(angle)

    xper = 'none'
    if (touch == false) {
    if (mousex != fx + penwidth/2) {
    if (Math.tan(angle) > 0) {
        if (mousex > fx + penwidth/2) {
        c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
        }else{
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
        }
    }else if (Math.tan(angle) < 0){
        if (mousex < fx + penwidth/2) {
            c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
                }else{
                c.lineTo((y2)/-Math.tan(angle) + x2,0)
                }
            }
}else{
    //window.alert(Math.tan(angle))
    if (Math.tan(angle) < 0) {
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
    }else{
        c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
    }
}
    }else{
        c.lineTo(xl + (300 - b)/2,150 - (150 - fixy)/2 - yl)

        // feixe está interceptando prisma
        // arctg(tg) + 90 + x = 180
        // x = 90 - arctg(tg)
        perslope = Math.PI/2 - Math.atan(tg)
        // yl = xl*-tg(perslope) + cper
        // cper = yl + xl*tg(perslope)
        cper = yl + xl*Math.tan(perslope)
        //window.alert(cper)
        // tg(prisma)*x' = -tg(perslope)*x' + cper
        // x'(tg(prisma) + tg(perslope)) = cper
        // x' = cper/(tg(prisma) + tg(perslope))
        xper = cper/(tg + Math.tan(perslope))
        //window.alert(xper)

    }
    c.strokeStyle = 'red'
    c.stroke()


}
window.addEventListener('mousemove', function(event) {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
cWidth = canv.offsetWidth
wWidth = this.window.innerWidth
cHeight = canv.offsetHeight
wHeight = this.window.innerHeight
dif = wWidth - cWidth
mousex = ((event.x - dif/2)/cWidth)*300
mousey = ((event.y - 2)/cHeight)*150
difx = mousex - fx - penwidth/2
dify = mousey - fy
angle = Math.atan((dify/difx))
 document.getElementById('ab').innerText = `tg (prism): ${(tg).toFixed(2)} | mousex:${(mousex).toFixed(1)}, mousey:${(mousey).toFixed(1)} | tg (pen): ${-(dify/difx).toFixed(1)} | angle: ${(Math.atan((dify/difx))).toFixed(1)} | c: ${(cc).toFixed(1)}, x': ${(xl).toFixed(2)}, y': ${(yl).toFixed(2)}, touch:${touch}  | xper: ${xper}`
c.clearRect(0,0,300,150)
drawPrism()
drawpen(angle)
})