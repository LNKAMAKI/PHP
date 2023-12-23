/*
canvas: 0 - 300
*/
let pokebolas = []
loop = true
function load() {
    //console.log(document.querySelector('canvas'))
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    //console.log(c)

mousex = ''
mousey = ''
function animate() {
   // for (t = 0; t < 2;t++) {
    if (pokebolas.length == 0) {
for (v = 0; v < 2; v++) {
width = Math.random()*8 + 10
width = 13
velx = Number((Math.random()*1).toFixed(0)) + 1
vely = Number((Math.random()*1).toFixed(0)) + 1

x = Math.random()*(300-width*3) + width
y = Math.random()*(150-width*3) + width
//console.log(velx)


if (v == 0) {
    x = 150
    y = 75
}else  if (v == 1){
    x = 250
    y = 120
}else{
    x = 50
    y = 40
}


//x = Math.random()*(100-width*2) + width
//y = Math.random()*(50-width*2) + width

r = Math.random()*255
g = Math.random()*255
//b = Math.random()*255
color = Math.trunc(Math.random()*7)
if (color == 0) {
 color = "red"
}else if(color == 1){
color = "rgb(255, 116, 199)"
}else if(color == 2) {
color = "rgb(44, 186, 248)"
}else if (color == 3){
color = "rgb(255, 167, 66)"
}else if(color == 4){
    color= "rgb(34, 209, 139)"
}else if(color == 5){
    color = "rgb(211, 100, 254)"
}else{
    color = 'yellow'
}
if (v == 0) {
    color = 'pink'
}

rangex = [x - width,x + width]
rangey = [y - width,y + width]
createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
}
    }else{
        document.getElementById('diff').innerText = 'iii' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
        c.clearRect(0,0,300,150)

        for (number in pokebolas) {
            /*
            if (pokebolas[number].x > 300 - pokebolas[number].width || pokebolas[number].x < pokebolas[number].width) {
                pokebolas[number].velx = -pokebolas[number].velx
            }
            if (pokebolas[number].y > 150 - pokebolas[number].width || pokebolas[number].y < pokebolas[number].width) {
                pokebolas[number].vely = -pokebolas[number].vely
            }*/
            pokebolas[number].x+=pokebolas[number].velx
            pokebolas[number].y+=pokebolas[number].vely
            pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
            pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
            createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
            fp = document.getElementById('firstp')
            en = document.getElementById('energy')
            sp = document.getElementById('secp')
            en.innerText = 'energy' + Number(pokebolas[0].velx**2 + pokebolas[0].vely**2 + pokebolas[1].velx**2 + pokebolas[1].vely**2) //+ pokebolas[2].velx**2 + pokebolas[2].vely**2)
            if (number == 0) {
            fp.innerHTML = `<span style="color:red;">x</span>:${(pokebolas[number].velx).toFixed(2)},<span style="color:red;">y</span>: ${(pokebolas[number].vely).toFixed(2)} `
            }else{
                sp.innerHTML = `<span style="color:blue;">x</span>: ${(pokebolas[number].velx).toFixed(2)}, <span style="color:blue;">y</span>: ${(pokebolas[number].vely).toFixed(2)}`  
            }
    }
    collision()
    document.getElementById('diff').innerText = '---------------DISTANCE: ' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
    }

    if (loop == true) {
requestAnimationFrame(animate)
    }
}
animate()
}

coll = 0
function collision() {
    //console.log(coll)
    for (a in pokebolas) {//for (a = 0; a < 1;a++) {//for (a in pokebolas) {
        //console.log('a',a)
        cx = pokebolas[a].x
        cy = pokebolas[a].y
        velx1 = pokebolas[a].velx
        vely1 = pokebolas[a].vely
        
        for (b = 0; b < pokebolas.length; b++) {
            if (b != a) {
                //console.log('b',b)
        cx2 = pokebolas[b].x
        cy2 = pokebolas[b].y
        velx2 = pokebolas[b].velx
        vely2 = pokebolas[b].vely
        
        diffx = cx - cx2
        diffy = cy - cy2
        if (diffx < 0) {
            diffx = -diffx
        }
        if (diffy < 0) {
            diffy = -diffy
        }
        
        
        if (pokebolas[a].x > 300 - pokebolas[a].width && pokebolas[a].velx > 0 || pokebolas[a].x < pokebolas[a].width && pokebolas[a].velx < 0) {
            velx1 = -pokebolas[a].velx
            pokebolas[a].velx = -pokebolas[a].velx
        }
        if (pokebolas[a].y > 150 - pokebolas[a].width && pokebolas[a].vely > 0|| pokebolas[a].y < pokebolas[a].width && pokebolas[a].vely < 0) {
            vely1 = -pokebolas[a].vely
            pokebolas[a].vely = -pokebolas[a].vely
        }
        if (pokebolas[b].x > 300 - pokebolas[b].width && pokebolas[b].velx > 0 || pokebolas[b].x < pokebolas[b].width && pokebolas[b].velx < 0 ) {
            velx2 = -pokebolas[b].velx
            pokebolas[b].velx = -pokebolas[b].velx
        }
        if (pokebolas[b].y > 150 - pokebolas[b].width && pokebolas[b].vely > 0|| pokebolas[b].y < pokebolas[b].width && pokebolas[b].vely < 0) {
            vely2 = -pokebolas[b].vely
            pokebolas[b].vely = -pokebolas[b].vely
        }
        
        
        if (Math.round(diffx**2 + diffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('PAROU!')
            console.log(`a distância entre as pokebolas é de ${diffx**2 + diffy**2}`)
            window.alert('PAROU')
           //loop = false
        }
        
        if (Math.round(diffx**2 + diffy**2) == 676){//|| newdiffx**2 + newdiffy**2 < 676) {
            //loop = false
            //window.alert('')
            //console.log(cx,cx2)
           // console.log(cy,cy2)
            console.log('calcular a colisão')
            //loop = false
            //console.log(pokebolas[a].velx)
            //console.log(pokebolas[a].r)
            //loop = false
            if (pokebolas[a].r == '' || pokebolas[a].r == undefined) {
                pokebolas[a].r = 1
                pokebolas[b].r = 1
            }
            vx1 = pokebolas[a].velx/pokebolas[a].r
            vy1 = -pokebolas[a].vely/pokebolas[a].r // sinal de menos para definir + pra cima e - pra baixo
            vx2 = pokebolas[b].velx/pokebolas[b].r
            vy2 = -pokebolas[b].vely/pokebolas[b].r // sinal de menos para definir + pra cima e - pra baixo
            console.log('vx1: ',vx1)
            console.log('vy1: ',vy1)
            console.log('vx2: ',vx2)
            console.log('vy2: ',vy2)

            if (cy < cy2) {
                console.log(`bola ${a} é a de cima`)
                upball = Number(a)
                downball = Number(b)
            }else{
                console.log(`bola ${b} é a de cima`)
                upball = Number(b)
                downball = Number(a)
            }

            if (cx > cx2) {
                console.log(`bola ${a} está na direita`)
                rightball = Number(a)
                leftball = Number(b)
            }else{
                console.log(`bola ${b} está na direita`)
                rightball = Number(b)
                leftball = Number(a)
            }

            console.log('triangulo:',diffx,diffy,(diffx**2 + diffy**2)**(1/2))
            senx = diffx/(diffx**2 + diffy**2)**(1/2)
            senx = diffx/26
            cosx = diffy/(diffx**2 + diffy**2)**(1/2)
            cosx = diffy/26
            //senx = 3**(1/2)/2
            //cosx = 1/2
            console.log(`senx:${senx.toFixed(2)}, cosx:${cosx.toFixed(2)}, ${(senx**2 + cosx**2).toFixed(0)}`)

            //pokebola 1
            console.log('pokebola 0')
            console.log(`bola ${a}: vx:${vx1}, vy:${vy1}`)
            vperx1 = vx1*senx // decomposição de vx1 na direção perpendicular(vel relativa)
            vparx1 = vx1*cosx // decomposição de vx1 na direção paralela(vel conservativa)
            vpery1 = vy1*cosx // decomposição de vy1 na direção perpendicular(vel relativa)
            vpary1 = vy1*senx // decomposição de vy1 na direção paralela(vel conservativa)
            vperx1hor = vperx1*senx
            vperx1ver = vperx1*cosx
            vparx1hor = vparx1*cosx
            vparx1ver = vparx1*senx
            vpery1hor = vpery1*senx
            vpery1ver = vpery1*cosx
            vpary1hor = vpary1*cosx
            vpary1ver = vpary1*senx

            if (vx1 > 0) {
                if (leftball == a && downball == a || rightball == a && upball == a) {
                 // decomposição de velperx1 = pra cima e pra direita
                 if (vperx1ver < 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor < 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra baixo e pra direita
                 if (vparx1ver > 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor < 0) {
                    vparx1hor = -vparx1hor
                 }
                }else{
                // decomposição de velperx1 = pra baixo e pra direita
                if (vperx1ver > 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor < 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra cima e pra direita
                 if (vparx1ver < 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor < 0) {
                    vparx1hor = -vparx1hor
                 }
                }
            }else{
                if (leftball == a && downball == a || rightball == a && upball == a) {
                    // decomposição de velperx1 = pra baixo e pra esquerda
                    if (vperx1ver > 0) {
                        vperx1ver = -vperx1ver
                     }
                     if (vperx1hor > 0) {
                        vperx1hor = -vperx1hor
                     }
                      // decomposição de velparx1 = pra cima e pra esquerda
                      if (vparx1ver < 0) {
                        vparx1ver = -vparx1ver
                     }
                     if (vparx1hor > 0) {
                        vparx1hor = -vparx1hor
                     }
                }else{
                   // decomposição de velperx1 = pra cima e pra esquerda
                   if (vperx1ver < 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor > 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra baixo e pra esquerda
                 if (vparx1ver > 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor > 0) {
                    vparx1hor = -vparx1hor
                 }
                }
            }

            if (downball == a) {
                if (vy1 > 0) {
                    if (leftball == a) { // bola de baixo para a esquerda com velx positiva
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra direita
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra cima e pra esquerda
                        if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de baixo para a direita com velx positiva
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra esquerda
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra cima e pra direita
                         if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }else{
                    if (leftball == a) { // bola de baixo para a esquerda com velx negativa
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra esquerda
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra direita
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de baixo para a direita com velx negativa
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra direita
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra esquerda
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }
            }else{
                if (vy1 > 0) {
                    if (rightball == a) { // bola de cima para a direita com velx positiva
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra direita
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra cima e pra esquerda
                        if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de cima para a esquerda com velx positiva
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra esquerda
                    if (vpery1ver < 0) {
                        vpery1ver = -vpery1ver
                    }
                    if (vpery1hor > 0) {
                        vpery1hor = -vpery1hor
                    }
                    //decomposição de velpary1 = pra cima e pra direita
                    if (vpary1ver < 0) {
                        vpary1ver = -vpary1ver
                    }
                    if (vpary1hor < 0) {
                        vpary1hor = -vpary1hor
                    }
                    }
                }else{
                    if (rightball == a) { // bola de cima para a direita com velx negativa
                          // vely perpendicular negativa
                          if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra esquerda
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra baixo e pra direita
                        if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de cima para a esquerda com velx negativa
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e para direita
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra esquerda
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }
            }
            sumper1 = vperx1 + vpery1
            sumpar1 = vparx1 + vpary1

            console.log(`vperx1(vx1*senx):${vperx1.toFixed(2)},vparx1(vx1*cosx):${vparx1.toFixed(2)}`)
            console.log(`vpery1(vy1*cosx):${vpery1.toFixed(2)},vpary1(vx1*senx):${vpary1.toFixed(2)}`)

            console.log(`soma dos vetores na perpendicular: ${sumper1}`)
            console.log(`soma dos vetores na paralela: ${sumpar1}`)
            console.log('verificar:',sumper1**2 + sumpar1**2,vx1**2 + vy1**2)
            
            console.log('vperx1hor(vperx1*senx):',vperx1hor,'vperx1ver(vperx1*cosx):',vperx1ver)
            console.log('vparx1hor(vparx1*cosx):',vparx1hor,'vparx1ver(vperx1*senx):',vparx1ver)
            console.log('vpery1hor(vpery1*senx):',vpery1hor,'vpery1ver(vpery1*cosx):',vpery1ver)
            console.log('vpary1hor(vpary1*cosx):',vpary1hor,'vpary1ver(vpary1*senx):',vpary1ver)
            console.log('soma horizontal na perpendicular: ',vperx1hor + vpery1hor)
            console.log('soma vertical na perpendicular: ',vperx1ver + vpery1ver)
            if (vperx1hor + vpery1hor > 0) {
                console.log('a resultante perpendicular está pra direita')
                dirahor = 'right'
            }else{
                console.log('a resultante perpendicular está pra esquerda')
                dirahor = 'left'
            }
            if (vperx1ver + vpery1ver > 0) {
                console.log('a resultante perpendicular está pra cima')
                diraver = 'up'
            }else{
                console.log('a resultante perpendicular está pra baixo')
                diraver = 'down'
            }
            console.log('soma(verificação)',vperx1hor + vparx1hor + vpery1hor + vpary1hor,vx1)
            console.log('soma(verificação)',vperx1ver + vparx1ver + vpery1ver + vpary1ver,vy1)
            console.log('verificar velocidade perpendicular',((vpery1hor + vperx1hor)**2 + (vpery1ver + vperx1ver)**2)**(1/2))
        console.log('verificar velocidade paralela',((vpary1hor + vparx1hor)**2 + (vpary1ver + vparx1ver)**2)**(1/2))
     

            console.log('')
        //pokebola 2
        console.log('pokebola 1')
        console.log(`bola ${b}: vx:${vx2}, vy:${vy2}`)
        vperx2 = vx2*senx // decomposição de vx2 na direção perpendicular(vel relativa)
        vparx2 = vx2*cosx // decomposição de vx2 na direção paralela(vel conservativa)
        vpery2 = vy2*cosx // decomposição de vy2 na direção perpendicular(vel relativa)
        vpary2 = vy2*senx // decomposição de vy2 na direção paralela(vel conservativa)
        vperx2hor = vperx2*senx
        vperx2ver = vperx2*cosx
        vparx2hor = vparx2*cosx
        vparx2ver = vparx2*senx
        vpery2hor = vpery2*senx
        vpery2ver = vpery2*cosx
        vpary2hor = vpary2*cosx
        vpary2ver = vpary2*senx

        if (vx2 > 0) {
            if (leftball == b && downball == b || rightball == b && upball == b) {
            // decomposição de velperx2 = pra cima e pra direita
            if (vperx2ver < 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor < 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra baixo e pra direita
            if (vparx2ver > 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor < 0) {
                vparx2hor = -vparx2hor
            }
            }else{
            // decomposição de velperx2 = pra baixo e pra direita
            if (vperx2ver > 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor < 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra cima e pra direita
            if (vparx2ver < 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor < 0) {
                vparx2hor = -vparx2hor
            }
            }
        }else{
            if (leftball == b && downball == b || rightball == b && upball == b) {
                // decomposição de velperx2 = pra baixo e pra esquerda
                if (vperx2ver > 0) {
                    vperx2ver = -vperx2ver
                }
                if (vperx2hor > 0) {
                    vperx2hor = -vperx2hor
                }
                // decomposição de velparx2 = pra cima e pra esquerda
                if (vparx2ver < 0) {
                    vparx2ver = -vparx2ver
                }
                if (vparx2hor > 0) {
                    vparx2hor = -vparx2hor
                }
            }else{
            // decomposição de velperx2 = pra cima e pra esquerda
            if (vperx2ver < 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor > 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra baixo e pra esquerda
            if (vparx2ver > 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor > 0) {
                vparx2hor = -vparx2hor
            }
            }
        }

        console.log('downball',downball)
        console.log('upball',upball)
        console.log('leftball',leftball)
        console.log('rightball',rightball)
        console.log(b)
        console.log(rightball == b)
        if (downball == b) { 
            console.log('b é de baixo')
            if (vy2 > 0) {
                console.log('velocidade positiva')
                if (leftball == b) { // bola de baixo para a esquerda com velx positiva
                    console.log('bola esquerda')
                    // vely perpendicular positiva
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra direita
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra cima e pra esquerda
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de baixo para a direita com velx positiva
                    // vely perpendicular negativa
                    console.log('bola direita')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra esquerda
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra cima e pra direita
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }else{
                console.log('velocidade negativa')
                if (leftball == b) { // bola de baixo para a esquerda com velx negativa
                    // vely perpendicular negativa
                    console.log('bola esquerda')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra esquerda
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra direita
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de baixo para a direita com velx negativa
                    // vely perpendicular positiva
                    console.log('bola direita')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra direita
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra esquerda
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }
        }else{
            console.log('b é de cima')
            if (vy2 > 0) {
                console.log('velocidade positiva')
                if (rightball == b) { // bola de cima para a direita com velx positiva
                    // vely perpendicular positiva
                    console.log('bola direita')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra direita
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    console.log(vpery2hor)
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    console.log(vpery2hor < 0)
                    //decomposição de velpary2 = pra cima e pra esquerda
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de cima para a esquerda com velx positiva
                    // vely perpendicular negativa
                    console.log('bola esquerda')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra esquerda
                if (vpery2ver < 0) {
                    vpery2ver = -vpery2ver
                }
                if (vpery2hor > 0) {
                    vpery2hor = -vpery2hor
                }
                //decomposição de velpary2 = pra cima e pra direita
                if (vpary2ver < 0) {
                    vpary2ver = -vpary2ver
                }
                if (vpary2hor < 0) {
                    vpary2hor = -vpary2hor
                }
                }
            }else{
                console.log('velocidade negativa')
                if (rightball == b) { // bola de cima para a direita com velx negativa
                    // vely perpendicular negativa
                    console.log('bola direita')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra esquerda
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra direita
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de cima para a esquerda com velx negativa
                    // vely perpendicular positiva
                    console.log('bola esquerda')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e para direita
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra esquerda
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }
        }
        sumper2 = vperx2 + vpery2
        sumpar2 = vparx2 + vpary2

        console.log(`vperx2:${vperx2.toFixed(2)},vparx2:${vparx2.toFixed(2)}`)
        console.log(`vpery2:${vpery2.toFixed(2)},vpary2:${vpary2.toFixed(2)}`)

        console.log(`soma dos vetores na perpendicular: ${sumper2}`)
        console.log(`soma dos vetores na paralela: ${sumpar2}`)
        console.log('verificar:',sumper2**2 + sumpar2**2,vx2**2 + vy2**2)

        console.log('vperx2hor(vperx2*senx):',vperx2hor,'vperx2ver(vperx2*cosx):',vperx2ver)
            console.log('vparx2hor(vparx2*cosx):',vparx2hor,'vparx2ver(vperx2*senx):',vparx2ver)
            console.log('vpery2hor(vpery2*senx):',vpery2hor,'vpery2ver(vpery2*cosx):',vpery2ver)
            console.log('vpary2hor(vpary2*cosx):',vpary2hor,'vpary2ver(vpary2*senx):',vpary2ver)
        if (vperx2hor + vpery2hor > 0) {
            console.log('a resultante perpendicular está pra direita')
            dirbhor = 'right'
        }else{
            console.log('a resultante perpendicular está pra esquerda')
            dirbhor = 'left'
        }
        if (vperx2ver + vpery2ver > 0) {
            console.log('a resultante perpendicular está pra cima')
            dirbver = 'up'
        }else{
            console.log('a resultante perpendicular está pra baixo')
            dirbver = 'down'
        }
        console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor,vx2)
        console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver,vy2)
        console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
        console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))

        console.log('')
        // checar se efetivamente está ocorrendo uma colisão e definir o caso correspondente
        collidea = 0
        collideb = 0
        if (leftball == a && dirahor == 'right' || rightball == a && dirahor == 'left') {
            console.log('a bola a está para colidir')
            collidea++
        }
        if (leftball == b && dirbhor == 'right' || rightball == b && dirbhor == 'left') {
            console.log('a bola b está para colidir')
            collideb++
        }
        if (collidea == 1 && collideb == 1) {
            //window.alert('as pokebolas vão bater de frente')
            console.log('as pokebolas vão bater de frente')
            console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirbhor, dirbver)
            sumparhor1 = vpary1hor + vparx1hor
            sumparver1 = vpary1ver + vparx1ver
            console.log(sumparhor1, sumparver1)
            sumper2hor = sumper2*senx
            sumper2ver = sumper2*cosx
            if (dirbhor == 'left') {
                if (sumper2hor > 0) {
                    sumper2hor = -sumper2hor
                }
            }else{
                if (sumper2hor < 0) {
                    sumper2hor = -sumper2hor
                }
            }

            if (dirbver == 'down') {
                if (sumper2ver > 0) {
                    sumper2ver = -sumper2ver
                }
            }else{
                if (sumper2ver < 0) {
                    sumper2ver = -sumper2ver
                }
            }
            console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
            console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
            console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
            pokebolas[a].velx = sumparhor1 + sumper2hor
            pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
            console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirahor,diraver)
            sumparhor2 = vpary2hor + vparx2hor
            sumparver2 = vpary2ver + vparx2ver
            console.log(sumparhor2, sumparver2)
            sumper1hor = sumper1*senx
            sumper1ver = sumper1*cosx
            if (dirahor == 'left') {
                if (sumper1hor > 0) {
                    sumper1hor = -sumper1hor
                }
            }else{
                if (sumper1hor < 0) {
                    sumper1hor = -sumper1hor
                }
            }

            if (diraver == 'down') {
                if (sumper1ver > 0) {
                    sumper1ver = -sumper1ver
                }
            }else{
                if (sumper1ver < 0) {
                    sumper1ver = -sumper1ver
                }
            }
            console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
            console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
            console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
            pokebolas[b].velx = sumparhor2 + sumper1hor
            pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
        }else if (collidea == 1 || collideb == 1) {
            console.log('uma pokebola vai se chocar na outra')
            if (collidea == 1) {
            console.log('a bola a irá se chocar com a b')
            }else{
                console.log('a bola b irá se chocar com a a')
            }
                modsum1 = sumper1
                if (sumper1 < 0) {
                    modsum1 = -sumper1
                }
                
                modsum2 = sumper2
                if (sumper2 < 0) {
                    modsum2 = -sumper2
                }

                cango = false
                if (collidea == 1) {
                if (modsum1 > modsum2) {
                    cango = true
                    console.log('ok, realmente irá ocorrer a colisão')
                    console.log('a bola a terá sua velocidade reduzida, mantendo a direção')
                }else{
                    console.log('não ocorrerá a colisão')
                }
            }else{
                if (modsum2 > modsum1) {
                    cango = true
                    console.log('ok, realmente irá ocorrer a colisão')
                    console.log('a bola b terá sua velocidade reduzida, mantendo a direção')
                }else{
                    console.log('não ocorrerá a colisão')
                }
            }
            if (cango == true) {
            console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirahor, diraver)
            sumparhor1 = vpary1hor + vparx1hor
            sumparver1 = vpary1ver + vparx1ver
            //console.log(sumparhor1, sumparver1)
            sumper2hor = sumper2*senx
            sumper2ver = sumper2*cosx
            if (dirahor == 'left') {
                if (sumper2hor > 0) {
                    sumper2hor = -sumper2hor
                }
            }else{
                if (sumper2hor < 0) {
                    sumper2hor = -sumper2hor
                }
            }

            if (diraver == 'down') {
                if (sumper2ver > 0) {
                    sumper2ver = -sumper2ver
                }
            }else{
                if (sumper2ver < 0) {
                    sumper2ver = -sumper2ver
                }
            }
            console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
            console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
            console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
            pokebolas[a].velx = sumparhor1 + sumper2hor
            pokebolas[a].vely = (sumparver1 + sumper2ver)*-1

            console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirbhor,dirbver)
            sumparhor2 = vpary2hor + vparx2hor
            sumparver2 = vpary2ver + vparx2ver
            //console.log(sumparhor2, sumparver2)
            sumper1hor = sumper1*senx
            sumper1ver = sumper1*cosx
            if (dirbhor == 'left') {
                if (sumper1hor > 0) {
                    sumper1hor = -sumper1hor
                }
            }else{
                if (sumper1hor < 0) {
                    sumper1hor = -sumper1hor
                }
            }

            if (dirbver == 'down') {
                if (sumper1ver > 0) {
                    sumper1ver = -sumper1ver
                }
            }else{
                if (sumper1ver < 0) {
                    sumper1ver = -sumper1ver
                }
            }
            console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
            console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
            console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
            pokebolas[b].velx = sumparhor2 + sumper1hor
            pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
        }
            }else{
            console.log('ixi, aí acontece nada')
        }
        console.log('velocidade 1: ',sumpar1**2 + sumper1**2,vx1**2 + vy1**2)
        console.log('velocidade 2: ',sumpar2**2 + sumper2**2,vx2**2 + vy2**2)
        console.log('vx1:',vx1,'vy1:',vy1)
        console.log('resultante das velocidades vx1 e vy1:',(vx1**2 + vy1**2)**(1/2))
        console.log('resultante das velocidades // e ⟂:',(sumpar1**2 + sumper1**2)**(1/2))
        console.log('resultante sumpar1 e sumper2:',(sumpar1**2 + sumper2**2)**2)
        console.log('vx2:',vx2,'vy2:',vy2)
        console.log('resultante das velocidades vx2 e vy2:',(vx2**2 + vy2**2)**(1/2))
        console.log('resultante das velocidades // e ⟂:',(sumpar2**2 + sumper2**2)**(1/2))
        pokebolas[a].r = ''
        pokebolas[b].r = ''
        //loop = false
        }

        velx1 = pokebolas[a].velx
        vely1 = pokebolas[a].vely
        velx2 = pokebolas[b].velx
        vely2 = pokebolas[b].vely
        newcx = cx + velx1
        newcx2 = cx2 + velx2
        newcy = cy + vely1
        newcy2 = cy2 + vely2
        newdiffx = newcx - newcx2
        newdiffy = newcy - newcy2
        if (diffx**2 + diffy**2 < 1000 || newdiffx**2 + newdiffy**2 < 1000) {
            //console.log('NOW',diffx**2 + diffy**2)
            //console.log('NEXT',newdiffx**2 + newdiffy**2)
            }

        if (Math.round(newdiffx**2 + newdiffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('no, you wont')
            //loop = false
            dx = cx - cx2
            dy = cy,cy2
            //console.log('cx:',cx,'cx2:',cx2)
            //console.log('cy:',cy,'cy2;',cy2)

            //[(cx + vx) - (cx2 + vx2)]**2 + [(cy + vy) - (cy2 + vy2)]**2
            //[cx - cx2 + vx - vx2]**2 + [cy - cy2 + vy - vy2]**2
            //[life + difvex]**2 + [time + difvey]**2
            //life**2 + 2*life*difvex + difvex**2 + time**2 + 2*time*difvey + difvey**2
            //life**2 + time**2 - 676 + 2(life*difvex + time*difvey) + difvex**2 + difvey**2
            //           (c)                        (b)                       (a)
            life = cx - cx2
            time = cy - cy2
            difvex = velx1 - velx2
            difvey = vely1 - vely2
            aex = difvex**2 + difvey**2
            bex = 2*(life*difvex + time*difvey)
            cex = life**2 + time**2 - 676
            //console.log('difx:',life)
            //console.log('dify',time)
            //console.log('vx1',velx1)
            //console.log('vy1',vely1)
            //console.log('vx2',velx2)
            //console.log('vy2',vely2)
            //console.log('a',aex)
            //console.log('b',bex)
            //console.log('c',cex)
            delta = bex**2 - 4*aex*cex
            raiz1 = (-bex + delta**(1/2))/(2*aex)
            raiz2 = (-bex - delta**(1/2))/(2*aex)
            //console.log('delta',delta)
            //console.log('raiz1',raiz1)
            //console.log('raiz2',raiz2)
            res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
            //console.log('conferir:',res)

            
            //raiz2 = 0.001
            
            pokebolas[a].velx = velx1*raiz2
            pokebolas[a].vely = vely1*raiz2
            pokebolas[b].velx = velx2*raiz2
            pokebolas[b].vely = vely2*raiz2
            
            pokebolas[a].r = raiz2
            pokebolas[b].r = raiz2
        
        }
    }
        }
    }
    coll++
}

//criar a pokebola
function createPokebola(x,y,width,color,velx,vely,addornot,rangex,rangey) {
    if (addornot == true) {
    pokebolas.push({x:x,y:y,width:width,color:color,velx:velx,vely:vely,rangex:rangex,rangey:rangey})
    }
    c.beginPath()
    c.fillStyle = 'rgb(255,255,255)'
    c.arc(x,y,width,0,Math.PI,false)
    c.fill()
    c.stroke()
    
    c.beginPath()
    c.fillStyle = color
    c.arc(x,y,width,0,Math.PI,true)
    c.fill()
    c.stroke()

    y2 = y
    for ( i=0;i<width*0.1;i++) {
    c.beginPath()
    c.moveTo(x + width,y2)
    c.lineTo(x - width,y2)
    c.stroke()
    y2++
    }

    
    c.beginPath()
    c.arc(x,y,width*0.3,0,Math.PI*2,true)
    c.fillStyle = 'black'
    c.fill()
    c.stroke()

    c.beginPath()
    c.arc(x,y,width*0.2,0,Math.PI*2,true)
    c.fillStyle = 'white'
    c.fill()
    c.stroke()
    
}

//saber quando o mouse encosta em uma pokebola
window.addEventListener('mousemove',function(event) {
    
    canv = document.querySelector('canvas')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    //console.log('it moved')
    //console.log(event.x - dif/2,event.y)
    
    //console.log(wWidth,cWidth,dif/2)
    //console.log(((event.x - dif/2)/cWidth)*300)
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y - 80.48)/cHeight)*150
    //this.document.getElementById('x').innerText = mousex
    //this.document.getElementById('y').innerText = mousey
    //console.log(wHeight,cHeight)
    //console.log(event.y - 80.48)
    //console.log(((event.y - 80.48)/cHeight)*150)
    if (mousex < 300 && mousex > 0 && mousey < 150 && mousey > 0) {
        //this.document.getElementById('x').innerText += 'within'
    }
    
    /*
    for (p in pokebolas) {
        px = pokebolas[p].x
        pw = pokebolas[p].width
        py = pokebolas[p].y
        //console.log(px - pw, px + pw, py - pw, py + pw)
        if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
            //console.log('OWO')
            r = Math.random()*255
            g = Math.random()*255
            b = Math.random()*255
            //pokebolas[p].color = `rgb(${r},${g},${b})`
        }
    }*/
})

window.addEventListener('keyup',function(event) {
 console.log(event.key)
 if (event.key == 'p') {
    loop = false
 }
 if (event.key == 'b') {
    loop = true
 }
}) 