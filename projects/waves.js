let radius = 2.3
let starty = 80
let x = 0
loop = true
addpulse = false
tot = 0
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 129
conts = []
mouse = 'up'
mouseprev = starty
mousefollow = false
conts2 = []
conts3 = []
timers = [{time: 0,ind:0,ind2:0}]
timers = [] // suspend wave automatic formation at manual
timers2 = [{time: 0,ind:0,ind2:0}]
timers2 = [[{a: 'b'}]]
timers2 = []
timers3 = []
amplitude = 40
advances = [[{ads:[0],sty:[],amp:[]}]]
for (ia = 0; ia <= contnumber; ia++) {
    advances[0][0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
    //advances[0].amp.push(amplitude)
}
//advances = []
advances2 = [] //[{ads:[],sty:[],amp:[]}]]
for (ia = 0; ia <= contnumber; ia++) { 
    //advances2[0][0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
}
amps = [amplitude]
amps2 = [amplitude]
amps3 = []
vel = 2
tension = 0.3
vels = [vel]
direct = []
direct2 = []
direct3 = []
yf = []
ysep = []
for (i = 0; i < contnumber; i++) {
    yf.push(0)
}
for (i = 0; i < contnumber;i++) {
    if (i == contnumber/3 + 1 || i == contnumber/3 + 2){ // || i == contnumber/3 + 2 || i == contnumber/3 + 3) {
        conts.push({y:0,move:[],fixpos:[0],ys:[],ysfinal:[],go:[],start:[],time:[],yo:starty,running:[true]})
    }else if (i > contnumber/3 && i < (contnumber/3)*2){
        conts.push({y:0,move:[],fixpos:[0],ys:[-100],ysfinal:[],go:[],start:[],time:[],yo:starty,running:[false]})
    }else{
        conts.push([])
    }
    //conts2[0].push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal:[],go:[],start:[],time:[],advances:[]}) // essential
    conts3.push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal: [],go:[],start:[],advances:[]})

    if (i > contnumber/3 && i < (contnumber/3)*2) {
    for (tic in timers) {
        conts[i].move.push(true)
    }
    for (tic in timers2) {
        //conts2[0][i].move.push(true)
    }

    for (tic in timers3) {
        conts3[i].move.push(true)
    }
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
fixo = true
drawball = false
draw1 = true
man = true
manf = true
stroke = true
mousex = 'i'
mousey = 'i'
//at = 0.8 // usar o at para estabelecer o alinhamento das contas no manual?
function animate() {
    space = 300 -(contnumber/3 - 1)*radius*2*2 - 40
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
    //c.arc(x + radius,mousey,radius,0,2*Math.PI)
    }
    c.fillStyle = 'red'
    c.fill()
    c.strokeStyle = 'black'
    //c.stroke()
    

        for (tic in conts2) {
            conts2[tic].ys = []
            //conts[tic].ys = []
        }

        x = 0
        lastx = space + 2*radius*(contnumber)

    
        lastx = space + 2*radius*(contnumber)

         //document.getElementById('t3').innerText = 'numero de ondas:' + timers.length
            for (current in timers) {
                //advance = conts[contnumber/3 + i].advances[0][current]
                advance = advances[0][current].ads[0]
                x =  2*(advance)*radius
                hiro = 0
                //x = 0
                // - (advance)*2*radius
             for (i = 1; i < contnumber/3;i++) {
                 // y = hiro 
                 canmove = true
                 if (i == 3 && current == 0) {
                    //console.log('biranga',conts[23].time[0])
                    //console.log(-(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)))
                 }
                 if (conts[contnumber/3 + i].time[current] - hiro >= 0) { // Math.sin(-vel*(conts[contnumber/3 + i].time[current]  - hiro)) = 0 
                     if (type == 'pulse') {
                     if (advances[0][current].amp[contnumber/3 + i] - (advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) <= 0) {
                        if (conts[contnumber/3 + i].start[current] == undefined) {
                            if (i > 0 && i < (contnumber/3)*2) { //(i == 4 || i == 3 || i == 2) {
                            conts[contnumber/3 + i].start[current] = {time:conts[contnumber/3 + i].time[current]}
                            }
                            //console.log('terminou', conts[contnumber/3 + i].time[current], vels[current]*(conts[contnumber/3 + i].time[current] - hiro), hiro)
                        }
                         if (direct[current] == 'u') {
                            //console.log('UP')
                     y = (advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }else{
                            //console.log('DOWN')
                             y = -(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }
            
                         /*
                         if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                             
                            conts[contnumber/3 + i].reflect[current] = false
                            //window.alert('CYAN')
                            //console.log('CYAN',current,advances[0][current])
                            //timers3.push({time:conts[contnumber/3 + i].time[current],ind:current,ind2:advances[0]2[current].ads.length})
                            //timers3.push(conts[contnumber/3 + i].time[current])
                            if (direct[current] == 'd') {
                            direct3.push('u')
                            }else{
                                direct3.push('d')
                                //direct3.push('u')
                            }
                            amps3.push(amplitude)
                            
                           // console.log('WHAT',advances[0]2[current].ads.length)
                            if (advances[0]2[current].ads.length == 0) {
                                advances[0]2[current].ads.push((contnumber/3))
                                //console.log('WHAT2',advances[0]2[current].ads.length)
                            }else{
                                //Mwindow.alert('PUSH')
                                //console.log(advances[0]2[timers3.length - 2] + (contnumber/3)*2)
                                advances[0]2[current].ads.push(advances[0]2[current].ads[advances[0]2[current].ads.length - 1] + (contnumber/3)*2)
                            }
                            vels.push(vel)
                            for (a in conts3) {
                                conts3[a].move.push(true)
                            }
                            //loop = false
                             
                             }*/
                     }else if(Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) >= 0 && conts[contnumber/3 + i].move[current] == true){
                        y = 0
                        if (man == false) {
                       conts[contnumber/3 + i].move[current] = false
                        }
                    }else{
                        y = 0
                        //window.alert('EITA')
                    }
            
                    /*
                     if ((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(2) == -1.00 && conts[contnumber/3 + i].time[current] - hiro >= 0 && conts[contnumber/3 + i].move[current] != false) {
                        //window.alert('STOP')
                       conts[contnumber/3 + i].fixpos[current] = y
                        conts[contnumber/3 + i].move[current] = false
                     }*/
                      
                 }else{
                     if (advances[0][current].amp[contnumber/3 + i] - (advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03 >= 0) {
                         if (direct[current] == 'u') {
                             y = (advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                                 }else{
                                     y = -(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
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
                if ((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(1) == 0) {
                   c.fillStyle = 'red'
                }else if((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(2) == -1.00) {
                   c.fillStyle = 'blue'
                }
                }
            
                c.font = '20px Arial'
                if (Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) < Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] + 0.01 - hiro)) && conts[contnumber/3 + i].time[current] - hiro >= 0 && advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03 >= 0) {
                   c.fillStyle = 'yellow'
                   y = (advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*-1
                   if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
                    if (conts[contnumber/3 + i].go[current - 1] != false) {
                        conts[contnumber/3 + i].move[current] = false
                        //if (i == 3 && current == 0)
                        //console.log('N ERA PRA SE FAZER ISSO')
                    }
                   }else{
                     conts[contnumber/3 + i].move[current] = false
                 }
                   conts[contnumber/3 + i].fixpos[current] = y //+ advances[0][current].sty[contnumber/3 + i]
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
                
                 if (i == 3 && current == 0){
                    //console.log('EIK',y)
                 }
                 conts[contnumber/3 + i].y = y + advances[0][current].sty[contnumber/3 + i]
                 conts[contnumber/3 + i].a = i //(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03
    
                 add = true
                 for (dom = current - 2; dom >= 0; dom--){
                     if (conts[contnumber/3 + i].go[dom] == false) {
                         add = false
                         //window.alert('n adicionar true em',current - 1)
                     }
                 }

                 //conts[22].running[0] = true
                 if (current == 0 && i == 2) {
                    //conts[22].running[0] = true
                 }
                 if (current > 0 || i == 1 || i == 2) { 
                 if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
                 if (add == true && conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != true) {
                    conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
                 }else if (conts[contnumber/3 + i].go[current] == true){
                 conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].ysfinal[current]
                 }else{
                    conts[contnumber/3 + i].ys[current] = -100
                 }
                }else{
                    conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
                }
            }else{
                //if (i == 2)
                //console.log(conts[contnumber/3 + i - 1].ys[0] == conts[contnumber/3 + i - 1].ysfinal[0],conts[contnumber/3 + i].ys[0])
                if (i == 3) {
                    //console.log('why',conts[contnumber/3 + i - 1].ys[0] == conts[contnumber/3 + i - 1].ysfinal[0])
                }
                if (conts[contnumber/3 + i - 1].ys[0] != undefined && conts[contnumber/3 + i - 1].ysfinal[0] != undefined) {
                    // console.log(conts[contnumber/3 + i - 1].ys[0])
                    fstperc = Math.abs(conts[contnumber/3 + i - 1].ys[0] - advances[0][0].sty[contnumber/3 + i - 1])
                    secperc = Math.abs(conts[contnumber/3 + i - 1].ysfinal[0] - advances[0][0].sty[contnumber/3 + i - 1])
                    finalperc = fstperc/secperc

                            cond = conts[contnumber/3 + i - 1].running[0] == true && finalperc > tension && conts[contnumber/3 + i].ys[0] == -100
                        
                            //console.log(contnumber/3 + i - 1,':', advances[0][0].sty[contnumber/3 + i - 1], '=>',conts[contnumber/3 + i - 1].ysfinal[0])
                        //console.log(conts[contnumber/3 + i - 1].ys[0])
                        //console.log('has moved: ',fstperc)
                        ////console.log('still remains: ',secperc)
                        //console.log('final percento:',finalperc)
                        
                if (cond == true) {
                        //if (i == 2 || i == 3) {
                            //console.log('hey yyou',contnumber/3 + i,hiro,advances[0][0].sty[contnumber/3 + i])
                            y = 0
                            
                            conts[contnumber/3 + i].ys[0] = advances[0][0].sty[contnumber/3 + i]
                            conts[contnumber/3 + i].time[0] = hiro
                            conts[contnumber/3 + i].running[0] = true
                            //console.log(contnumber/3 + i,':',conts[contnumber/3 + i].running[0])
                            if (i == contnumber/3 - 1) {
                            //console.log('add timers2')
                            
                            //if (fixo == false) {
                              //addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],direct[current],0)
                            //}else{
                                //if (direct[current] == 'u') {
                                    //addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],'d',(contnumber/3))
                                //}else{
                                   // addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],'u',(contnumber/3))
                                }
                            //}
                                //addTimers(timers2,0,advances[0][current].amp[20],'u',0)
                            //}
                            
                       // }
                }else if (conts[contnumber/3 + i - 1].running[0] == true && finalperc > tension) {//(((conts[contnumber/3 + i - 1].ys[0])).toFixed(3) == ((conts[contnumber/3 + i - 1].ysfinal[0])).toFixed(3)){
                    if (i == 3) {
                    //console.log('pode atualizar',conts[23].time[0],y)
                    }
                   // console.log('sim')
                    conts[contnumber/3 + i].ys[0] = conts[contnumber/3 + i].y
                }else{
                    conts[contnumber/3 + i].ys[0] = -100
                    //if (i == 3) {
                        conts[contnumber/3 + i].time[0] = 0
               //}
     }}           
                    }
                 
                 //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
                 
                 //c.beginPath()
                 //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
                 //if (timers[current].delete == undefined) {
                
               if (i > 0 && i < (contnumber/3)) {    
                    if (i == 1 || i == 2){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                        if (current > 0) {
                    //if (contnumber/3 + i > (contnumber/3 + 1) && contnumber/3 + i < 40) {
                        //console.log('index',contnumber/3 + i, 'current',current, 'current - 1',current - 1)
                 eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                    if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
                         //window.alert('ADD NOW')
                         //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                    }
                    //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
                    if (eq == false) {
                    conts[contnumber/3 + i].go[current - 1] = false
                    }else{//if (conts[contnumber/3 + i].go[current - 1] == false){
                        add = true
                        for (dom = current - 2; dom >= 0; dom--){
                            if (conts[contnumber/3 + i].go[dom] == false) {
                                add = false
                                //window.alert('n adicionar true em',current - 1)
                            }
                        }
                        if (add == true && conts[contnumber/3 + i].time[current] != conts[contnumber/3 + i].start[current - 1].time) {
                        if (conts[contnumber/3 + i].go[current - 1] != true) {
    
                            if (conts[contnumber/3 + i].go[current - 1] == false) {
                             conts[contnumber/3 + i].time[current] = hiro //conts[24].start[current - 1].time
                             //conts[contnumber/3 + i].running[current] = true
                             //console.log('ADD NOW')
                            }//else{
                            // conts[contnumber/3 + i].time[current] = 0
                           //}
                           conts[contnumber/3 + i].go[current - 1] = true
                           conts[contnumber/3 + i].running[current] = true
                           //conts[contnumber/3 + i].running[current] = true
                            //conts[24].ys[current] = -100
                            //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                            //console.log(conts[24].ys[current], i)
                        }
                            //window.alert('ADD NOW')
                        }
                    }
                        /*else{
                        add = true
                        for (dom = current - 2; dom >= 0; dom--){
                            if (conts[contnumber/3 + i].go[dom] == false) {
                                add = false
                                //window.alert('n adicionar true em',current - 1)
                            }
                        }
                        //if (add == true) {
                            conts[contnumber/3 + i].go[current - 1] = 'none'
                            //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                            //window.alert('ADD NOW')
                        //}
                    }*/
            }}else if (current > 0){
                eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                
                if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
                     //window.alert('ADD NOW')
                     //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                }
                //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
                if (eq == false) {
                conts[contnumber/3 + i].go[current - 1] = false
                }else {//if (conts[contnumber/3 + i].go[current - 1] == false){
                    add = true
                        for (dom = current - 2; dom >= 0; dom--){
                        if (conts[contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    if (i == 2)  {
                    //console.log(add,'eq: true',)
                    }
                    //console.log('EI',add,)
                    if (conts[contnumber/3 + i - 1].ys[current] != -100) { //conts[contnumber/3 + i - 1].ys[current] != undefined && conts[contnumber/3 + i - 1].ys[current] != -100 && conts[contnumber/3 + i - 1].ysfinal[current] != undefined) {
                    fstperc = Math.abs(conts[contnumber/3 + i - 1].ys[current] - advances[0][current].sty[contnumber/3 + i - 1])
                    secperc = Math.abs(conts[contnumber/3 + i - 1].ysfinal[current] - advances[0][current].sty[contnumber/3 + i - 1])
                    finalperc = fstperc/secperc
                    }else{
                        finalperc = 0
                    }

                   // if (i == 19 && conts[38].running[current] == true && current == 1 && conts[38].ys[current] != -100) {
                    //console.log(current, conts[contnumber/3 + i - 1].running[current])
                    //console.log(contnumber/3 + i - 1,':', advances[0][current].sty[contnumber/3 + i - 1], '=>',conts[contnumber/3 + i - 1].ysfinal[current])
                    //console.log(conts[contnumber/3 + i - 1].ys[current])
                    //console.log('has moved: ',fstperc)
                    //console.log('still remains: ',secperc)
                    //console.log('final percento:',current,finalperc)
                    //}
                    //if (i == 4 && (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)) { // conts[contnumber/3 + i - 1].running[current] == true && finalperc == 1 && current == 2) { 
                        //conts[22].running[current] != undefined
                        /*
                        console.log(current, conts[22].running[current])
                        console.log(contnumber/3 + i - 1,':', advances[0][current].sty[contnumber/3 + i - 1], '=>',conts[contnumber/3 + i - 1].ysfinal[current])
                        console.log(conts[contnumber/3 + i - 1].ys[current])
                        console.log('has moved: ',fstperc)
                        console.log('still remains: ',secperc)
                        console.log('final percento:',finalperc)
                        */
                        //if (Math.round(finalperc) == 1) {
                           //console.log(current,'euhduehdedhed')
                        //}
                    //}
                    if (i == 2) {
                        //console.log('running',current,conts[contnumber/3 + i - 1].running[current])
                    }
                    if (i > 2) {
                        wi = conts[contnumber/3 + i - 1].running[current] == true && finalperc > tension
                    //wi == (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)
                    }else{
                        wi = true
                    }
                    if (add == true && wi == true) {// && (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)){ //conts[contnumber/3 + i - 1].running[current] == true && finalperc >= 0.5) { //Math.round(finalperc) == 1){//&& (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)) {//&& (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)) {//conts[contnumber/3 + i].time[current] != conts[contnumber/3 + i].start[current - 1].time && conts[contnumber/3 + i - 1].ys[current] == conts[contnumber/3 + i - 1].ysfinal[current]){
                       if (i == 19) {
                        //console.log('wi',wi,finalperc)
                       }
                        if (conts[contnumber/3 + i].go[current - 1] != true) {
                            if (i == 19) {
                            //console.log('what',conts[contnumber/3 + i].go[current - 1] != true)
                            }
                        if (conts[contnumber/3 + i].go[current - 1] == false) {
                         conts[contnumber/3 + i].time[current] = hiro //conts[24].start[current - 1].time
                         
                         //console.log('ADD NOW')
                         if (i == contnumber/3 - 1) {
                            //console.log('add timers2')
                            
                            //if (fixo == false) {
                                //addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],direct[current],0)
                              //}else{
                                  //if (direct[current] == 'u') {
                                      //addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],'d',(contnumber/3))
                                  //}else{
                                      //addTimers(timers2,0,advances[0][current].amp[(contnumber/3) + 1],'u',(contnumber/3))
                                  //}
                              //}

                              //addTimers(timers2,0,advances[0][current].amp[20],'u',0)
                         }
                        }//else{
                        // conts[contnumber/3 + i].time[current] = 0
                       //}
                       conts[contnumber/3 + i].go[current - 1] = true
                       if (i == 19) {
                        //console.log('hey',current - 1,conts[contnumber/3 + i].go[current - 1])
                       }
                       conts[contnumber/3 + i].running[current] = true
                        //conts[24].ys[current] = -100
                        //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                        //console.log(conts[24].ys[current], i)
                    }
                        //window.alert('ADD NOW')
                    }else if(wi == false){ //conts[contnumber/3 + i - 1].ys[current] != conts[contnumber/3 + i - 1].ysfinal[current]){
                        conts[contnumber/3 + i].go[current - 1] = false
                        if (current == 1 && i == 19) {
                        //console.log('wi',wi,finalperc)
                        }
                    }
                }
            }
        
                 //conts[contnumber/3 + i].go[current - 1] = eq
                 }
                 
                 if (draw1 == true && contnumber/3 + i != contnumber - 1) { //&& i != 1) { // && conts[contnumber/3 + i].ys[current - 1] == conts[contnumber/3 + i].ysfinal[current - 1]) {
                   // if (i != 4) {// && conts[24].go[current - 1] != true) {
                 //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][current].sty[contnumber/3 + i],radius,0,2*Math.PI)
                  //c.strokeStyle = 'black'
                    //}else{
                        //if (conts[contnumber/3 + i].go[current] == false && conts[contnumber/3 + i].go[current - 1] == true) { //&& conts[contnumber/3 + i].go[current - 1] != 'none') {
                        if (conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != true) {
                           // if (current != 0) {
                           //console.log('head straight')
                            c.fillStyle = 'red'
                            c.strokeStyle = 'black'
                            if (conts[contnumber/3 + i].ys[current] == -100) {
                           // console.log('I WANNA RUN AWAY', y)
                                    //console.log('y1',advances[0][current].sty[contnumber/3 + i],conts[contnumber/3 + i].time[current])
                                    y = 0
                            }
                            //conts[contnumber/3 + i].
                            
                            conts[contnumber/3 + i].yo = y + advances[0][current].sty[contnumber/3 + i]
                            if (i > 2 && i < (contnumber/3) && timers2.length == 0 && i != contnumber/3 - 1) {
                                /*
                            c.beginPath()
                            c.moveTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3) - 2*radius,conts[contnumber/3 + i - 1].yo,radius,0,2*Math.PI)
                            c.lineTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),conts[contnumber/3 + i].yo,radius,0,2*Math.PI)
                            c.stroke()
                            c.beginPath()
                            */
                            }
                       // }
                    }else{
                        //c.fillStyle = 'transparent'
                        //c.strokeStyle = 'transparent'
                    }
                    if (timers2.length == 0 && i != 1 && i != contnumber/3 - 1) {
                    //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][current].sty[contnumber/3 + i],radius,0,2*Math.PI)
                    }
                         //}
                       // }
                    //}
                 }else if (contnumber/3 + i == contnumber - 1){
                    //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
                 }
                //}
                 
                 
                 //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
                 //c.fillStyle = 'white'
                if (i > 0 && i < (contnumber/3)) {// 2*(contnumber/3) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(contnumber/3 + i == 24 || i == 3 || i == 2) {
                    c.fill()
                    c.stroke()
                 }else{
                    //c.strokeStyle = 'black'
                 //c.fill()
                 }
                // c.strokeStyle = 'black'
                if (contnumber/3 + i != 20) {
                //c.stroke() 
                }
                // if (conts[24].go[current - 1] == true && conts[24].go[current] != true) {
                if (contnumber/3 + i == 20) {
                 //c.stroke()   
                }
                // }
                 c.beginPath()
                 //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
                 c.fillStyle = 'white'
                 x+= 2*radius
             }
                //}
            
             }

            








            x = 0
            /*
             for (i = 0; i < (contnumber/3)*2;i++) {
                if (i > 0 && i < (contnumber/3) && timers2.length >= 0 && i != contnumber/3 - 1) {
                    c.strokeStyle = 'black'
                    c.beginPath()
                    c.moveTo(x + radius + space + 2*radius*(contnumber/3) - 2*radius,conts[contnumber/3 + i - 1].yo,radius,0,2*Math.PI)
                    c.lineTo(x + radius + space + 2*radius*(contnumber/3),conts[contnumber/3 + i].yo,radius,0,2*Math.PI)
                    //c.stroke()
                    c.beginPath()
                }
                //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                x+= 2*radius
            }
             x = 0
             for (i = 0; i < (contnumber/3)*2;i++) {
                if (i > 0 && i < (contnumber/3) && i != contnumber/3 - 1 && timers2.length >= 0) {
                    c.beginPath()
                    c.fillStyle = 'red'
                    c.strokeStyle = 'black'
                    //c.arc(x + radius + space + 2*radius*(contnumber/3),conts[contnumber/3 + i].yo,radius,0,2*Math.PI)
                    c.fill()
                    c.stroke()
                }
                x+= 2*radius
             }
             */

          
         // 2nd wave

    for (n = 0; n < timers2.length; n++) {
        for (current = 0; current < timers2[n].length; current++) {
           //advance = conts2[n][contnumber/3 + i].advances2[n][current]
           //console.log('n',n)
           //console.log('current',current)
           advance = advances2[n][current].ads[0]
           x = 2*(advance)*radius
           hiro = 0
           //x = 0
           // - (advance)*2*radius
           for (i = 1; i < (contnumber/3);i++) {
            // y = hiro 

            if (n % 2 == 0) {
                //window.alert('HEY')
               // indirec = 2*(contnumber/3) - i
            }else{
                indirec = contnumber/3 + i
            }
            indirec = contnumber/3 + i

            canmove = true
            if (i == 3 && current == 0) {
               //console.log('biranga',conts2[n][23].time[0])
               //console.log(-(advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)))
            }
            if (conts2[n][indirec].time[current] - hiro >= 0) { // Math.sin(-vel*(conts2[n][indirec].time[current]  - hiro)) = 0 
                if (type == 'pulse') {
                if (advances2[n][current].amp[indirec] - (advance + i)*at*advances2[n][current].amp[indirec]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) <= 0) {
                   if (conts2[n][indirec].start[current] == undefined) {
                       if (i > 0 && i < contnumber/3) { //(i == 4 || i == 3 || i == 2) {
                       conts2[n][indirec].start[current] = {time:conts2[n][indirec].time[current]}
                       }
                       //console.log('terminou', conts2[n][indirec].time[current], vels[current]*(conts2[n][indirec].time[current] - hiro), hiro)
                   }
                    if (direct2[n][current] == 'u') {
                       //console.log('UP')
                y = (advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                    }else{
                       //console.log('DOWN')
                        y = -(advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                    }
       
                   
                }else if(Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) >= 0 && conts2[n][indirec].move[current] == true){
                   y = 0
                   if (man == false) {
                  conts2[n][indirec].move[current] = false // move false
                  if (n == 1 && current == 1) {
                       //console.log('now this')
                  }
                    }
               }else{
                   y = 0
                   //window.alert('EITA')
               }
       
               /*
                if ((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(2) == -1.00 && conts2[n][indirec].time[current] - hiro >= 0 && conts2[n][indirec].move[current] != false) {
                   //window.alert('STOP')
                  conts2[n][indirec].fixpos[current] = y
                   conts2[n][indirec].move[current] = false
                }*/
                 
            }else{
                if (advances2[n][current].amp[indirec] - (advance + i)*at*advances2[n][current].amp[indirec]*0.03 >= 0) {
                    if (direct2[n][current] == 'u') {
                        y = (advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                            }else{
                                y = -(advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                            }
                    }else{
                        y = 0
                        conts2[n][indirec].move[current] = false
                    }
            }
            }else{
                y = 0
            }
       
            if (manf == true) {
            c.fillStyle = 'black'
           if (conts2[n][indirec].move[current] == true) {
           if ((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(1) == 0) {
              c.fillStyle = 'red'
           }else if((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(2) == -1.00) {
              c.fillStyle = 'blue'
           }
           }
       
           c.font = '20px Arial'
           if (Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) < Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] + 0.01 - hiro)) && conts2[n][indirec].time[current] - hiro >= 0 && advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03 >= 0) {
              c.fillStyle = 'yellow'
              y = (advances2[n][current].amp[indirec] -(advance + i)*at*advances2[n][current].amp[indirec]*0.03)*-1
              if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
               if (conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].move[current] == true) {
                   conts2[n][indirec].move[current] = false // move false
                   if (n == 1 && current == 1 && i == 1) {
                       //console.log('now this 2')
                   }
                   //if (i == 3 && current == 0)
                   //console.log('N ERA PRA SE FAZER ISSO')
               }
              }else{
                conts2[n][indirec].move[current] = false
            }
              conts2[n][indirec].fixpos[current] = y //+ advances2[n][current].sty[indirec]
           }
       }
       
            if (conts2[n][indirec].move[current] == false && type == 'pulse') {
                /*
               if (i == contnumber/3 - 1 && conts2[n][contnumber/3 - 1].reflect[current] != false) {
                   conts2[n][contnumber/3 - 1].reflect[current] = false
                   //window.alert('CAPISCO')
               }              // y = 0
                             */
             if (manf == true){
             if (direct2[n][current] == 'u') {
                y = conts2[n][indirec].fixpos[current]
             }else{
              y = -conts2[n][indirec].fixpos[current]
             }
             }else{
             y = 0
             }
            }
           
            if (i == 3 && current == 0){
               //console.log('EIK',y)
            }
            conts2[n][indirec].y = y + advances2[n][current].sty[indirec]
            conts2[n][indirec].a = i //(advance + i)*at*advances2[n][current].amp[indirec]*0.03

            add = true
            for (dom = current - 2; dom >= 0; dom--){
                if (conts2[n][indirec].go[dom] == false) {
                    add = false
                    //window.alert('n adicionar true em',current - 1)
                }
            }
            if (current > 0 || i == 1 || i == 2) {
            if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
            if (add == true && conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].go[current] != true) {
               conts2[n][indirec].ys[current] = conts2[n][indirec].y
            }else if (conts2[n][indirec].go[current] == true){
            conts2[n][indirec].ys[current] = conts2[n][indirec].ysfinal[current]
            }else{
               conts2[n][indirec].ys[current] = -100
            }
           }else{
               conts2[n][indirec].ys[current] = conts2[n][indirec].y
           }
       }else{
           //if (i == 2)
           //console.log(conts2[n][indirec - 1].ys[0] == conts2[n][indirec - 1].ysfinal[0],conts2[n][indirec].ys[0])
           if (i == 3) {
               //console.log('why',conts2[n][indirec - 1].ys[0] == conts2[n][indirec - 1].ysfinal[0])
           }
           if (conts2[n][indirec - 1].ys[0] != undefined && conts2[n][indirec - 1].ysfinal[0] != undefined) {
               // console.log(conts2[n][indirec - 1].ys[0])
               if (conts2[n][indirec - 1].ys[0] != -100) {
               fstperc = Math.abs(conts2[n][indirec - 1].ys[0] - advances2[n][0].sty[indirec - 1])
                    secperc = Math.abs(conts2[n][indirec - 1].ysfinal[0] - advances2[n][0].sty[indirec - 1])
                    finalperc = fstperc/secperc
               }else{
                    finalperc = 0
               }
                    if (i == 4 && finalperc < 1) {
                        /*
                    console.log(current, conts2[n][indirec - 1].running[current])
                    console.log(indirec - 1,':', advances2[n][current].sty[indirec - 1], '=>',conts2[n][indirec - 1].ysfinal[current])
                    console.log(conts2[n][indirec - 1].ys[current])
                    console.log('has moved: ',fstperc)
                    console.log('still remains: ',secperc)
                    console.log('final percento:',current,finalperc)
                    if (finalperc > 0.5) {
                        console.log('finalperc')
                    }
                        */
                }
           if (conts2[n][indirec - 1].running[0] == true && finalperc > tension && conts2[n][indirec].ys[0] == -100) { // && finalperc >= 0.5 && conts2[n][indirec].ys[0] == -100) {
                   //if (i == 2 || i == 3) {
                   if (i == 3) {
                       //console.log('hey yyou',indirec,hiro,advances2[n][current].sty[indirec])
                   }
                       y = 0
                       
                       conts2[n][indirec].ys[0] = advances2[n][0].sty[indirec]
                       conts2[n][indirec].time[0] = hiro
                       conts2[n][indirec].running[0] == true
                       if (i == contnumber/3 - 1 && n < 0) {
                       //console.log('ADD TO TIMERS 2')
                       if (fixo == false) {
                           addTimers(timers2,n + 1,advances2[n][current].amp[(contnumber/3) + 2],direct2[n][current],(contnumber/3)*(n + 1))
                         }else{
                             if (direct2[n][current] == 'u') {
                               addTimers(timers2,n + 1,advances2[n][current].amp[contnumber/3 + 2],'d',(contnumber/3)*(n + 1))
                             }else{
                               addTimers(timers2,n + 1,advances2[n][current].amp[contnumber/3 + 2],'u',(contnumber/3)*(n + 1))
                             }
                         }
                       //addTimers(timers2,n + 1,advances2[n][current].amp[20],'u',20)
                       // run add timers function
                       /* variables:
                       timers (2 or 3)
                       index (0,1,...)
                       amp
                       direction
                       ad (20,40,60...)
                       */
                       }
                       
                  // }
           }else if (conts2[n][indirec - 1].running[0] == true && finalperc > tension) { // && finalperc >= 0.5) { //(((conts2[n][indirec - 1].ys[0])).toFixed(3) == ((conts2[n][indirec - 1].ysfinal[0])).toFixed(3)){
               if (i == 3) {
               //console.log('pode atualizar',conts2[n][23].time[0],y)
               }
               conts2[n][indirec].ys[0] = conts2[n][indirec].y
           }else{
               conts2[n][indirec].ys[0] = -100
               //if (i == 3) {
                   conts2[n][indirec].time[0] = 0
          //}
}}           
               }
            
            //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
            
            //c.beginPath()
            //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
            //if (timers2[n][current].delete == undefined) {
           
          if (i > 0 && i < contnumber/3) {    
               if (i == 2){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                   if (current > 0) {
               //if (indirec > (contnumber/3 + 1) && indirec < 40) {
                   //console.log('index',indirec, 'current',current, 'current - 1',current - 1)
            eq = (conts2[n][indirec].ys[current - 1]).toFixed(3) == (conts2[n][indirec].ysfinal[current - 1]).toFixed(3)
               if (conts2[n][indirec].go[current - 1] == false && eq == true) {
                    //window.alert('ADD NOW')
                    //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
               }
               //if (conts2[n][indirec].go[current - 1] == undefined) {
               if (eq == false) {
               conts2[n][indirec].go[current - 1] = false
               }else{//if (conts2[n][indirec].go[current - 1] == false){
                   add = true
                   for (dom = current - 2; dom >= 0; dom--){
                       if (conts2[n][indirec].go[dom] == false) {
                           add = false
                           //window.alert('n adicionar true em',current - 1)
                       }
                   }
                   if (add == true && conts2[n][indirec].time[current] != conts2[n][indirec].start[current - 1].time) {
                   if (conts2[n][indirec].go[current - 1] != true) {

                       if (conts2[n][indirec].go[current - 1] == false) {
                        conts2[n][indirec].time[current] = hiro //conts2[n][24].start[current - 1].time
                        //console.log('ADD NOW')
                       }//else{
                       // conts2[n][indirec].time[current] = 0
                      //}
                      conts2[n][indirec].go[current - 1] = true
                      conts2[n][indirec].running[current] = true
                       //conts2[n][24].ys[current] = -100
                       //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                       //console.log(conts2[n][24].ys[current], i)
                   }
                       //window.alert('ADD NOW')
                   }
               }
                   /*else{
                   add = true
                   for (dom = current - 2; dom >= 0; dom--){
                       if (conts2[n][indirec].go[dom] == false) {
                           add = false
                           //window.alert('n adicionar true em',current - 1)
                       }
                   }
                   //if (add == true) {
                       conts2[n][indirec].go[current - 1] = 'none'
                       //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
                       //window.alert('ADD NOW')
                   //}
               }*/
       }}else if (current > 0 && i != 1){
        //console.log('heya',i,indirec,conts2[n][indirec])
           eq = (conts2[n][indirec].ys[current - 1]).toFixed(3) == (conts2[n][indirec].ysfinal[current - 1]).toFixed(3)
           if (conts2[n][indirec].go[current - 1] == false && eq == true) {
                //window.alert('ADD NOW')
                //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
           }
           //if (conts2[n][indirec].go[current - 1] == undefined) {
           if (eq == false) {
           conts2[n][indirec].go[current - 1] = false
           }else {//if (conts2[n][indirec].go[current - 1] == false){
               add = true
                   for (dom = current - 2; dom >= 0; dom--){
                   if (conts2[n][indirec].go[dom] == false) {
                       add = false
                       //window.alert('n adicionar true em',current - 1)
                   }
               }
               if (i == 2)  {
               //console.log(add,'eq: true',)
               }
               //console.log('EI',add,)
               if (conts2[n][indirec - 1].ys[current] != -100) { //conts2[n][indirec - 1].ys[current] != undefined && conts2[n][indirec - 1].ys[current] != -100 && conts2[n][indirec - 1].ysfinal[current] != undefined) {
                fstperc = Math.abs(conts2[n][indirec - 1].ys[current] - advances2[n][current].sty[indirec - 1])
                secperc = Math.abs(conts2[n][indirec - 1].ysfinal[current] - advances2[n][current].sty[indirec - 1])
                finalperc = fstperc/secperc
                }else{
                    finalperc = 0
                }

                wi = conts2[n][indirec - 1].running[current] == true && finalperc > tension
                //if (i == 19 && conts2[n][38].running[current] == true && current == 1 && conts2[n][38].ys[current] != -100 && finalperc > 0.5) {
                if (i == 19 && conts2[n][indirec - 1].running[current] == true && finalperc > tension && current == 2) {
                    //console.log(current, conts2[n][indirec - 1].running[current])
                    //console.log(indirec - 1,':', advances2[n][current].sty[indirec - 1], '=>',conts2[n][indirec - 1].ysfinal[current])
                    //console.log(conts2[n][indirec - 1].ys[current])
                    //console.log('has moved: ',fstperc)
                    //console.log('still remains: ',secperc)
                    //console.log('final percento:',current,finalperc)
                    }

                    if (i > 2) {
                        wi = conts2[n][indirec - 1].running[current] == true && finalperc > tension
                    }else{
                        wi = (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)
                    }
               if (add == true && wi == true) {//conts2[n][indirec].time[current] != conts2[n][indirec].start[current - 1].time && conts2[n][indirec - 1].ys[current] == conts2[n][indirec - 1].ysfinal[current]){
               if (conts2[n][indirec].go[current - 1] != true) {

                   if (conts2[n][indirec].go[current - 1] == false) {
                    conts2[n][indirec].time[current] = hiro //conts2[n][24].start[current - 1].time
                    //console.log('ADD NOW')
                    if (i == contnumber/3 - 1 && n < 0) {
                       //console.log(hiro)
                       //console.log('ADD TO TIMERS',current)
                       
                       if (fixo == false) {
                           addTimers(timers2,n + 1,advances2[n][current].amp[contnumber/3 + 12],direct2[n][current],(contnumber/3)*(n + 1))
                         }else{
                             if (direct2[n][current] == 'u') {
                               addTimers(timers2,n + 1,advances2[n][current].amp[contnumber/3 + 2],'d',(contnumber/3)*(n + 1))
                             }else{
                               addTimers(timers2,n + 1,advances2[n][current].amp[contnumber/3 + 2],'u',(contnumber/3)*(n + 1))
                             }
                         }
                       //addTimers(timers2,n + 1,advances2[n][current].amp[20],'d',0)
                   }
                   }//else{
                   // conts2[n][indirec].time[current] = 0
                  //}
                  conts2[n][indirec].go[current - 1] = true
                  conts2[n][indirec].running[current] = true
                   //conts2[n][24].ys[current] = -100
                   //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                   //console.log(conts2[n][24].ys[current], i)
               }
               }else if (conts2[n][indirec - 1].ys[current] != conts2[n][indirec - 1].ysfinal[current]){
                   conts2[n][indirec].go[current - 1] = false
               }
           }
       }
   
            //conts2[n][indirec].go[current - 1] = eq
            }
            
            if (draw1 == true && indirec != contnumber - 1) {// && i != 1) { // && conts2[n][indirec].ys[current - 1] == conts2[n][indirec].ysfinal[current - 1]) {
              // if (i != 4) {// && conts2[n][24].go[current - 1] != true) {
            //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances2[n][current].sty[indirec],radius,0,2*Math.PI)
             //c.strokeStyle = 'black'
               //}else{
               //console.log('conts vai',n,conts2[n][indirec])
                   //if (conts2[n][indirec].go[current] == false && conts2[n][indirec].go[current - 1] == true) { //&& conts2[n][indirec].go[current - 1] != 'none') {
                   if (conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].go[current] != true) {
                      // if (current != 0) {
                      //console.log('head straight')
                       c.fillStyle = 'red'
                       c.strokeStyle = 'black'
                       if (conts2[n][indirec].ys[current] == -100) {
                      // console.log('I WANNA RUN AWAY', y)
                               //console.log('y1',advances2[n][current].sty[indirec],conts2[n][indirec].time[current])
                               y = 0
                       }
                       conts2[n][indirec].yo[current] = y //+ advances2[n][current].sty[indirec]
                       //document.getElementById('t').innerText = conts2[0][23].yo[3]
                       
                  // }
               }else{
                   //c.fillStyle = 'transparent'
                   //c.strokeStyle = 'transparent'
               }
                       //c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3),y + advances2[n][current].sty[indirec],radius,0,2*Math.PI)
                       if (n % 2 == 0 && i != 1) {
                           c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3 - 1),y + advances2[n][current].sty[indirec],radius,0,2*Math.PI)
                       }else{
                            c.arc(x + radius - 2*(advance)*radius + 2*radius*(contnumber/3 + 2),y + advances2[n][current].sty[indirec],radius,0,2*Math.PI)
                       }
                    //}
                  // }
               //}
            }else{
                //window.alert('HEY')
                if (i == 1) {
                    //console.log('y(contnumber/3 + i)',x + radius -2*(advance)*radius + 2*radius*(contnumber/3))
                }
               //c.arc(x + radius -2*(advance)*radius + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
            }
           //}
            
            
            //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
            //c.fillStyle = 'white'
           if (i > 1 && i < contnumber/3 && i < contnumber/3 - 1 && n == 0) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(indirec == 24 || i == 3 || i == 2) {
               if (c.strokeStyle != 'transparent') {//(i == contnumber/3 - 1 && c.fillStyle != 'transparent') {
                  // c.fillStyle = 'yellow'
                  if (i == 2) {
                  c.fillStyle = 'purple'
                  }else{
                    c.fillStyle = 'white'
                  }
               //c.fill()
               //c.stroke()
               }
            }else{
               //c.strokeStyle = 'black'
            //c.fill()
            }
           // c.strokeStyle = 'black'
           if (indirec != 20) {
           //c.stroke() 
           }
           // if (conts2[n][24].go[current - 1] == true && conts2[n][24].go[current] != true) {
           if (indirec == 20) {
            //c.stroke()   
           }
           // }
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            x+= 2*radius
        }
           //}
       
        }
       }
        
        //c.beginPath()
        //x = 0 //+ (contnumber/3)*radius
        /*
        for (i = contnumber/3; i < contnumber; i++) {
            if (conts[i].ysfinal.length > 0) {
            //c.arc(x + radius + space + 2*radius*(contnumber/3),conts[i].ysfinal[conts[i].ysfinal.length - 1],radius,0,2*Math.PI)
            c.stroke()
            c.fill()
            x+= 2*radius
            }
        }
            */
      /*
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            //c.arc(x + radius + space,130,radius,0,2*Math.PI)
            c.fillStyle = 'yellow'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            x+= 2*radius
            }
            for (i = 0; i < contnumber/3;i++) {
                c.beginPath()
                //c.arc(x + radius + space,130,radius,0,2*Math.PI)
                c.fillStyle = 'pink'
                c.fill()
                c.strokeStyle = 'black'
                c.stroke()
                x+= 2*radius
                }
                for (i = 0; i < contnumber/3;i++) {
                    c.beginPath()
                    //c.arc(x + radius + space,130,radius,0,2*Math.PI)
                    c.fillStyle = 'green'
                    c.fill()
                    c.strokeStyle = 'black'
                    c.stroke()
                    x+= 2*radius
                    }
                    */

            yf = []
            for (i in conts) {
                yf.push(0)
            }

            r = (contnumber/3)*2 - 2
            if (conts[r].ys[0] != undefined && conts[r].ysfinal[0] != undefined  && conts[r].ys[1]!= undefined && conts[r].ysfinal[1] != undefined && timers.length > 1) {
                if ((conts[r].ys[0]).toFixed(3) == (conts[r].ysfinal[0]).toFixed(3) && (conts[r].ys[1]).toFixed(3) == (conts[r].ysfinal[1]).toFixed(3)) {
                   timers.shift()
                   //tot = tot - 1
                   advances[0].shift()
                   direct.shift()
                   for (l3 = contnumber/3 + 1; l3 < (contnumber/3)*2; l3++) {
                   conts[l3].change = false
                   conts[l3].fixpos.shift()
                   conts[l3].go.shift()
                   conts[l3].move.shift()
                   conts[l3].running.shift()
                   conts[l3].start.shift()
                   conts[l3].time.shift()
                   conts[l3].ys.shift()
                   conts[l3].ysfinal.shift()
                }
                }
                }

            for (t2 = 0; t2 < timers2.length; t2++) {
                for (l2 = 0; l2 < conts2[t2].length; l2++) {
                    if (t2 % 2 == 0) {
                        index = l2
                      }else{
                        index = contnumber - l2
                       }

                   conts2[t2][l2].done = []
                    
                        yf[index] += ysep[t2][index]
                        if (l2 > contnumber/3 && l2 < (contnumber/3)*2) {
                        for (ko = 0; ko < conts2[t2][l2].yo.length; ko++) {
                            yf[index] += conts2[t2][l2].yo[ko]
                        }
                    }
                }

                ko = 0
                l2 = (contnumber/3)*2 - 2
                if (conts2[t2][l2].ys[ko] != undefined && conts2[t2][l2].ysfinal[ko] != undefined  && conts2[t2][l2].ys[1] != undefined && conts2[t2][l2].ysfinal[1] != undefined && timers2[t2].length > 1) {
                 if ((conts2[t2][l2].ys[ko]).toFixed(3) == (conts2[t2][l2].ysfinal[ko]).toFixed(3) && (conts2[t2][l2].ys[1]).toFixed(3) == (conts2[t2][l2].ysfinal[1]).toFixed(3)) {
                    conts2[t2][l2].done[ko] = true
                    //console.log('T2',t2)
                    //console.log('length',conts2[t2][l2].running.length,conts2[t2][l2].go.length,conts2[t2][l2].fixpos.length,conts2[t2][l2].move.length,conts2[t2][l2].start.length,conts2[t2][l2].time.length)
                    //console.log(conts2[t2][22].ys[1],conts2[t2][22].ysfinal[1])
                    tot = tot - 1
                    timers2[t2].shift()
                    advances2[t2].shift()
                    direct2[t2].shift()
                    for (l3 = contnumber/3 + 1; l3 < (contnumber/3)*2; l3++) {
                     if (t2 % 2 == 0) {
                        index2 = l3
                   }else{
                     index2 = contnumber - l3
                   }
                   
                     ysep[t2][index2] += conts2[t2][l3].yo[0]
                    conts2[t2][l3].change = false
                    conts2[t2][l3].fixpos.shift()
                    conts2[t2][l3].go.shift()
                    conts2[t2][l3].move.shift()
                    conts2[t2][l3].running.shift()
                    conts2[t2][l3].start.shift()
                    conts2[t2][l3].time.shift()
                    conts2[t2][l3].yo.shift()
                    conts2[t2][l3].ys.shift()
                    conts2[t2][l3].ysfinal.shift()
                 }
                 }
                 }
            }
           
                c.beginPath()
                c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
                c.lineTo(2*radius*(2) + radius + 2*radius*(contnumber/3) + space,yf[contnumber/3 + 2] + conts[contnumber/3 + 2].yo,radius,0,2*Math.PI)
                c.stroke()
            
        comp = 9
        alt = 7
        comp2 = 10
        alt2 = 70
        alt3 = 16

            xtouch = mousex >= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 && mousex <= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp
            ytouch = mousey >= mouseprev - radius - alt && mousey <= mouseprev - radius - alt + alt2
            
            // draw first ball
            c.beginPath()
            c.fillStyle = 'red'
            c.arc(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
            c.fill()
            c.stroke()
    
            c.beginPath()
            c.arc(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - 1,mouseprev - 1.2,radius/3,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()

            if (0 == 0) {
                // draw lines
                for (ke = 3; ke < contnumber/3 - 1; ke++) {
                        c.beginPath()
                        c.moveTo(2*radius*(ke - 1) + radius + 2*radius*(contnumber/3) + space,yf[ke - 1 + contnumber/3] + conts[ke - 1 + contnumber/3].yo,radius,0,2*Math.PI)
                        c.lineTo(2*radius*ke + radius + 2*radius*(contnumber/3) + space,yf[ke + contnumber/3] + conts[ke + contnumber/3].yo,radius,0,2*Math.PI)
                        c.stroke()
                }

                // draw last line
                c.beginPath()
                c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty,radius,0,2*Math.PI)
                c.lineTo(2*radius*(contnumber/3 - 2) + radius + 2*radius*(contnumber/3) + space,yf[contnumber/3 - 2 + contnumber/3] + conts[contnumber/3 - 2 + contnumber/3].yo,radius,0,2*Math.PI)
                c.stroke()
                c.beginPath()

                // draw balls
            for (ke = 2; ke < contnumber/3 - 1; ke++) {
                //console.log('ke HEY',ke)
                c.beginPath()
                c.lineWidth = '0.8'
                c.arc(2*radius*ke + radius + 2*radius*(contnumber/3) + space,yf[ke + contnumber/3] + starty,radius,0,2*Math.PI)
                c.fillStyle = '#FF0000'
                c.fill()
                c.stroke()

                c.beginPath()
                c.arc(2*radius*ke + radius + 2*radius*(contnumber/3) + space - 1,yf[ke + contnumber/3] + conts[ke + contnumber/3].yo - 1.2,radius/3,0,2*Math.PI)
                c.fillStyle = 'white'
                c.fill()
            }


            c.beginPath()
            c.lineWidth = '4.4'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty + 45)
            c.stroke() 

            c.beginPath()
            c.lineWidth = '3'
            c.strokeStyle = '#B5B6B9'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty + 45)
            c.stroke()

            c.beginPath()
            c.lineWidth = '11'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 1.5,starty - 14)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 1.5,starty - 4)
            c.stroke()

            c.beginPath()
            c.lineWidth = '2.6'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 9,starty - 3.6)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space - 5.6,starty - 3.6)
            c.stroke()

            c.beginPath()
            c.strokeStyle = 'black'
            c.lineWidth = '8'
            c.arc(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 6.6,starty + 1,15,3*Math.PI/2 - 0.6,2*Math.PI)
            c.stroke()


            c.beginPath()
            c.lineWidth = '8.2'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 21.6,starty + 20)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 21.6,starty - 2)
            c.stroke()

            c.beginPath()
            c.strokeStyle = 'black'
            c.lineWidth = '8'
            c.arc(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 6.6,starty + 18,15,0,Math.PI/2 + 0.5)
            c.stroke()

            c.beginPath()
            c.lineWidth = '11'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 0.5,starty + 26)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 0.5,starty + 35)
            c.stroke()

            c.beginPath()
            c.lineWidth = '4'
            c.strokeStyle = 'black'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space - 12.5,starty + 45)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 12.5,starty + 45)
            c.stroke()

            c.beginPath()
            c.lineWidth = '3'
            c.strokeStyle = '#B5B6B9'
            c.moveTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space - 12,starty + 45)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space + 12,starty + 45)
            c.stroke()

            // draw last ball 
            c.beginPath()
            c.lineWidth = '0.8'
            c.strokeStyle = 'black'
            c.arc(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty,radius,0,2*Math.PI)
            c.fillStyle = 'red'
            c.fill()
            c.stroke()

            c.beginPath()
            c.arc(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space - 1,starty - 1.2,radius/3,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
        }


        fstcon = mouse == 'down' && xtouch == true && ytouch == true
        if (fstcon == true || mousefollow == true) {
            //mouseprev = conts[21].yo //mousey
        }
        //if (mouse == 'down' && xtouch == true && ytouch == true) {
        c.beginPath()
        //c.arc(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
        c.fillStyle = 'red'
        c.fill()
        c.stroke()
       //}

        comp = 15
        alt = 7
        c.beginPath()
        c.lineWidth = '0.6'
        //c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mousey - radius)
        //c.lineTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space + comp,mousey - radius)
        c.fillStyle = '#B5B6B9'
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev - radius - alt,comp + 2,alt)
        c.strokeRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev - radius - alt,comp + 2,alt)
        c.fill()

        c.beginPath()
        //c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mousey + radius)
        //c.lineTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space + comp,mousey + radius)
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev + radius,comp + 2,alt)
        c.strokeRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev + radius,comp + 2,alt)
        c.fill()

        comp2 = 12
        alt2 = 74
        c.beginPath()
        c.fillStyle = 'black' 
        c.fillStyle = 'rgb(211, 21, 21)'      
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt,comp2,alt2)
        c.strokeRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt,comp2,alt2)
        c.fill()

        c.fillStyle = 'black' 
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt,comp2/2,alt2/2)
        c.fill()

        alt3 = 16
        c.beginPath()
        c.fillStyle = 'rgb(211, 21, 21)'
        c.fillStyle = 'gray' 
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt - alt3,comp2 + comp + 2,alt3)
        c.strokeRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt - alt3,comp2 + comp + 2,alt3)
        c.fill()


        c.beginPath()
        xb = 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2
        yb = mouseprev - radius - alt - alt3
        c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt - alt3)
        //c.lineTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 + comp2 + comp + 2,mouseprev - radius - alt - alt3 + alt3)
        c.stroke()

        c.beginPath()
        //c.arcTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt - alt3,2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 + comp2 + comp + 2,mouseprev - radius - alt - alt3 + alt3, 10)
        //c.arcTo(5,5,10,10,6)
        c.stroke()
            
            x = 0
            /*
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            if (i == (contnumber/3 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
               // c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i + contnumber/3].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                c.stroke()
                c.beginPath()
            }
           // if (contsall[i].y + starty > starty) {
                //loop = false
           // }
            if (drawball == true) {
            //c.arc(x + radius + space,contsall[i + contnumber/3].y + starty,radius,0,2*Math.PI)
            }
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            if (drawball == true) {
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            }
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }
            */

            for (p = contnumber/3 + 1; p < (contnumber/3)*2; p++) {
                for (h in timers) {
                    conts[p].time[h] += 0.2
                    //conts2[0][p].time[h] += 0.15
                }
            }
            for (t = 0; t < timers2.length; t++) {
                //timers2[t]
                for (lo = contnumber/3 + 1; lo < (contnumber/3)*2; lo++){
                    for (ti = 0; ti < timers2[t].length; ti++) {
                        conts2[t][lo].time[ti] += 0.2
                    }
                }           
            }
        for (k in timers){
            timers[k].time += 0.1
        }
        for (k in timers2){
            timers2[k].time += 0.1
        }

if (loop == true) {
requestAnimationFrame(animate)
//document.getElementById('t').innerText = mouse
}
}
animate()

go = true

function addwave() {
    //timers.push({time:0,ind:tot,ind2:0})
    //console.log('mousey:',mousey)
    if (starty != mousey) {
        //console.log('hey')
    if (tot > 0) {
        //console.log('first beed y position',conts[(contnumber/3 + i)].ys[tot - 1])
        ampcont1 = conts2[0][(contnumber/3 + 2)].ysfinal[tot - 1] - mousey//Number(this.document.getElementById('ev2').innerText) - mousey
        ampman = Math.abs(conts2[0][(contnumber/3 + 2)].ysfinal[tot - 1] - mousey)
        console.log(tot - 1,conts2[0][(contnumber/3 + 2)].ysfinal[tot - 1])
        //console.log(tot - 1,':')
        //console.log(tot - 1 ,'final: ',conts[24].ysfinal[tot - 1], mousey)
        //ampman = starty - mousey
        dir = ''
        if (ampcont1 > 0) {
            dir  ='u'
        }else{
            dir = 'd'
        }
        join = false
        if (conts2[0][(contnumber/3 + 2)].go[tot - 2] == false && direct2[0][tot - 1] == dir) {
            //console.log('juntar')
            ampmanof = ampman + Number(advances2[0][tot - 1].amp[(contnumber/3 + 2)])
            totof = tot - 1
            join = true
        }else{
            totof = tot
            ampmanof = ampman 
        }
        }else{
            ampman = Math.abs(starty - mousey)
            ampcont1 = starty - mousey
            ampmanof = ampman
            totof  = tot
            join = false
        }
        //console.log('amplitude',ampman)
        // determinar o at a partir da posição da última conta (contnumber - 1)
        //  y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
        // y = ampman - i*at*ampman*0.03
        // ampman - 40*at*ampman*0.03 = 0
        // ampman = 40*at*ampman*0.03
        // at = ampman/(40*ampman*0.03)
        //at = (starty - mousey)/(20*(starty - mousey)*0.03)
        //console.log('mousey',mousey,'starty',starty)
        //at = 0.1
        at = 0.25
        // prever o y máximo de todas as contas ()
        //x = 2*(advance)*radius
        x = space + (contnumber/3)*radius
        if (ampmanof != 0) {
        for (i = contnumber/3; i < contnumber; i++) {
            //console.log(i,':', ampman - (contnumber - i)*at*ampman*0.03 + starty)
            yat = starty - ampman - (contnumber - i)*at*ampman*0.03
            //conts[i].ysfinal.push(starty - ampman - (contnumber - i)*at*ampman*0.03)
            x+= 2*radius
        }


    if (join == false && tot > 0) {
    //timers.push({time:0, ind:tot,ind2:0})
    timers2[0].push({time:0, ind:tot,ind2:0}) // essential ind: conts[n].length - 1
    }
    ad = 0
    if (join == false && tot > 0) {
    advances2[0].push({ads:[ad],sty:[],amp:[]}) // essential
    }
    //console.log('tot',tot)
    //essential
    for (ia = contnumber/3 + 1; ia < (contnumber/3)*2; ia++) { // adicionar sty para cada conta
        //if (conts[ia].fixpos.length > 0) {

            if (tot > 0 ) {
                //if (ia > contnumber/3 && ia <= contnumber) { // ia >= 20
                    if (join  == false) {
                    styman = conts2[0][ia].ysfinal[tot - 1]
                    }else{
                        console.log('tot ad',advances2[0][tot - 1].sty[ia])
                        styman = advances2[0][tot - 1].sty[ia]
                    }
                    advances2[0][totof].sty[ia] = styman
                //styman = 100 
                //}else if (ia  == contnumber/3){
                    //styman = conts[ia].ysfinal[tot - 1]
                //}else{
                    //styman = starty
                //}// + starty)
                }else{
                    //console.log('tot igual a 0')
                    styman = starty // o sty já está definido para primeira onda
                }

                if (join ==  false && tot > 0) {
                    //conts[ia].time.push(0) 
                    conts2[0][ia].time.push(0) // not to include
                }
                //if (ia >= contnumber/3 && ia <= contnumber) {
                //console.log(conts[ia].ys[tot])
                //console.log(conts[ia].ysfinal[tot])
                // para diferentes stys as amps são diferentes
                // conts[ia].ysfinal[tot] = amp - ia*at*amp*0.03 + styman
                // y - styman = amp(1 - ia*at*0.03)
                // amp = (y - styman)/(1 - ia*at*0.03))
                //console.log('STAND',1 - ia*at*0.03)
                //ampadd = (conts[ia].ysfinal[tot] - 100)/(1 - ia*at*0.03)
                //console.log(ampadd)
                //advances[tot].amp.push(Math.abs(conts[ia].ysfinal[tot] - starty))
                //advances[tot].amp.push(ampadd)
                //conts[ia].ysfinal[tot] = styman + ampman
                // ampman = conts[ia].ysfinal[tot] - styman 
                //console.log(ia, 'sty',styman,'ysfinal',conts[ia].ysfinal[tot],'amp',Math.abs(styman - conts[ia].ysfinal[tot]))
                //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                if (tot > 0) {
                    //console.log(conts2[0][ia].ysfinal,totof)
                    console.log('TOTOF',totof, Number(styman), ampmanof)
                if (ampcont1 > 0) { // direction
                  conts2[0][ia].ysfinal[totof] = Number(styman) - ampmanof + Number(((ad) + ia - contnumber/3)*at*ampmanof*0.03)
                  //conts2[0][ia].ysfinal[totof] = Number(styman) - ampmanof + Number((ia - contnumber/3)*at*ampmanof*0.03) // ampmanof => previous amp
                }else if (ampcont1 !== 0){
                    conts2[0][ia].ysfinal[totof] = Number(styman) + ampmanof - Number(((ad) + ia - contnumber/3)*at*ampmanof*0.03)
                    //conts2[0][ia].ysfinal[totof] = Number(styman) + ampmanof - Number((ia - contnumber/3)*at*ampmanof*0.03)
                }
            }
            if (tot > 0) {
                advances2[0][totof].amp[ia] = ampmanof // essential
            }
                //}else if (ia < 20){
                        //advances[tot].amp.push(Math.abs(ampcont1))
                        //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                        //advances[tot].amp.push(0)
                //}
       //}
    }

    
    if (tot > 0) {
    //advances2.push({ads:[],sty:[],amp:amplitude})
    //window.alert(cont)
    for (ia = 0; ia <= contnumber - 1; ia++) {
        //if (conts3[ia].fixpos.length > 0) {
        //advances2[tot].sty.push(conts[ia].fixpos[0] + starty)
        //}
    }
    //timers[tot - 1].delete = true
    //console.log('já terminou de fazer a última onda?',conts[39].ysfinal[tot - 1] == conts[39].ys[tot - 1])
}
// essential => use previous directions

   if (join == false){
    if (ampcont1 > 0) {
    //direct.push('u')
    addTimers(timers2,0,ampmanof,'u',0)
    if (tot > 0) {
    direct2[0].push('u')
    }
    }else{
        addTimers(timers2,0,ampmanof,'d',0)
        //direct.push('d')
    if (tot > 0) {
    direct2[0].push('d')
    }
    }

    vels.push(vel)
    if (tot > 0) {
        for (j = contnumber/3 + 1; j < (contnumber/3)*2;j++) {
            conts2[0][j].move.push(true) 
            conts2[0][j].fixpos.push(0)   
        }
}
}
    //for (a = 0; a < conts2[0].length; a++) {
        //conts2[0][a].move.push(true)
        //conts2[0][a].fixpos.push(0)
    //}
    for (a in conts3) {
        conts3[a].move.push(true)
        conts3[a].fixpos.push(0)
    }
    if (join == false) {
    tot++
    }
}
}
}

mousex = 'i'
mousey = 'i'
find = 0
ir = true
console.log('onmouse',window.onmousedown)
window.addEventListener('mousemove',function(event) {
    xtouch = mousex >= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 && mousex <= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp
    ytouch = mousey >= mouseprev - radius - alt && mousey <= mouseprev - radius - alt + alt2
    fstcon = go == true && mouse == 'down' && xtouch == true && ytouch == true
    if (fstcon == true || mousefollow == true) {
    if (mousey != 'i') {
    if (ir == true) {
        ir = false
    setTimeout(function () {
        ir = true
        addwave()
        mouseprev = mousey
        //tot++
        // mousey
    },20)
}
mousefollow = true
    }

}
//this.document.getElementById('t').innerText =  mouse == 'down' && xtouch == true && ytouch == true
})

mouse = 'up'
window.addEventListener('mousedown',function(event) {
    mouse = 'down'
    this.window.document.body.style.cursor = 'grab'
})
window.addEventListener('mouseup',function(event) {
    mouse = 'up'
    this.window.document.body.style.cursor = 'auto'
    mousefollow = false
})



window.addEventListener('mousemove',function(event) {
    if (go == true) {
    //c.clearRect(0,0,300,150)
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y)/cHeight)*150
    
        //prevx = String(this.document.getElementById('x').innerText)
        //this.document.getElementById('ev').innerText = 'y atual:' + conts[20].ys[tot - 1]
        //prevy = String(this.document.getElementById('y').innerText)
        //this.document.getElementById('ev2').innerText = conts[24].ys[current]
        //this.document.getElementById('x').innerText = direct[tot - 1]
        //this.document.getElementById('y').innerText = mousey
       
    }
})
}


function addTimers(settimer, contindex, ampli, mov, ad) {
    //console.log('adadwdwdwdwd',settimer,mov)
 /* variables:
 timers (2 or 3) check
 index (0,1,...) check
 amp check
 direction 
 ad (20,40,60..)
*/
//console.log('AD',ad)
if (conts2[contindex] != undefined && contindex > 0){
   
    for (j = contnumber/3 + 1; j < (contnumber/3)*2;j++) {
        conts2[contindex][j].move.push(true) 
        conts2[contindex][j].fixpos.push(0)   
    }
       settimer[contindex].push({time:0, ind:settimer[contindex].length,ind2:0}) // essential ind: conts[n].length - 1
        
        //ad = 0
        advances2[contindex].push({ads:[ad],sty:[],amp:[]}) // essential
        
        //essential
        //ampli = 5
        //mov = 'd'
        for (ia2 = contnumber/3 + 1; ia2 < (contnumber/3)*2; ia2++) { // adicionar sty para cada conta
            //if (conts[ia].fixpos.length > 0) {
    
                    //if (ia2 > (contnumber/3) && ia2 < (contnumber/3)*2) { // ia >= 20
                        styman = conts2[contindex][ia2].ysfinal[conts2[contindex][ia2].ysfinal.length - 1]
                    //styman = 100 
                    //}
                    advances2[contindex][advances2[contindex].length - 1].sty[ia2] = styman// + starty)

                    conts2[contindex][ia2].time.push(0) 

                    //if (ia2 >= (contnumber/3) && ia2 <= contnumber) {
                    if (mov == 'u') { // direction
                      conts2[contindex][ia2].ysfinal.push(Number(styman) - ampli + Number((ad + ia2 - contnumber/3)*at*ampli*0.03)) // ampmanof => previous amp
                    }else{
                        conts2[contindex][ia2].ysfinal.push(Number(styman) + ampli - Number((ad + ia2 - contnumber/3)*at*ampli*0.03))
                    }
                    
                    advances2[contindex][advances2[contindex].length - 1].amp[ia2] = ampli // essential
                    //}
           //}
        }
    // essential => use previous directions
        direct2[contindex].push(mov)
}else if (conts2[contindex] == undefined){
    //console.log('s')
    conts2.push([])
    for (j = 0; j < contnumber;j++) {
        if (j >= contnumber/3 && j < (contnumber/3)*2) {
            conts2[contindex].push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal:[],go:[],start:[],time:[],advances:[],running:[true],yo:[]})
            conts2[contindex][j].move.push(true) 
            conts2[contindex][j].fixpos.push(0)  
        }else{
            conts2[contindex].push([])
            //conts2[contindex].push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal:[],go:[],start:[],time:[],advances:[],running:[false],yo:[]})
        } 
        }

       settimer.push([])
       settimer[contindex].push({time:0, ind:0,ind2:0}) // essential ind: conts[n].length - 1
        
        //ad = 0
        //if (tot > 0 && join == false) {
        advances2.push([])
        advances2[contindex].push({ads:[ad],sty:[],amp:[]}) // essential
        //}
        
        //console.log('tot',tot)
        //essential
        //ampli = 5
        //mov = 'u'
        for (ia2 = contnumber/3 + 1; ia2 < (contnumber/3)*2; ia2++) { // adicionar sty para cada conta
            //if (conts[ia].fixpos.length > 0) {
    
                /*
                if (tot > 0) {
                    if (ia > 20 && ia <= contnumber) { // ia >= 20
                        if (join  == false) {
                        styman = conts[ia].ysfinal[tot - 1]
                        }
                    //styman = 100 
                    }else if (ia  == 20){
                        styman = conts[ia].ysfinal[tot - 1]
                    }
                    advances[contnumber][totof].sty[ia] = styman// + starty)
                    }else{*/
                        //console.log('tot igual a 0')
                        styman = starty // o sty já está definido para primeira onda
                    //}
                        advances2[contindex][0].sty[ia2] = starty
                        conts2[contindex][ia2].time.push(0) 

                    //if (ia >= (contnumber/3) && ia <= contnumber) {
                    if (mov == 'u') { // direction
                      conts2[contindex][ia2].ysfinal[0] = Number(styman) - ampli + Number((ad + ia2 - contnumber/3)*at*ampli*0.03) // ampmanof => previous amp
                    }else{
                        conts2[contindex][ia2].ysfinal[0] = Number(styman) + ampli - Number((ad + ia2 - contnumber/3)*at*ampli*0.03)
                    }
                    
                    advances2[contindex][0].amp[ia2] = ampli // essential
                    //}
           //}
        }
    // essential => use previous directions
        direct2.push([])
        direct2[contindex].push(mov)

        ysep.push([])
        for (ar in conts) {
            ysep[ysep.length - 1].push(0)
        }
}
}