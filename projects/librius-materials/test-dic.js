
initialcontent = ''
function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
}

// Materiais Array
contents = [
    {title:'The Story Of An Hour', url:'html-logo.svg',subs:[
        {title: 'break to', type:"phrasal verb",meaning: 'tell',examples: 'great care was taken to break to her as gently as possible'},
        {title: 'conceal', type:"verb",meaning: 'conceal means to hide, cover, or keep something out of sight or from the knowledge of others intentionally. It involves keeping something secret or not making it visible or apparent',examples: 'veiled hints that revealed in half concealing@She concealed the gift behind her back, hoping to surprise her friend later@He couldn\'t conceal his excitement when he heard the news of his promotion'},
        {title: 'intelligence', type:"noun",meaning: 'information, news',examples: 'he had been in the newspaper office when intelligence of the railroad disaster was received@the government had intelligence from several different sources'},
        {title: 'hasten', type:"verb",meaning: '[Intransitive] To say or do something without delay; hurry_[Transitive] To make something happen sooner or more quickly',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_The treatment she received may, in fact, have hastened her death'},
        {title: 'forestall', type:"transitive verb",meaning: 'to prevent something from happening or somebody from doing something by doing something first',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@Try to anticipate what your child will do and forestall problems'},
        {title: 'tender', type:"adjective",meaning: 'kind, gentle and loving_easy to bite through and cut (food)_painful when you touch it (part of the body)_easily hurt or damaged; delicate',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_This meat is extremely tender_My leg is still very tender where I banged it'},
        {title: 'bear', type:"verb",meaning: 'to show something; to carry something so that it can be seen_to be able to accept and deal with something unpleasant; stand, to support the weight of somebody or something_to take responsibility for something_turn',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@He was badly wounded in the war and still bears the scars@She bears little resemblance to (= is not much like) her mother_She couldn\'t bear the thought of losing him@The ice is too thin to bear your weight_In the end it\'s consumers who bear the burden of higher prices_When you get to the fork in the road, bear right'},
        {title: 'weep', type:"verb",meaning: 'to cry, usually because you are sad',examples: 'she wept at onece, with sudden, wild abandonment, in her sister\'s arms_She wept bitter tears of disappointment'},
        {title: 'grief', type:"noun",meaning: 'a very sad feeling, especially when somebody dies_[Uncountable] (Informal) problems and worry',examples: 'when the storm of grief had spent itself she went away to her room alone@They were able to share their common joys and griefs_He caused his parents a lot of grief'},
        {title: 'aquiver', type:"adjective",meaning: 'trembling, shaking',examples: 'trees that were all aquiver with the new spring life'},
        {title: 'peddler', type:"noun",meaning: 'a person who goes from place to place selling small items',examples: 'in the street below a peddler was crying his wares'},
        {title: 'sparrow', type:"noun",meaning: 'pardal',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'twitter', type:"verb",meaning: 'sound produced by birds',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'eave', type:"noun",meaning: 'the part of a roof that meets or overhangs the walls of a building',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'roomy', type:"adjective",meaning: 'spacious',examples: 'there stood, facing the open window, a comfortable, roomy armchair'},
        {title: 'patch', type:"noun",meaning: 'a small area of something, especially one which is different from the area around it_a small piece of material that is used to cover a hole in something or to make a weak area stronger, or as decoration; a piece of material that you sew onto clothes as part of a uniform',examples: 'there were patches of blue sky showing here and there_I sewed patches on the knees of my jeans@He wears a patch from his employer, Verizon'},
        {title: 'sob', type:"verb",meaning: '[Intransitive] To cry noisily, taking sudden, sharp breaths_to say something while crying',examples: 'as a child who has cried itself to sleep continues to sob in its dreams_He sobbed out his troubles'},
        {title: 'fair', type:"adjective",meaning: 'pale',examples: 'with a fair, calm face'},
        {title: 'bespeak', type:"transitive verb",meaning: 'to show or suggest something',examples: 'whose lines bespoke repression and even a certain strength'},
        {title: 'dull', type:"adjective",meaning: 'not interesting or exciting; dreary_not bright or shiny; not clear or loud_not very severe, but continuous',examples: 'there was a dull stare in her eyes_dull knives@The fire died down to a dull glow@The gates shut behind him with a dull thud_dull ache/pain'},
        {title: 'yonder', type:"adverb",meaning: ' "used to indicate a location that is at a distance from both the speaker and the listener; over there',examples: 'whose gaze was fixed away off yonder on one of those patches od blue sky@Whose is that farm over yonder?@Let\'s meet by the big oak tree yonder'},
        {title: 'glance', type:"noun/verb",meaning: 'quick view or a glimpse of something',examples: 'it was not a glance of reflection, but rather indicated a suspension of intelligent thought@I glanced up quickly to see who had come in@She glanced through the report@He glanced briefly down the list of names@I only had time to glance at my emails'},
        {title: 'elusive', type:"adjective",meaning: 'difficult to find, define or achieve',examples: 'she did not know; it was too subtle and elusive to name@the elusive concept of \'literature\'@A solution to the problem of toxic waste is proving elusive'},
        {title: 'strive', type:"intransitive verb",meaning: 'to try very hard to achieve something;struggle',examples: 'she was striving to beat it back with her will@We encourage all members to strive for the highest standards@They were always striving towards perfection@striving against corruption'},
        {title: 'slender', type:"adjective",meaning: 'thin, slim',examples: 'two white slender hands'},
        {title: 'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'they(her eyes) stayed keen and bright@His father was keen for him to go to university@ I wasn\'t too keen on going to the party'},
        {title: 'save', type:"adjective",meaning: 'exceto',examples: 'the face that had never looked save with love upon her'},
        {title: 'bend', type:"verb",meaning: 'dobrar, inclinar',examples: 'there would be no powerful will bending hers in that blind persistance@He bent his head and kissed her'},
        {title: 'private will', type:"noun",meaning: 'vontade pessoal',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
        {title: 'fancy', type:"adjective/noun",meaning: 'imagine; imagine_describes something that is decorative, stylish, or appealing, often implying a sense of elegance or sophistication',examples: 'her fancy was running riot along those days ahead of her_very fancy clothes'},
        {title: 'at length', type:"expression",meaning: 'after a long time;finally',examples: 'she arose at length and opened the door to her sister\'s importunities'},
        {title: 'grip-sack', type:"noun",meaning: 'grip sack; ​a bag made out of cloth that is like a tube in shape and is closed by a string around the top. It is usually carried over the shoulder',examples: 'carrying his grip-sack and umbrella'},
        {title: 'screen', type:"verb",meaning: 'hide',examples: 'screen him from the view of his wife'},
        {title: 'piercing', type:"adjective",meaning: 'high-pitched, agudo',examples: 'he stood amazed at Josephine piercing cry'},
        {title: '', type:"",meaning: '',examples: ''},
        {title: '', type:"",meaning: '',examples: ''},
        {title: '', type:"",meaning: '',examples: ''},
    ]}, 
 
    {title:'The Story Of An Hour', url:'html-logo.svg',subs:[
        {title: 'abacaxi', type:"noun",meaning: '',examples: ''},

    ]}, 
    
    /*{title:'CSS', url:'css-logo.svg',subs:[]},
    {title:'JAVASCRIPT', url:'js-logo.svg',subs:[{title:'Iframas',url:'../materiais/iframe.html'}]},*/
]

var subjects = []
document.addEventListener("DOMContentLoaded", function() {

    get1('vocab').style.backgroundColor = 'var(--lightpink)'
    bodycontent = document.getElementById('vocabmng')
    divlist = document.createElement('div')
    divlist.id = 'list'
    bodycontent.appendChild(divlist)
    vocabh = document.createElement('h1')
    vocabh.setAttribute('class','vocabh')
    vocabh.innerText = 'Vocabulary List'
    divlist.appendChild(vocabh)
    // Código para saber qual material está sendo acessado
    specfunc = String(document.getElementById('searcher').onclick)
    cango = true
    material = ''
    for (x = 33; cango == true && x < specfunc.length; x++) {
        if (specfunc[x] == '\'')
            cango = false
        else
           material+= specfunc[x]
        }

    // Código para que somente o vocabulário do material acessado seja utilizado
    newContent = []
    if (material != '') {
        for (trust in contents) {
            console.log(contents[trust])
            if (contents[trust].title == material) {
                console.log('this one!')
                newContent.push(contents[trust])
            }
        }
        contents = [...newContent]
    }

    posind = 0
    wordlist = []
    for (dead in contents) {
        console.log('DEAD',contents[dead].subs)
        for (fate in contents[dead].subs) {
            console.log(contents[dead].subs[fate])
            pchoice = document.createElement('p')
            pchoice.setAttribute('class', 'choice')
            pchoice.innerHTML = `<img src="images/pencil.svg" alt="" style="width: 20px;margin-right: 5px"></img>${contents[dead].subs[fate].title}`
            pchoice.setAttribute('onclick',`search('none',${posind})`)
            divlist.appendChild(pchoice)
            wordlist.push(contents[dead].subs[fate])
            posind++
        }
    }

for (i in contents) {
    console.log(contents[i])
    for (e in contents[i].subs) {
        subjects.push({title1:i, title2: contents[i].subs[e].title.toLowerCase(),index:e})
    }}

// Ordena as palavras alfabeticamente
function sortWords(palavrasPrimitivas,s) {
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []

for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    neword = ''
    for (car in word) {
        if (word[car] != ' ') {
            neword+= word[car]
        }
    }
    word = neword
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        if (letra != word.length - 1) {
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }  }
    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)
}

for (pNumber in palavrasNumericas) {
    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        if (n != pNumber) {
            palavraAnalisar = []
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   if (palavrasNumericas[n][num] == '.') {
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }}
            palavraOrigin = []
            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   if (palavrasNumericas[pNumber][num] == '.') {
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   }}
           if (palavraOrigin.length > palavraAnalisar.length) {
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                pare = true
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                pare = true
                stop = true
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
              }else{
                  pare = false
              }}
           }else{
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    pare = true
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                    pare = true
                    stop = true
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                  }else{
                      pare = false
                  }}}}}}

newlista = []
for (p in palavrasNumericas) {
newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
}
return newlista
}

pselected = -1
podeir = true
subjects = sortWords(subjects,'title2')

var songsSearched = []

window.addEventListener('keyup', function(event) {
    console.log(event.key)
    console.log('pselected:', pselected,'ps:',ps.length)
    if (document.getElementById('searcher') == document.activeElement && event.key == 'Enter' && pselected == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected == -1) {
        quantasopções = document.getElementById('main').getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[0].id.replace('a','')))
        }}
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[pselected].id.replace('a','')))
    }
    
    // Selecionando a sugestão com as setas
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    if (document.getElementById('searcher') == document.activeElement && event.key == 'ArrowDown') { 
        console.log('VAI',ps.length, pselected)
        if (pselected < ps.length - 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected++
            //this.document.getElementById('searcher').value = pselected
            ps[pselected].style.backgroundColor = 'var(--lightgray)'
        }
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'ArrowUp') {
        if (pselected >= 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected--
            //this.document.getElementById('searcher').value = pselected
           ps[pselected].style.backgroundColor = 'var(--lightgray)'
        } }})

// Quando uma tecla é pressionada
document.getElementById('searcher').addEventListener('keyup',function(event) {
    if (event.key != 'ArrowDown' && event.key != 'ArrowUp' && event.key != 'Enter') {
        search2()
    }})

// Cada vez que o usuário digita um caractere na barra de pesquisa
function search2() {    
    pselected = -1
    pnumber = -1
    pesquisa = document.getElementById('searcher').value
   // window.alert(allvidholders.length)
   if (pesquisa.length == 0) {
    document.getElementById('main').style.display = 'none'
   }
   
    //window.alert(pesquisa.toLowerCase())
    allps = document.getElementsByClassName('psearcher')
    //window.alert(allps.length)
    for (n = allps.length - 1; n >= 0; n--) {
   //window.alert(allps[n])
   document.getElementById('main').removeChild(allps[n])
    }
   opnumbers = 0
   opspath = []
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             //d.innerText = 'o'
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
             document.getElementById('main').appendChild(psearcher)
             document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
             }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         } }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in subjects) {
             pesquise = pesquisa.toLowerCase()
             if (subjects[n].title2.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                opspath.push(subjects[n])
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = subjects[n].title2
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + opnumbers
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                 //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
                 d = document.createElement('span')
                 d.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 //d.innerText = 'o'
                 d.setAttribute('class','phelp')

                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (pnumber < 7) {
                    document.getElementById('main').appendChild(psearcher)
                    document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                    }
                 opnumbers++
                 document.getElementById('main').style.display = 'block'
             }}}
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             //d.innerText = 'o'
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
                document.getElementById('main').appendChild(psearcher)
                document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }}}
 if (opnumbers == 0) {
     document.getElementById('main').style.display = 'none'
 }}

ps = document.getElementById('main').getElementsByClassName('psearcher')

});

  // Quando a pesquisa é realizada (uma opção é clicada)
function dothesearch(whichid) {

  document.getElementById('searcher').value = opspath[whichid].title2
  allps = document.getElementsByClassName('psearcher')
  podeir = true

 for (n = allps.length - 1; n >= 0; n--) {
     //if (allps[n].id != 'a' + whichid) {
 document.getElementById('main').removeChild(allps[n])
    // }
  }

  search(whichid)
  
  console.log('HERE', document.getElementById('main').style.display)
  document.getElementById('main').style.display = 'none'
  console.log('HERE', document.getElementById('main').style.display)
  pselected = -1
}

 // Quando a barra de pesquisa é clicada quando vazia
 function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }}

    // Quando o mouse entra em uma opção(psearcher)
  function entrou(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    ps = document.getElementById('main').getElementsByClassName('psearcher')

    podeir = false 
    //document.getElementById('searcher').value = 'entrou' + thing + podeir
    
    if (pselected != -1 && pselected != thing) {
        ps[pselected].style.backgroundColor = 'var(--verylightgray)'
        pselected = -1
    }
    //document.getElementById('searcher').value += 'thing' + thing

    ps[thing].style.backgroundColor = 'var(--lightgray)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    podeir = true
    //document.getElementById('searcher').value = 'saiu' + thing + podeir
    pselected = -1
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'var(--verylightgray)'
    }}

    vocabopen = 'none'
    innerbody = ''
 
// Cria o conteúdo(quando é feita a pesquisa)
function search(path, done) {

console.log('TAMTAMTAMTAM')
pesquisa = document.getElementById('searcher').value
bodycontent = document.getElementById('vocabmng')
console.log('VOCABOPENNNNN', vocabopen, vocabopen == 'none', vocabopen == true)

if (vocabopen == 'none' || vocabopen == true) {
    console.log('MUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR')
    repl = get1('vocabmng').innerHTML
    if (stack == true && vocabopen == true) {
        bodycontent.innerHTML = innerbody
    }
    innerbody = repl
    vocabopen = false
    get1('vocab').style.backgroundColor = 'var(--verylightpink)'
    get1('words').style.backgroundColor = 'var(--lightpink)'
}

if (stack == false) {
    bodycontent.innerHTML = ''
    }

hd = document.createElement('h1')
if (path != 'none') {
console.log('PATH!!!!',path)
console.log(opspath[path])
wordInfo = contents[opspath[path].title1].subs[opspath[path].index]
}else{
    console.log(done)
    wordInfo = wordlist[done]
}
hd.innerText = wordInfo.title
span = document.createElement('span')
span.setAttribute('class','tipo')
span.innerText = '(' + wordInfo.type + ')'
hd.appendChild(span)
bodycontent.appendChild(hd)
exindex = 0
text1 = ''
textindex1 = 0
for (char in wordInfo.meaning) {
    mngc = wordInfo.meaning[char]
 //console.log(mngc)
 if (mngc != '_') {
 text1+= mngc
 }

 if (mngc == '_' || char == wordInfo.meaning.length - 1) {
    //Console.log('STOP!', text1)
    textindex1++
    pEl = document.createElement('p')
    newtext1 = ''
    for (vai in text1) {
        if (vai != 0) 
        newtext1+= text1[vai]
    }
    text1 = text1[0].toUpperCase() + newtext1
    console.log('DIAL TONES', newtext1)
    /*pEl.innerHTML = `<img src="images/pencil.svg" alt=""> <span class="inline">${text1}</span>`*/
    pEl.innerHTML = `<span class="inline"><span style="color: var(--mainpink);font-weight: 800;">${textindex1}. </span>${text1}</span>`
    pEl.setAttribute('class','pel1')
    bodycontent.appendChild(pEl)
    text1 = ''

    keepgoing = true
    text2 = ''
    textindex2 = 0
   for (beg = exindex; keepgoing == true && beg < wordInfo.examples.length; beg++) {
    exc = wordInfo.examples[beg]
    //console.log('EX',exc)
    if (exc != '_' && exc != '@') {
        text2+= exc
    }
    //console.log(exc) 
    if (exc == '_' || beg == wordInfo.examples.length - 1 || exc == '@') {
        textindex2++
        if (exc != '@') 
        keepgoing = false
        console.log('STOP 2!!', text2)
        newtext2 = ''
        for (vai in text2) {
            if (vai != 0) 
            newtext2+= text2[vai]
        }
        if (text2 != '') {
        text2 = text2[0].toUpperCase() + newtext2
        pEl = document.createElement('p')
        pEl.innerHTML = `<span style="font-weight: 500;">Ex ${textindex2}</span>:&nbsp ` + text2
        pEl.setAttribute('class','pel2')
        bodycontent.appendChild(pEl)
        }

        if (exc == '@') 
        text2 = ''
    }
    exindex++
   }
 }
}
}

//stack button
stack = false
animationOn = false
function move() {
    console.log('COME ON, LET US MOVE IT')
    clickelement = document.getElementsByClassName('stack')[0]
    stackelement = document.getElementsByClassName('yes-no')[0]
    if (animationOn == false) {
    animationOn = true
    if (stack == false) {
        clickelement.style.backgroundColor = 'var(--lightpink)'
        stackelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-forward 0.2s forwards'
        stack = true
    }else{
        stackelement.style.backgroundColor = 'var(--lightpink)'
        clickelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-backward 0.2s forwards'
        stack = false
    }
    stackelement.addEventListener("animationend", animationEnded)
    function animationEnded() {
        console.log('it ended')
        animationOn = false
    }
}
}

function gotovocab() {
    if (vocabopen == false) {
        get1('vocab').style.backgroundColor = 'var(--lightpink)'
        get1('words').style.backgroundColor = 'var(--verylightpink)'
        repl = get1('vocabmng').innerHTML
        get1('vocabmng').innerHTML = innerbody
        innerbody = repl
        vocabopen = true
    }
}

function gotowords() {
    if (vocabopen == true) {
        get1('vocab').style.backgroundColor = 'var(--verylightpink)'
        get1('words').style.backgroundColor = 'var(--lightpink)'
        repl = get1('vocabmng').innerHTML
        get1('vocabmng').innerHTML = innerbody
        innerbody = repl
        vocabopen = false
    }
}