exp = ['3','+','50','x','^','2','+','20','-','14','x','^','2']

// FAZENDO AS POTENCIAÇÕES COM NÚMEROS
for (y in exp) {
    //  //console.log(exp[y])
  
      if (exp[y] == '^') {
          //console.log('exp[y - 1]: ' + exp[Number(y) - 1])
          //console.log('exp[y]: ' + exp[y])
          //console.log('exp[y + 1]: ' + exp[Number(y) + 1])
  
         ad =  exp[Number(y) - 1] 
          for (h = 0; h < Number(exp[Number(y) + 1]) - 1; h++) {
              //console.log(h)
              exp[Number(y) - 1]+= ad
          }
  
          exp.splice(Number(y) + 1, 1)
          exp.splice(y, 1)
          //console.log(exp[Number(y) - 1])
          //console.log(exp)
      }
  }
//

  // SEPARANDO OS MONÔMIOS
monomios = [{numero: ''}]
obnum = 0

for (n = 0; n < exp.length; n++) {
//console.log(exp[n], monomios[obnum])

if (String(exp[n]).search('[\\-\\+]') != -1 && n != 0) {
//console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += exp[n]
}
//




function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //console.log('POTENCIALIZAÇÃO')
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
    //console.log('RAIZ')
    anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
    anterior.splice(n, 1)
    //console.log(n)
    n = n - 2
    //console.log(n)
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('MULTIPLICAÇÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('DIVISÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('NaN') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //console.log(anterior[n])
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('ADIÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('SUBTRAÇÃO') 
            anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('MULTIPLICAÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
            //console.log('RAIZ')
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
            anterior.splice(n, 1)
            
            n = n - 2
            //console.log(n)
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3
        
                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }
    }
// }
}

    
}
return anterior
}