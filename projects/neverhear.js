quase = ['2','*','3','*','2','x','x','x']



function REDONUMFACTORING(storer) {

    if (typeof storer === 'string') {
        
        other = []
        for (h in storer) {
            
            other.push(storer[h])
        }
        storer = other
    }

resultobtained = ''

elevar = 1
wasmultiplicated = false


operation = []
for (patience in storer) {
    
   
    if (storer[patience] == '*') {
        wasmultiplicated = true
        
        
        operation.push(storer[Number(patience) - 1])
        operation.push('x')
        operation.push(storer[Number(patience) + 1])
        

        storer[Number(patience) + 1] = fazerConta(operation)[0]
        resultobtained = fazerConta(operation)[0]
        
      
        operation = []
    }else if(storer[patience].search('[a-z]') != -1)  {
       
        if (storer[patience] == storer[Number(patience) - 1]) {
       
            elevar++

            if (patience == storer.length - 1) {
                
                resultobtained+= `^${elevar}`
                
            }

        }else{
          
            if (elevar > 1) {
                
                resultobtained+= `^${elevar}`
                
            }

            resultobtained+= storer[patience]
        
            
          
            elevar = 1
        }
        
       
    } 
}

if (wasmultiplicated == false) {
    //   
       addingnumber = ''
       for (eyes in storer) {
           
          // 
           if (storer[eyes].search('[0-9]') != -1) {
              // 
               addingnumber+= storer[eyes]
           }
       }
       addingnumber+= resultobtained
      // 
       
       resultobtained = addingnumber
    
   }
if(storer[0] == '-') {
    confirmedresult = '-'
    for (caracter in resultobtained) {
        confirmedresult+= resultobtained[caracter]
    }
    return confirmedresult
}else{
    return resultobtained
}
   
}
 // FAZER COnTA COM nÚMEROS
 function fazerConta(anterior) {
   
    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //
    }else{
        //
    }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
    //
    anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
    anterior.splice(n, 1)
    //
    n = n - 2
    //
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //
    }else{
        //
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //
}else{
    //
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //
}else{
    //
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
            //
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
            anterior.splice(n, 1)
            
            n = n - 2
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3
        
                //
            }else{
                //
            }
        }
    }
// }
}

    
}
return anterior
}


console.log(MULTIPLICARDIREITO('13','2x'))
function MULTIPLICARDIREITO(num1, num2) {
    

if (num1 == '1' || num2 == '1') {
    console.log('É 1')
    if (num1 == '1') {
        resultmult = num2
    }else{
        resultmult = num1
    }
}else{
    sónumero = ''
    sóletra = ''
    for (car in num1) {
        if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
            sónumero += num1[car]
        }else if(num1[car].search('[a-z]') != -1) {
            sóletra += num1[car]
        }
    }
    

    sónumero2 = ''
    sóletra2 = ''
    for (car in num2) {
        if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
            sónumero2 += num2[car]
        }else if(num2[car].search('[a-z]') != -1){
            sóletra2 += num2[car]
        }
    }
    
    if (sónumero.length > 0 && sónumero2.length > 0) {
        sónumero+= '*'
    }

    if (num1[0] == '-') {
        sinal1 = 'neg'
    }else{
        sinal1 = 'pos'
    }
    
    if (num2[0] == '-') {
        sinal2 = 'neg'
    }else{
        sinal2 = 'pos'
    }


    sónumero+= sónumero2

        sóletra+= sóletra2
    
       
        if (sinal1 == sinal2) {
           
            resultmult = sónumero+= sóletra
        }else{
           
            resultmult = '-'
            resultmult += sónumero+= sóletra
        }
}
return resultmult
}

aa = '222.23.5x'
arranjar(aa)
function arranjar(str) {

    
    comofica = []
    ground = ''
for (bye in str) {
    console.log(str[bye],'_________________________________')

        
        carac = str[bye]
      
            if (ground.length == 0) {
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1) {
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
               
            }
            if (bye == str.length - 1) {
                comofica.push(ground)
            }

    console.log('COMOFICA', comofica)
    str[bye].numero = comofica
 }
 return comofica
}

console.log(estáContido('7.3.3y','3.7.3.3.y'))
function estáContido(comparador, variable) {
    console.log(variable, 'está contida em', comparador)
stay = arranjar(comparador)
contido = true

for (dry in variable) {
    
    if (variable[dry] != '.' && variable[dry] != '-') {
      
        if (stay.indexOf(variable[dry]) != -1) {
             stay.splice(stay.indexOf(variable[dry]), 1)
        }else{
         contido = false
        }
       
    }
   
   }
   
   if (contido == true) {
    return true
   }else{
       return false
   }

}