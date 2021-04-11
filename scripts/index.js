function recebiNoZap() {
    console.log("Recebi a seguinte informação no 'ZapZap': 'Universidade da Ucrânia realiza estudo que comprova que o uso de máscaras faz mal as pessoas' Escolha uma das opções:")
    let resposta = input(); //input recebido do usuario fica gravado na variavel resposta
    if (resposta == 1) {
        acreditarESerBurro;
        risco++;
    } else if (resposta == 2) {
        lerMais();
        risco--;
        usoDeMascara++;
    }
}

recebiNoZap(); //ordem de executar a funcao 'recebiNoZap'