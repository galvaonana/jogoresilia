// import { sagaJoao } from './joaocidadao';
// import { sagaJulia } from './drajulia';
// import { sagaCapitao } from './capitaocovid';

// //https://javascript.info/import-export

// var arrFases = [
//     [
//         sagaJoao
//     ],
//     [
//         sagaJulia
//     ],
//     [
//         sagaCapitao
//     ]
// ];

var sagaJoao = [
    [
        "O que fazer?",
        "Acreditar",
        "Não acreditar",
        "Você realmente acredita nesse absurdo? Que vergonha",
        "Em tempos de pandemia, o bom senso salva vidas",
    ],
    [
        "E agora? Vou, ou não vou?",
        "Irei,essa mídia oportunista está enganando a todos, é preciso alertar o máximo de pessoas",
        "Tudo o que precisamos durante uma pandemia é de uma micareta de lunáticos",
        "Assim o Capitão Covid explode de felicidade. As aglomerações são os melhores lugares para se pegar COVID-19",
        "Muito que bem, o melhor a se fazer é ficar em casa e buscar informações confiáveis sobre a pandemia",
    ],
    [
        "O que fazer?",
        "Não estou a fim de virar jacaré",
        "Estou a espera da minha dose",
        "Tem medo de virar jacaré, mas não tem medo de ficar doente e morrer né?",
        "Isso mesmo! A vacina salva vidas e é uma das responsáveis por não estarmos em uma situação pior",
    ]

];

var sagaJulia = [
    [
        "O que você tem a dizer sobre isso?",
        "Acredito, vários pacientes já se trataram com esses remédios e se salvaram. Por que não?",
        "Não receito nada que não seja comprovado com estudos sérios",
        "Ué? Achei que médicos salvavam vidas",
        "É de médicos assim que precisamos",
    ],
    [
        "Você vai receitar isso aos seus pacientes?",
        "Vou, uma coisa é saber da eficácia pelo whatsapp, a outra é a secretaria de saúde dizer algo a respeito",
        "Sigo firme na decisão de não receita-los, pois a secretaria deveria apresentar estudos confiáveis sobre",
        "E você por algum acaso foi verificar de onde a secretaria de saúde tirou isso?",
        "É por saber que o Capitão Covid tem tantos aliados nos governos que você tomou essa decisão. Parabéns",
    ],
    [
        "Você vai se meter nesse rolê?",
        "Irei! Afinal de contas, somos todos médicos, e sabemos como nos cuidar",
        "Não irei e vou convencer esse pessoal a fazer um web bar no zoom e jogar gartic pra matar o tempo e conversar",
        "Eu já vi desculpa esfarrapada, mas essa merece um Oscar",
        "Pandemia não é desculpa para se afastar dos seus amigos e saudades não é desculpa para aglomerar, use a criatividade",
    ]

];

var sagaCapitao = [
    [
        "O que fazer?",
        "Buscar apoio para espalhar suas mentiras",
        "Meus filhos que entendem de internet fazem isso pra mim",
        "Ao buscar aliados, você garante a eficácia do seu plano",
        "Depois que seus filhos foram pegos aprontando coisas que até Deus duvida, eu acho que as pessoas não gostam tanto deles assim",
    ],
    [
        "E agora? O que você pretende fazer?",
        "Vou conversar com meus aliados que controlam os meios de comunicação para começarem a espalhar nos jornais que a doença é só um resfriadinho",
        "Eu não preciso nem me mover, uma hora esse povo cansa de colocar pano na cara e passar alcool na mão e morre de uma vez",
        "Isso!! Dessa forma, as pessoas que pediam fontes seguras e confiáveis passam a descuidar da saúde!!",
        "Eu não contaria com isso Capitão, as pessoas estão cada vez mais informadas e em busca de fontes seguras e confiáveis de informação",
    ],
    [
        "O que você pretende fazer?",
        "Vou lançar mais uma mentira absurda de que a vacina faz o braço necrosar e cair",
        "Já falei que uma hora esse povo cansa taokey?",
        "Uma boa, uma boa...O Senhor pode colocar imagens de picadas de aranha marrom e dizer que foi a vacina hehehe",
        "Ouvi dizer que as pessoas estão cada vez mais informadas e revoltadas contra o senhor...",
    ]

];

var sagas = [sagaJoao, sagaJulia, sagaCapitao];

var score = 0;
var status = true;


//0: pergunta principal; 1:Acreditar e apoiar os eventos e
//posicionamentos do Capitão Covid;2: Não acreditar nas baboseiras
//do Capitão Covid, 3: Comentário sobre a
//escolha absurda; 4:Comentário sobre a escolha sensata 

function percorreHistoria(personagem, telaJogo) {
    for (fase = 0; fase < 3; fase++) {
        var resposta = prompt(sagas[personagem][0] + '\n' + 'Opção 1: ' + sagas[personagem][1] + '\n' + sagas[personagem][2]);
        if (resposta == 1) {
            score = score + 400;
            telaJogo.innerHTML = telaJogo.innerHTML + '\n' + sagas[personagem][3];
        } else if (resposta == 2) {
            telaJogo.innerHTML = telaJogo.innerHTML + '\n' + sagas[personagem][4];
        }
        if (score >= 1000) {
            status = false;
        }
    };
}


function game() {
    var nome;

    const arrPersonagens = ["João Cidadão", "Drª Julia", "Capitão Covid"];
    var player = prompt('0 João Cidadão, 1 Dra Julia ou 2 Capitão Covid?', 'Escolha um número');

    alert('Olá, eu me chamo ' + arrPersonagens[player]);

    var telaJogo = document.getElementById('telajogo');

    while (status == true) {
        // nome = prompt('Escolha seu personagem');
        if (nome === "João Cidadão") {
            alert("Olá João, é um prazer te ver");
            percorreHistoria(player, telaJogo)
        } else if (nome === "Dra Julia") {
            alert("Olá Dra Julia, é um prazer te ver");
            percorreHistoria(player, telaJogo)
        } else if (nome === "Capitão covid") {
            alert("Olá Capitão Covid, não é um prazer te ver");
            percorreHistoria(player, telaJogo)

        }
        status = false;
    }

    telaJogo.innerHTML = "Cuide-se e cuide dos demais"
    console.log(nome)
}

game();