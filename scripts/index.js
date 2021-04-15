function game() {
    var status = true;
    var nome;
    var score = 0;

    const arrPersonagens = ["João Cidadão", "Drª Julia", "Capitão Covid"];
    var player = prompt('0 João Cidadão, 1 Dra Julia ou 2 Capitão Covid?', 'Escolha um número');

    alert('Olá, eu me chamo ' + arrPersonagens[player]);

    var telaJogo = document.getElementById('telajogo');

    while (status == true) {
        // nome = prompt('Escolha seu personagem');
        if (nome === "João Cidadão") {
            alert("Olá João, é um prazer te ver");
        } else if (nome === "Dra Julia") {
            alert("Olá Dra Julia, é um prazer te ver");
        } else if (nome === "Capitão covid") {
            alert("Olá Capitão Covid, não é um prazer te ver");
        }
        status = false;
    }

    telaJogo.innerHTML = "Cuide-se e cuide dos demais"
    console.log(nome)
}

game();