let radius = 2.3
let starty = 100
let x = 0
loop = true
addpulse = false
tot = 0
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 60
conts = []
conts2 = []
conts3 = []
timers = [{time: 0,ind:0,ind2:0}]
timers = [] // suspend wave automatic formation at manual
timers2 = [{time: 0,ind:0,ind2:0}]
timers2 = []
timers3 = []
amplitude = 40
advances = [{ads:[0],sty:[],amp:[]}]
for (ia = 0; ia <= contnumber; ia++) {
    advances[0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
    //advances[0].amp.push(amplitude)
}
//advances = []
advances2 = [{ads:[],sty:[],amp:amplitude}]
for (ia = 0; ia <= contnumber; ia++) { 
    advances2[0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
}
amps = [amplitude]
amps2 = [amplitude]
amps3 = []
vel = 0.2
vels = [vel]
direct = []
direct2 = []
direct3 = []
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:[],fixpos:[0],ys:[],ysfinal:[],go:[],start:[]})
    conts2.push({y:0,move:[],reflect:[],fixpos:[],advances:[]})
    conts3.push({y:0,move:[],reflect:[],fixpos:[],advances:[]})

    for (tic in timers) {
        conts[i].move.push(true)
    }
    for (tic in timers2) {
        conts2[i].move.push(true)
    }

    for (tic in timers3) {
        conts3[i].move.push(true)
    }
}

/*
for (i = 0; i < contnumber + contnumber/3;i++) {
    conts3.push({y:0,move:[]})
    for (tic in timers3) {
        conts3[i].move.push(true)
    }
}*/

type = 'pulse'
fixo = false
drawball = false
draw1 = true
man = true
manf = true
stroke = true
mousex = 'i'
mousey = 'i'
at = 0.8 // usar o at para estabelecer o alinhamento das contas no manual?
function animate() {
    space = 10
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))

    for (l in conts) {
        //conts[l].y = 0
        //conts2[l].y = 0
       // conts3[l].y = 0
    }

    if (addpulse == true) {
       // window.alert('FAZER ISSO AQUI')
        for (l in conts) {
            //conts[l].y = 10
            //conts2[l].y = 10
        }
    }

    x = space + 2*radius*(contnumber/3)
    if (mousey != 'i') {
    c.arc(x + radius,mousey,radius,0,2*Math.PI)
    }
    c.fillStyle = 'red'
    c.fill()
    c.strokeStyle = 'black'
    c.stroke()
    /*
    for (current in timers3) {
        x =  0
       // - (contnumber/3)*2*radius
    for (i = 0; i < contnumber + contnumber/3;i++) {
        
        canmove = true
        
        if (timers3[current].time - x*0.1 >= 0) {
            if (type == 'pulse') {
            if (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) <= 0) {
                if (direct3[current] == 'u') {
            y = (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                }else{
                    y = -(advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                }
            }else if(Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) >= 0 && conts3[i].move[current] == true){
                y = 0
                conts3[i].move[current] = false
            }
        }else{
            if (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
                if (direct3[current] == 'u') {
                    y = (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                        }else{
                            y = -(advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                        }
                }else{
                    y = 0
                    conts3[i].move[current] = false
                }
        }
        }else{
            y = 0
        }

        if (conts3[i].move[current] == false && type == 'pulse') {
            y = 0
        }
       
        conts3[i].y += y
        c.beginPath()
        c.arc(x + radius + space - (contnumber/3)*2*radius,y + starty,radius,0,2*Math.PI)
        c.fillStyle = 'purple'
        c.fill()
        c.strokeStyle = 'black'
        c.stroke()
        c.beginPath()
        //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
        c.fillStyle = 'white'
        c.fill()
        x+= 2*radius
        }
    }*/

        for (tic in conts2) {
            conts2[tic].ys = []
            conts[tic].ys = []
        }
    

         lastx = space + 2*radius*(contnumber)
         
         for (current in timers3) {
            advance = advances2[timers3[current].ind].ads[timers3[current].ind2]
            //advance = contnumber/3
            x =  2*(advance)*radius
            //x = 0
            // - (advance)*2*radius
         for (i = 0; i < contnumber;i++) {
             
             canmove = true
             
             if (timers3[current].time - x*0.1 >= 0) {
                 if (type == 'pulse') {
                 if (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) <= 0) {
                     if (direct3[current] == 'u') {
                 y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                     }else{
                         y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                     }
 
 
                     if (i == (contnumber/3)*2 - 1 && conts3[i].reflect[current] != false) {
                         
                         
                         conts3[i].reflect[current] = false
                         //window.alert('WHITE')
                         timers2.push({time:timers3[current].time,ind:timers3[current].ind,ind2:advances[timers3[current].ind].ads.length})
                         if (direct3[current] == 'd') {
                            direct2.push('u')
                         }else{
                            direct2.push('d')
                            //direct2.push('u')
                         }
                         //advances[timers2[current].ind].amp[contnumber - 1 - i].push(amplitude)
                         if (advances[timers3[current].ind].length == 1) {
                            window.alert('ON THE SIDELINES')
                         advances[timers3[current].ind].ads.push((contnumber/3)*2)
                         }else{
                            advances[timers3[current].ind].ads.push(advances[timers3[current].ind].ads[advances[timers3[current].ind].ads.length - 1] + (contnumber/3)*2)
                         }
                         vels.push(vel)
                         for (a in conts2) {
                             conts2[a].move.push(true)
                         }
                         //loop = false
                         
                         
                         }
                 }else if(Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) >= 0 && conts3[i].move[current] == true){
                     y = 0
                     if (man == false) {
                     conts3[i].move[current] = false
                     }
                 }else{
                        y = 0
                        //window.alert('EITA')
                    }
             }else{
                 if (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
                     if (direct3[current] == 'u') {
                         y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                             }else{
                                 y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                             }
                     }else{
                         y = 0
                         conts3[i].move[current] = false
                     }
             }
             }else{
                 y = 0
             }
     
            if (man == true) {
             c.fillStyle = 'black'
             if (conts3[i].move[current] == true) {
             if ((Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))).toFixed(1) == 0) {
                c.fillStyle = 'red'
             }else if((Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))).toFixed(2) == -1.00) {
                c.fillStyle = 'blue'
             }
             }

             c.font = '20px Arial'
             if (Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers3[current].time + 0.01 - x*0.1)) && timers3[current].time - x*0.1 >= 0 && advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
                c.fillStyle = 'yellow'
                y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*-1
                conts3[i].move[current] = false
                conts3[i].fixpos[current] = y
             }
            }

             if (conts3[i].move[current] == false && type == 'pulse') {
                if (man == true) {
                if (direct3[current] == 'u') {
                    y = conts3[i].fixpos[current]
                }else{
                    y = -conts3[i].fixpos[current] 
                }
            }else{
                y = 0
            }
            }

            conts3[i].y = y //+ advances2[timers3[current].ind].sty
            //conts3[i].fixpos[current] = y + advances2[timers3[current].ind].sty

            // c.fillText('I',x + radius -2*(advance)*radius + space,120)
             c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             
             if (draw1 == true && i != contnumber/3) {
             c.arc(x + radius -2*(advance)*radius + space,y + advances2[timers3[current].ind].sty[i],radius,0,2*Math.PI)
             }
             
             //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
             c.fillStyle = 'cyan'
             c.fill()
             c.strokeStyle = 'black'
             c.stroke()
             c.beginPath()
             //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
             c.fillStyle = 'white'
             c.fill()
             x+= 2*radius
             }
         }

         /*
        for (current in timers) {
           
            x = space + 2*radius*(contnumber/3) //here
        for (i = 0; i < (contnumber/3)*2;i++) {

            if (conts[i + contnumber/3] != undefined) {
            
            canmove = true
            
            if (timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1 >= 0) {
                if (type == 'pulse') {
                if (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1)) <= 0) {
                    if (direct[current] == 'u') {
                y = (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }else{
                        y = -(advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }
                }else if(Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1)) >= 0 && conts[i + contnumber/3].move[current] == true){
                    y = 0
                    if (man == false){
                    conts[i + contnumber/3].move[current] = false
                    }
                }
            }else{
                if (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03 >= 0) {
                    if (direct[current] == 'u') {
                        y = (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                            }else{
                                y = -(advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                            }
                    }else{
                        y = 0
                        conts[i + contnumber/3].move[current] = false
                    }
            }
            }else{
                y = 0
            }
    
            if (man == true) {
                c.fillStyle = 'black'
                if (conts[i + contnumber/3].move[current] == true) {
                if ((Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(1) == 0) {
                   c.fillStyle = 'red'
                }else if((Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(2) == -1.00) {
                   c.fillStyle = 'blue'
                   conts[i + contnumber/3].move[current] = false
                   conts[i + contnumber/3].fixpos[current] = y
                }
                }
    
               }
    
                if (conts[i + contnumber/3].move[current] == false && type == 'pulse') {
                   if (man == true) {
                   if (direct[current] == 'u') {
                       y = conts[i + contnumber/3].fixpos[current]
                   }else{
                       y = -conts[i + contnumber/3].fixpos[current] 
                       //y = 0
                   }
               }else{
                   y = 0
               }
               }

               //c.fillText('I',x + radius, 120)
           
            conts[i + contnumber/3].y += y
            c.beginPath()
            
            if (draw1 == true && i + contnumber/3 != contnumber/3) {
            c.arc(x + radius,y + advances[timers[current].ind].sty[i + contnumber/3],radius,0,2*Math.PI)
            }
            
            c.fillStyle = 'blue'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }
        }
        }
        */



        x = 0
        lastx = space + 2*radius*(contnumber)

    
        lastx = space + 2*radius*(contnumber)
        /*
        for (current in timers2) {
            //advance = conts2[contnumber/3 + i].advances[current]
            advance = advances[timers2[current].ind].ads[timers2[current].ind2]
            x =  2*(advance)*radius
            //x = 0
            // - (advance)*2*radius
         for (i = 0; i < (contnumber/3)*2;i++) {
             
             canmove = true
             if (timers2[current].time - x*0.1 >= 0) {
                 if (type == 'pulse') {
                 if (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) <= 0) {
                     if (direct2[current] == 'u') {
                 y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }else{
                         y = -(advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }
        
        
                     if (i == (contnumber/3)*2 - 1 && conts2[contnumber/3 + i].reflect[current] != false) {
                         
                        conts2[contnumber/3 + i].reflect[current] = false
                        //window.alert('CYAN')
                        //console.log('CYAN',current,advances[timers2[current].ind])
                        //timers3.push({time:timers2[current].time,ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})
                        //timers3.push(timers2[current].time)
                        if (direct2[current] == 'd') {
                        direct3.push('u')
                        }else{
                            direct3.push('d')
                            //direct3.push('u')
                        }
                        amps3.push(amplitude)
                        
                       // console.log('WHAT',advances2[timers2[current].ind].ads.length)
                        if (advances2[timers2[current].ind].ads.length == 0) {
                            advances2[timers2[current].ind].ads.push((contnumber/3))
                            //console.log('WHAT2',advances2[timers2[current].ind].ads.length)
                        }else{
                            //Mwindow.alert('PUSH')
                            //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                            advances2[timers2[current].ind].ads.push(advances2[timers2[current].ind].ads[advances2[timers2[current].ind].ads.length - 1] + (contnumber/3)*2)
                        }
                        vels.push(vel)
                        for (a in conts3) {
                            conts3[a].move.push(true)
                        }
                        //loop = false
                         
                         }
                 }else if(Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) >= 0 && conts2[contnumber/3 + i].move[current] == true){
                    y = 0
                    if (man == false) {
                   conts2[contnumber/3 + i].move[current] = false
                    }
                }else{
                    y = 0
                    //window.alert('EITA')
                }
        
                  
             }else{
                 if (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
                     if (direct2[current] == 'u') {
                         y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                             }else{
                                 y = -(advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                             }
                     }else{
                         y = 0
                         conts2[contnumber/3 + i].move[current] = false
                     }
             }
             }else{
                 y = 0
             }
        
             if (man == true) {
             c.fillStyle = 'black'
            if (conts2[contnumber/3 + i].move[current] == true) {
            if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(1) == 0) {
               c.fillStyle = 'red'
            }else if((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00) {
               c.fillStyle = 'blue'
            }
            }
        
            c.font = '20px Arial'
            if (Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time + 0.01 - x*0.1)) && timers2[current].time - x*0.1 >= 0 && advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
               c.fillStyle = 'yellow'
               y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*-1
               conts2[contnumber/3 + i].move[current] = false
               conts2[contnumber/3 + i].fixpos[current] = y //+ advances[timers2[current].ind].sty[contnumber/3 + i]
            }
        }
        
             if (conts2[contnumber/3 + i].move[current] == false && type == 'pulse') {
              // y = 0
              if (man == true){
              if (direct2[current] == 'u') {
                 y = conts2[contnumber/3 + i].fixpos[current]
              }else{
                y = -conts2[contnumber/3 + i].fixpos[current]
              }
              }else{
              y = 0
              }
             }
            
             conts2[contnumber/3 + i].y = y + advances[timers2[current].ind].sty[contnumber/3 + i]
             conts2[contnumber/3 + i].ys.push(conts2[contnumber/3 + i].y)
             
             //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
             
             c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             if (draw1 == true && contnumber/3 + i != contnumber - 1) {
             c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers2[current].ind].sty[20],radius,0,2*Math.PI)
             }else{
                c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
             }
             
             
             //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
             c.fillStyle = 'white'
             c.fill()
             c.strokeStyle = 'black'
             c.stroke()
             c.beginPath()
             //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
             c.fillStyle = 'white'
             c.fill()
             x+= 2*radius
             }
         }
         */

         document.getElementById('t3').innerText = 'numero de ondas:' + timers.length
         for (current in timers) {
            //advance = conts[contnumber/3 + i].advances[current]
            advance = advances[timers[current].ind].ads[timers[current].ind2]
            x =  2*(advance)*radius
            //x = 0
            // - (advance)*2*radius
         for (i = 0; i < (contnumber/3)*2;i++) {
             
             canmove = true
             if (timers[current].time - x*0.1 >= 0) {
                 if (type == 'pulse') {
                 if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) <= 0) {
                    if (conts[contnumber/3 + i].start[current] == undefined) {
                        conts[contnumber/3 + i].start[current] = {time:timers[current].time}
                    }
                     if (direct[current] == 'u') {
                 y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }else{
                         y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }
        
                     /*
                     if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                         
                        conts[contnumber/3 + i].reflect[current] = false
                        //window.alert('CYAN')
                        //console.log('CYAN',current,advances[timers[current].ind])
                        //timers3.push({time:timers[current].time,ind:timers[current].ind,ind2:advances2[timers[current].ind].ads.length})
                        //timers3.push(timers[current].time)
                        if (direct[current] == 'd') {
                        direct3.push('u')
                        }else{
                            direct3.push('d')
                            //direct3.push('u')
                        }
                        amps3.push(amplitude)
                        
                       // console.log('WHAT',advances2[timers[current].ind].ads.length)
                        if (advances2[timers[current].ind].ads.length == 0) {
                            advances2[timers[current].ind].ads.push((contnumber/3))
                            //console.log('WHAT2',advances2[timers[current].ind].ads.length)
                        }else{
                            //Mwindow.alert('PUSH')
                            //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                            advances2[timers[current].ind].ads.push(advances2[timers[current].ind].ads[advances2[timers[current].ind].ads.length - 1] + (contnumber/3)*2)
                        }
                        vels.push(vel)
                        for (a in conts3) {
                            conts3[a].move.push(true)
                        }
                        //loop = false
                         
                         }*/
                 }else if(Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) >= 0 && conts[contnumber/3 + i].move[current] == true){
                    y = 0
                    if (man == false) {
                   conts[contnumber/3 + i].move[current] = false
                    }
                }else{
                    y = 0
                    //window.alert('EITA')
                }
        
                /*
                 if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00 && timers[current].time - x*0.1 >= 0 && conts[contnumber/3 + i].move[current] != false) {
                    //window.alert('STOP')
                   conts[contnumber/3 + i].fixpos[current] = y
                    conts[contnumber/3 + i].move[current] = false
                 }*/
                  
             }else{
                 if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
                     if (direct[current] == 'u') {
                         y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                             }else{
                                 y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                             }
                     }else{
                         y = 0
                         conts[contnumber/3 + i].move[current] = false
                     }
             }
             }else{
                 y = 0
             }
        
             if (manf == true) {
             c.fillStyle = 'black'
            if (conts[contnumber/3 + i].move[current] == true) {
            if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(1) == 0) {
               c.fillStyle = 'red'
            }else if((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00) {
               c.fillStyle = 'blue'
            }
            }
        
            c.font = '20px Arial'
            if (Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers[current].time + 0.01 - x*0.1)) && timers[current].time - x*0.1 >= 0 && advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
               c.fillStyle = 'yellow'
               y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*-1
               if (i == 4 ) {
                if (conts[contnumber/3 + i].go[current - 1] != false) {
                    conts[contnumber/3 + i].move[current] = false
                }
               }else{
                 conts[contnumber/3 + i].move[current] = false
              }
               conts[contnumber/3 + i].fixpos[current] = y //+ advances[timers[current].ind].sty[contnumber/3 + i]
            }
        }
        
             if (conts[contnumber/3 + i].move[current] == false && type == 'pulse') {
              // y = 0
              if (manf == true){
              if (direct[current] == 'u') {
                 y = conts[contnumber/3 + i].fixpos[current]
              }else{
                y = -conts[contnumber/3 + i].fixpos[current]
              }
              }else{
              y = 0
              }
             }
            
             conts[contnumber/3 + i].y = y + advances[timers[current].ind].sty[contnumber/3 + i]
             conts[contnumber/3 + i].a = i //(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03
             conts[contnumber/3 + i].ys.push(conts[contnumber/3 + i].y)

             if (i == 4) {
                if (conts[24].start[current] != undefined) {
                document.getElementById('t').innerText = conts[24].start[current].time + ' | ' + conts[contnumber/3 + i].go
                }
             }
             
             //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
             
             c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             //if (timers[current].delete == undefined) {
            if (current > 0) {
                if (i == 4) {
             eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
                     //window.alert('ADD NOW')
                     //timers[current].time = conts[24].start[current - 1].time
                }
                //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
                if (eq == false) {
                conts[contnumber/3 + i].go[current - 1] = false
                }else{ // if (conts[contnumber/3 + i].go[current - 1] == false){
                    add = true
                    for (dom = current - 2; dom >= 0; dom--){
                        if (conts[contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    //if (add == true) {
                    if (conts[contnumber/3 + i].go[current - 1] != true) {
                        timers[current].time = conts[24].start[current - 1].time
                    
                        conts[contnumber/3 + i].go[current - 1] = true
                        timers[current].time = conts[24].start[current - 1].time
                        document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                    }
                        //window.alert('ADD NOW')
                    //}
                }/*else{
                    add = true
                    for (dom = current - 2; dom >= 0; dom--){
                        if (conts[contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    if (add == true) {
                        //conts[contnumber/3 + i].go[current - 1] = 'none'
                        //timers[current].time = conts[24].start[current - 1].time
                        //window.alert('ADD NOW')
                    }
                }*/
                //}
             }
             //conts[contnumber/3 + i].go[current - 1] = eq
             }
             if (draw1 == true && contnumber/3 + i != contnumber - 1) { // && conts[contnumber/3 + i].ys[current - 1] == conts[contnumber/3 + i].ysfinal[current - 1]) {
                if (i != 4) {// && conts[24].go[current - 1] != true) {
              c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                }else{
                    //if (conts[contnumber/3 + i].go[current] != true && conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != 'none') {
                    if (conts[contnumber/3 + i].go[current - 1] != false) {
                        c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                    }
                   // }
                }
             }else{
                c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
             }
            //}
             
             
             //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
             c.fillStyle = 'white'
             if (contnumber/3 + i == 24) {
                c.fillStyle = 'black'
                c.fill()
             }
             //c.fill()
             c.strokeStyle = 'black'
             c.stroke()
             c.beginPath()
             //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
             c.fillStyle = 'white'
             x+= 2*radius
             }
         }  
        
        c.beginPath()
        x = 0 //+ (contnumber/3)*radius
        for (i = contnumber/3; i < contnumber; i++) {
            if (conts[i].ysfinal.length > 0) {
            //c.arc(x + radius + space + 2*radius*(contnumber/3),conts[i].ysfinal[conts[i].ysfinal.length - 1],radius,0,2*Math.PI)
            c.stroke()
            c.fill()
            x+= 2*radius
            }
        }
      /*
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            c.arc(x + radius + space,130,radius,0,2*Math.PI)
            c.fillStyle = 'yellow'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            x+= 2*radius
            }
            for (i = 0; i < contnumber/3;i++) {
                c.beginPath()
                c.arc(x + radius + space,130,radius,0,2*Math.PI)
                c.fillStyle = 'pink'
                c.fill()
                c.strokeStyle = 'black'
                c.stroke()
                x+= 2*radius
                }
                for (i = 0; i < contnumber/3;i++) {
                    c.beginPath()
                    c.arc(x + radius + space,130,radius,0,2*Math.PI)
                    c.fillStyle = 'green'
                    c.fill()
                    c.strokeStyle = 'black'
                    c.stroke()
                    x+= 2*radius
                    }
                    */
        
                    
        contsall = []
        for (cont in conts2) {
          contsall.push({index:cont,y:conts2[cont].y + conts3[cont].y})
        }
        
        x = 0
        
        for (i = 0; i < (contnumber/3);i++) {
            if (i < (contnumber/3) - 1) {
            c.beginPath()
            c.moveTo(x + radius + space,contsall[i + contnumber/3].y + starty)
            //c.lineTo(0,9)
            x+= 2*radius
            c.lineTo(x + radius + space,contsall[i + contnumber/3 + 1].y + starty)
            if (stroke == true) {
            c.stroke()
            }
            }
            }
            
            x = 0
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            if (i == (contnumber/3 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
               // c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i + contnumber/3].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                //c.stroke()
                c.beginPath()
            }
           // if (contsall[i].y + starty > starty) {
                //loop = false
           // }
            if (drawball == true) {
            c.arc(x + radius + space,contsall[i + contnumber/3].y + starty,radius,0,2*Math.PI)
            }
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            if (drawball == true) {
            c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            }
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }

        for (k in timers){
            timers[k].time += 0.05
        }
        for (k in timers2){
            timers2[k].time += 0.1
        }
        for (k in timers3){
            timers3[k].time += 0.1
        }

if (loop == true) {
requestAnimationFrame(animate)
}
}
animate()

go = true
/*
window.addEventListener('keyup',function (event) {
    if (event.key == 'm') {
    //this.window.alert('NOW')
    timers.push({time:0,ind:1})
    timers2.push({time:0, ind:1,ind2:0})
    direct.push('u')
    direct2.push('u')
   // advances[timers[current].ind].amp.push(amplitude)
    amps.push(amplitude)
    advances.push({ads:[0]})
    advances2.push({ads:[]})
    vels.push(vel)
    for (a in conts) {
        conts[a].move.push(true)
    }
    for (a in conts2) {
        conts2[a].move.push(true)
    }
    }

    if (event.key == 'e') {
        go = true

        //setTimeout(sayHello, 1000)
    }

    function sayHello() {
        window.alert('Hello')
    }

})*/


window.addEventListener('keyup',function (event) {
    if (event.key == 'o') { // add set of waves
        addwave()
        tot++
}
})

function addwave() {
    //timers.push({time:0,ind:tot,ind2:0})
    //console.log('mousey:',mousey)
    if (tot > 0) {
        //console.log('first beed y position',conts[20].ys[tot - 1])
        ampcont1 = conts[20].ys[tot - 1] - mousey
        ampman = conts[20].ysfinal[tot - 1] - mousey
        //ampman = starty - mousey
        }else{
            ampman = starty - mousey
            ampcont1 = starty - mousey
        }
        console.log('amplitude',ampman)
        // determinar o at a partir da posição da última conta (contnumber - 1)
        //  y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
        // y = ampman - i*at*ampman*0.03
        // ampman - 40*at*ampman*0.03 = 0
        // ampman = 40*at*ampman*0.03
        // at = ampman/(40*ampman*0.03)
        at = (starty - mousey)/(20*(starty - mousey)*0.03)
        //at = 0.1
        // prever o y máximo de todas as contas ()
        //x = 2*(advance)*radius
        x = space + (contnumber/3)*radius
        for (i = contnumber/3; i < contnumber; i++) {
            //console.log(i,':', ampman - (contnumber - i)*at*ampman*0.03 + starty)
            yat = starty - ampman - (contnumber - i)*at*ampman*0.03
            //conts[i].ysfinal.push(starty - ampman - (contnumber - i)*at*ampman*0.03)
            x+= 2*radius
        }


    timers.push({time:0, ind:tot,ind2:0})
    if (tot > 0) {
    advances.push({ads:[0],sty:[],amp:[]})
    }
    
    //console.log('tot',tot)
    for (ia = 0; ia <= contnumber - 1; ia++) { // adicionar sty para cada conta
        //if (conts[ia].fixpos.length > 0) {

            if (tot > 0 ) {
                if (ia > 20) { // ia >= 20
                styman = conts[ia].ysfinal[tot - 1]
                //styman = 100 
                }else if (ia  == 20){
                    styman = conts[ia].ysfinal[tot - 1]
                }else{
                    styman = 100 
                }
                advances[tot].sty.push(styman)// + starty)
                if (ia == 0) {
                    //console.log('styman:',styman)
                }
                }else{
                    //console.log('tot igual a 0')
                    styman = 100 // o sty já está definido para primeira onda
                }
                if (ia >= 20 && ia <= 40) {
                //console.log(conts[ia].ys[tot])
                //console.log(conts[ia].ysfinal[tot])
                // para diferentes stys as amps são diferentes
                // conts[ia].ysfinal[tot] = amp - ia*at*amp*0.03 + styman
                // y - styman = amp(1 - ia*at*0.03)
                // amp = (y - styman)/(1 - ia*at*0.03))
                //console.log('STAND',1 - ia*at*0.03)
                ampadd = (conts[ia].ysfinal[tot] - 100)/(1 - ia*at*0.03)
                //console.log(ampadd)
                //advances[tot].amp.push(Math.abs(conts[ia].ysfinal[tot] - starty))
                //advances[tot].amp.push(ampadd)
                //conts[ia].ysfinal[tot] = styman + ampman
                // ampman = conts[ia].ysfinal[tot] - styman 
                console.log(ia, 'sty',styman,'ysfinal',conts[ia].ysfinal[tot],'amp',Math.abs(styman - conts[ia].ysfinal[tot]))
                //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                conts[ia].ysfinal.push(styman - ampman + (ia - contnumber/3)*at*ampman*0.03)
                advances[tot].amp.push(Math.abs(ampman))
                }else if (ia < 20){
                        //advances[tot].amp.push(Math.abs(ampcont1))
                        //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                        advances[tot].amp.push(0)
                }
       //}
    }
    if (tot > 0) {
    advances2.push({ads:[],sty:[],amp:amplitude})
    //window.alert(cont)
    for (ia = 0; ia <= contnumber - 1; ia++) {
        //if (conts3[ia].fixpos.length > 0) {
        advances2[tot].sty.push(conts[ia].fixpos[0] + starty)
        //}
    }
    timers[tot - 1].delete = true
    console.log('já terminou de fazer a última onda?',conts[39].ysfinal[tot - 1] == conts[39].ys[tot - 1])
}
    if (ampcont1 > 0) {
    direct.push('u')
    }else{
        direct.push('d')
    }
    vels.push(vel)
    for (a in conts) {
        conts[a].move.push(true)
        conts[a].fixpos.push(0)
    }
    for (a in conts2) {
        conts2[a].move.push(true)
        conts2[a].fixpos.push(0)
    }
    for (a in conts3) {
        conts3[a].move.push(true)
        conts3[a].fixpos.push(0)
    }
}

mousex = 'i'
mousey = 'i'
find = 0
ir = true
window.addEventListener('mousemove',function(event) {
    if (go == true) {
    if (mousey != 'i') {
    if (ir == true) {
        ir = false
    setTimeout(function () {
        ir = true
        //addwave()
        //tot++
    }, 800)
}
    }

}
})

window.addEventListener('mousemove',function(event) {
    if (go == true) {
    c.clearRect(0,0,300,150)
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y)/cHeight)*150
    
        prevx = String(this.document.getElementById('x').innerText)
        this.document.getElementById('ev').innerText = prevx
        prevy = String(this.document.getElementById('y').innerText)
        this.document.getElementById('ev2').innerText = prevy
        this.document.getElementById('x').innerText = mousex
        this.document.getElementById('y').innerText = mousey
       
    }
})
}



window.addEventListener('keydown',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p') {
        loop = false
    }
    if (event.key == 'm') {
        //this.window.alert('m')
        for (l in conts) {
            //conts[l].move = true
            conts[l].y = 0
        }
     
    }
}) 