
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
        {title: 'break to', type:"transitive phrasal verb",meaning: 'tell',examples: 'great care was taken to break to her as gently as possible'},
        {title: 'conceal', type:"verb",meaning: 'conceal means to hide, cover, or keep something out of sight or from the knowledge of others intentionally. It involves keeping something secret or not making it visible or apparent',examples: 'veiled hints that revealed in half concealing@She concealed the gift behind her back, hoping to surprise her friend later@He couldn\'t conceal his excitement when he heard the news of his promotion'},
        {title: 'intelligence', type:"noun",meaning: 'information, news',examples: 'he had been in the newspaper office when intelligence of the railroad disaster was received@the government had intelligence from several different sources'},
        {title: 'hasten', type:"verb",meaning: '[Intransitive] To say or do something without delay; hurry_[Transitive] To make something happen sooner or more quickly',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_The treatment she received may, in fact, have hastened her death'},
        {title: 'forestall', type:"transitive verb",meaning: 'to prevent something from happening or somebody from doing something by doing something first',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@Try to anticipate what your child will do and forestall problems'},
        {title: 'tender', type:"adjective",meaning: 'kind, gentle and loving_easy to bite through and cut (food)_painful when you touch it (part of the body)_easily hurt or damaged; delicate',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_This meat is extremely tender_My leg is still very tender where I banged it'},
        {title: 'bear', type:"verb",meaning: '[Transitive] To show something; to carry something so that it can be seen_[Transitive] To be able to accept and deal with something unpleasant; stand, to support the weight of somebody or something_[Transitive] To take responsibility for something_[Intransitive] turn',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@He was badly wounded in the war and still bears the scars@She bears little resemblance to (= is not much like) her mother_She couldn\'t bear the thought of losing him@The ice is too thin to bear your weight_In the end it\'s consumers who bear the burden of higher prices_When you get to the fork in the road, bear right'},
        {title: 'weep', type:"verb",meaning: 'to cry, usually because you are sad',examples: 'she wept at once, with sudden, wild abandonment, in her sister\'s arms_She wept bitter tears of disappointment'},
        {title: 'grief', type:"noun",meaning: 'a very sad feeling, especially when somebody dies_[Uncountable] (Informal) problems and worry',examples: 'when the storm of grief had spent itself she went away to her room alone@They were able to share their common joys and griefs_He caused his parents a lot of grief'},
        {title: 'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul'},
        {title: 'aquiver', type:"adjective",meaning: 'trembling, shaking',examples: 'trees that were all aquiver with the new spring life'},
        {title: 'peddler', type:"noun",meaning: 'a person who goes from place to place selling small items',examples: 'in the street below a peddler was crying his wares'},
        {title: 'cry', type:"verb",meaning: 'to say something loudly',examples: 'in the street below a peddler was crying his wares'},
        {title: 'ware', type:"noun",meaning: 'objects made of the material or in the way or place mentioned; objects used for the purpose or in the room mentioned',examples: 'ceramic ware@silverware@a colletion of local ware@homeware@kitchenware'},
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
        {title: 'save', type:"conjunction",meaning: 'exceto',examples: 'the face that had never looked save with love upon her'},
        {title: 'bend', type:"verb",meaning: 'dobrar, inclinar',examples: 'there would be no powerful will bending hers in that blind persistance@He bent his head and kissed her@The road bends to the left'},
        {title: 'private will', type:"noun",meaning: 'vontade pessoal',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
        {title: 'fellow-creature', type:"noun",meaning: 'parceiro',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
        {title: 'self-assertion', type:"noun",meaning: 'the quality of being very confident(self-assured) and not afraid to express your opinions',examples: 'what could love, the unsolved mistery, count for in the face of this possession of self-assertion'},
        {title: 'fancy', type:"adjective/noun",meaning: 'imagine; imagine_describes something that is decorative, stylish, or appealing, often implying a sense of elegance or sophistication',examples: 'her fancy was running riot along those days ahead of her_very fancy clothes'},
        {title: 'shudder', type:"noun/intransitive verb",meaning: 'to shake because you are cold or frightened, or because of a strong feeling',examples: 'iti was only yesterday she had thought with a shudder that life might be long@Alone in the car, she shuddered with fear'},
        {title: 'at length', type:"expression",meaning: 'after a long time;finally',examples: 'she arose at length and opened the door to her sister\'s importunities'},
        {title: 'grip-sack', type:"noun",meaning: 'duffel bag; ​a bag made out of cloth that is like a tube in shape and is closed by a string around the top. It is usually carried over the shoulder',examples: 'carrying his grip-sack and umbrella'},
        {title: 'screen', type:"transitive verb",meaning: 'hide',examples: 'screen him from the view of his wife'},
        {title: 'piercing', type:"adjective",meaning: 'high-pitched, agudo',examples: 'he stood amazed at Josephine piercing cry'},
        {title: '', type:"",meaning: '',examples: ''},
    ]}, 
 
    {title:'Appointment With Love', url:'html-logo.svg',subs:[
        {title: 'booth', type:"noun",meaning: 'cabine; ​a small place with walls or sides where you can do something privately, for example make a phone call or vote',examples: 'the great round clock over the information booth in Gand Central Station@a ticket booth; a phone booth'},
        {title: 'narrow', type:"noun/verb",meaning: 'estreito; measuring a short distance from one side to the other, especially in relation to length',examples: 'his eyes narrowed to note the exact time@There was only a narrow gap between the bed and the wall'},
        {title: 'pound', type:"verb",meaning: 'bater, beat, strike',examples: 'his heart was pounding with a beat that shocked him because he could not control it'},
        {title: 'yet', type:"conjunction/adverb",meaning: 'used to contrast or introduce an unexpected or conflicting idea after a positive statement_used in negative sentences and questions to talk about something that has not happened but that you expect to happen',examples: 'the woman he had never seen, yet whose written words had been with him and sustained him unfailingly_Are we there yet?@We don\'t yet know what really happened'},
        {title: 'unfailingly', type:"adverb",meaning: 'infalivelmente; in a way that you can rely on to always be there and always be the same',examples: 'whose written words had been with him and sustained him unfailingly'},
        {title: 'besiege', type:"transitive verb",meaning: 'surround; siege',examples: 'beyond the ring of people besieging the clerks@Paris was besieged for four months and forced to surrender@Fans besieged the box office to try and get tickets for the concert'},
        {title: 'clerk', type:"noun",meaning: 'attendant; a person whose job is to serve customers',examples: 'beyond the ring of people besieging the clerks'},
        {title: 'midst', type:"noun",meaning: 'the middle part of something',examples: 'his plane had been caught in the midst of a pack of Zeros'},
        {title: 'grinning', type:"adjective/verb",meaning: 'A "grin" is a broad and often slightly mischievous or pleased smile, where the corners of the mouth are turned upward',examples: 'he had seen the grinning face of one of the enemy pilots@Stop grinning and tell me what happened!'},
        {title: 'sharp', type:"adjective",meaning: 'quick to notice or understand things or to react; focused; alert_sudden, rapid and large',examples: 'his face grew sharp@It was very sharp of you to see that!_a sharp rise in crime@sharp increase in unemployment'},
        {title: 'weave', type:"verb",meaning: 'tecer; to make cloth, a carpet, a basket, etc. by crossing threads(fios) or narrow pieces of material across, over and under each other',examples: 'threads of color being woven into a gray web'},
        {title: 'bondage', type:"noun",meaning: 'escravidão; the state of being a slave or prisoner; used metaphorically to describe a state of being emotionally or psychologically trapped, restricted, or controlled',examples: 'the book "Of Human Bondage"@women’s liberation from the bondage of domestic life'},
        {title: 'writing-in-habit', type:"noun",meaning: 'habit of writing on books',examples: 'he had always hated that writing-in-habit but these remarks(notes) were different'},
        {title: 'understanding', type:"adjective/noun",meaning: 'compreensivo; quality of person who understands why people behave in a particular way and forgives them when they do something wrong',examples: 'he had never believed that a woman could see into a man\'s heart so tenderly, so understandingly@We must tackle(deal with) the problem with sympathy and understanding'},
        {title: 'ship out', type:"phrasal verb",meaning: 'to leave or depart from a place, often referring to military personnel or individuals on a voyage_to send or transport goods or products from one place to another, especially from a seller to a customer',examples: 'next day he had been shipped out_The company will ship out the orders to customers by the end of the week'},
        {title: 'faithfully', type:"adverb",meaning: 'fielmente; in a way that shows true commitment; in a way that you can rely on',examples: 'she had faithfully replied'},
        {title: 'plea', type:"noun",meaning: 'beg; a serious emotional request, especially for something needing action now',examples: 'but she had refused all his pleas to send him her phothograph'},
        {title: 'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that'},
        {title: 'take chance', type:"expression",meaning: 'to take a risk or engage in something that has an uncertain outcome; refers to the willingness to try something despite the possibility of failure or negative consequences',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that@"He decided to take a chance and invest his savings in the new startup'},
        {title: 'plain', type:"adjective",meaning: 'lacking beauty or ugliness',examples: 'suppose I\'m plain (and you must admit that this is more likely)'},
        {title: 'go on', type:'intransitive phrasal verb',meaning: 'to continue_to take place(happen)',examples: 'both of us are free to stop or go on after that_what is going on here?'},
        {title: 'pale', type:"adjective",meaning: 'pálido',examples: 'in her pale green suit she was like springtime come alive'},
        {title: 'entirely', type:"adverb",meaning: 'completely',examples: 'entire forgetting to notice that she was wearing no rose'},
        {title: 'tuck', type:"verb",meaning: 'enfiar, acomodar; to push or fit something tightly or snugly into a space',examples: 'her graying hair tucked under a worn hat@tuck in your shirt'},
        {title: 'worn', type:"adjective",meaning: 'desgastado',examples: 'her graying hair tucked under a worn hat'},
        {title: 'plump', type:"adjective",meaning: 'euphemism for saying someone is fat',examples: 'she was more than plump'},
        {title: 'thrust', type:"adjective/verb",meaning: 'enfiado, enfiar; to cause to enter or pierce something by or as if by pushing; to push suddenly and strongly',examples: 'her thick-ankled feet were thrust into low-heeled shoes@thrust a dagger into his heart@She thrust the papers at me'},
        {title: 'rumpled', type:"adjective",meaning: 'amassado; creased (= not smooth) and messy',examples: 'but wore a red rose in the rumpled lapel of her brown coat'},
        {title: 'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'so keen was his desire to follow the girl'},
        {title: 'long', type:"intransitive verb",meaning: 'to feel a strong desire or craving especially for something not likely to be attained',examples: 'yet so deep was his longing for the woman'},
        {title: 'uphold', type:"transitive verb",meaning: 'to give support to; to lift up',examples: 'whose spirit had truly upheld his own'},
        {title: 'sensible', type:"adjective",meaning: 'rational, reasonable',examples: 'her pale, plump face was gentle and sensible'},
        {title: 'twinkle', type:"noun",meaning: 'cintilar, brilho',examples: 'her gray eyes had a warm, kindly twinkle'},
        {title: 'broad', type:"adjective",meaning: 'wide, large',examples: 'he squared his broad shoulders'},
        {title: '', type:"noun",meaning: '',examples: ''},
    ]}, 

    {title:'text-1-train-1', url:'html-logo.svg',subs:[
        {title: 'death toll', type:"noun",meaning: 'taxa de mortes, refers to the number of people who have died as a result of a particular event or circumstance, such as a natural disaster, war, or disease outbreak',examples: 'Erdogan, then the prime minitster, blamed poor construction for the high death toll'},
        {title: 'aftermath', type:"noun",meaning: 'desdobramento, consequências(geralmente negativas); refers to the consequences or effects of a significant event or situation, especially a negative or disastrous one; outcome, fallout ',examples: 'In the aftermath, authorities promised stricter building regulations'},
        {title: 'strict', type:"adjective",meaning: 'severe, rigorous, rigid',examples: 'In the aftermath, authorities promised stricter building regulations'},
        {title: 'preparedness', type:"noun",meaning: 'preparação',examples: 'introduced an “earthquake tax” aimed at improving preparedness in a country that sits on two major geological faultlines'},
        {title: 'faultline', type:"noun",meaning: 'a break in the earth\'s surface',examples: 'a country that sits on two major geological faultlines'},
        {title: 'overwhelming', type:"adjective",meaning: 'extremely powerful, intense, or forceful; difficult to fight against',examples: 'the newly formed party won elections in 2002 by an overwhelming majority (= maioria esmagadora)'},
        {title: 'stock market', type:"noun",meaning: 'mercado de ações',examples: 'promising transparency and to rebuild the economy, ruined by a stock market crash'},
        {title: 'aftershock', type:"noun",meaning: 'a smaller earthquake that occurs after a larger earthquake, in the same general area and along the same fault zone',examples: ' after Monday’s even deadlier earthquake and aftershocks'},
        {title: 'amount', type:"intransitive verb/noun",meaning: ' used to describe the total or final result of something or to express the magnitude or significance of a situation_the total number or quantity',examples: 'constructors and supervisors should now see that their negligence amounts to murder@"His hard work and dedication amount to success in his career_Payments are limited to a certain amount.'},
        {title: 'lax', type:"adjective",meaning: 'without much care, attention, or control; lacking in rigor or strictness:',examples: 'endemic corruption and lax enforcement of building codes have exacerbated the crisis'},
        {title: 'building code', type:"noun",meaning: 'set of regulations and standards that specify the requirements for the design, construction, and maintenance of buildings and other structures',examples: 'lax enforcement of building codes@building codes had not been properly followed'},
        {title: 'reliance', type:"noun",meaning: 'dependence, confidence; the state of depending on something or someone for support, help, or protection',examples: 'reliance on cheap foreign credit funded new motorways'},
        {title: 'prone', type:"adjective",meaning: 'propenso, sujeito a; susceptible, predisposed, inclined, likely',examples: 'earthquake-prone regions@After a long day at work, he lay prone on the sofa, trying to relax'},
        {title: 'load-bearing', type:"adjective",meaning: 'used to describe a structural element or component of a structure that is designed to support and carry the weight of other parts of the construction',examples: 'load-bearing walls and pillars must be distributed in such a way to avoid “pancaking”'},
        {title: 'rubble', type:"noun",meaning: 'destroços; debris, wreckage, ruins, detritus',examples: ' many modern structures across the country constituted “rubble in waiting” because building codes had not been properly followed'},
        {title: 'cut corners', type:"expressing",meaning: 'to take shortcuts(atalhos) or to do something in a way that is quicker or cheaper, but that may result in lower quality or safety standards than what is expected or required',examples: 'to deter construction companies and investors from cutting corners'},
        {title: 'address', type:"verb", meaning: 'to give attention to or deal with a matter or problem_to speak or write to someone; dirigir a alguém',examples: 'because addressing it would be expensive and unpopular_He likes to be addressed as "Sir"@The president will address the nation by television'},
        {title: 'due to', type:"preposition",meaning: 'owing to, because of',examples: 'due to an influx of millions of refugees from neighbouring Syria fleeing civil war'},
        {title: 'budget', type:"noun",meaning: 'orçamento',examples: 'It is unclear from government budgets how the earthquake tax has been spent'},
        {title: 'cash-strapped', type:"adjective",meaning: 'that has a shortage of money or is experiencing financial difficulties',examples: 'the cash-strapped Turkish parliament'},
        {title: 'withstand', type:"transitive verb",meaning: 'to be proof against; resist the effect of'
        ,examples: 'buildings that are designed to withstand earthquakes are less likely to collapse'},
        {title: 'slipshod', type:"adjective",meaning: 'describes something that is done in a careless, hasty(hurried), or sloppy manner',examples: 'people across the country suspected of slipshod or negligent construction'},
        {title: 'upmarket', type:"adjective",meaning: 'very high quality and intended to be bought by people who are quite rich',examples: 'The developer of an upmarket 12-storey apartment complex'},
        {title: 'prosecutor', type:"noun",meaning: 'a legal official who accuses someone of committing a crime, especially in a law court',examples: 'He told prosecutors that his company had followed all the relevant procedures and legislation@prosecutors have begun gathering samples of buildings for evidence on materials used in construction'},
        {title: 'assuage', type:"transitive verb",meaning: 'alleviate; to lessen the intensity of something',examples: 'but blaming building contractors is unlikely to assuage a rising tide of public anger at government policy'},
        {title: 'unforeseen', type:"adjective",meaning: 'unexpected, unpredicted',examples: ' It is true that we were not expecting an earthquake of this scale, in this area, so it was unforeseen in that respect'},
        {title: '', type:"noun",meaning: '',examples: ''},
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