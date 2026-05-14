let selecionaDisparado = {};

let jogador1 = jogador('jogador 1', 'X', true);
let jogador2 = jogador('jogador 2', 'O', false);
let mensagem1 = 'Vitória de ' + jogador1.name;
let mensagem2 = 'Vitória de ' + jogador2.name;

let modal = document.getElementById('modal');
let resultado = document.getElementById('resultado');
let vezJogador = document.querySelector('#mostrar-vez-jogador');

function mostrarOpcao(event, numeroDiv) {
    if(!selecionaDisparado[numeroDiv]){
        if(jogador1.jogada){
            let idDaTag = event.target;
            idDaTag.textContent = jogador1.simbolo;
            idDaTag.style.color = 'rgba(255, 255, 255, 0.7)';
        }else{
            let idDaTag = event.target;
            idDaTag.textContent = jogador2.simbolo;
            idDaTag.style.color = 'rgba(0, 0, 0, 0.5)';
        }
    }/*else{
        console.log('Evento já foi disparado recentemente para Div ' + numeroDiv);
    }*/
}

function reverte(event, numeroDiv) {
    if(!selecionaDisparado[numeroDiv]){
        let idDaTag = event.target;
        idDaTag.textContent = '';
    }/*else{
        console.log('Evento já foi disparado recentemente para Div ' + numeroDiv);
    }*/
}  

function seleciona(event, numeroDiv){
    if(!selecionaDisparado[numeroDiv]){
        if(jogador1.jogada){
            let idDaTag = event.target;
            idDaTag.textContent = jogador1.simbolo;
            idDaTag.style.color = '#ffffff';
    
            jogador1.jogada = false;
        }else{
            let idDaTag = event.target;
            idDaTag.textContent = jogador2.simbolo;
            idDaTag.style.color = '#000000';
    
            jogador1.jogada = true;
        }
    }
    mostrarVezJogador()

    selecionaDisparado[numeroDiv] = true;
    
    let celulas = document.getElementsByClassName('quadrados');

    // Array bidimensional representando o tabuleiro
    let tabuleiro = [
        [celulas[0].textContent, celulas[1].textContent, celulas[2].textContent],
        [celulas[3].textContent, celulas[4].textContent, celulas[5].textContent],
        [celulas[6].textContent, celulas[7].textContent, celulas[8].textContent]
    ];

    // Verificar linhas, colunas e diagonais
    for (let i = 0; i < 3; i++) {
        // Verificar linhas e colunas
        if ((tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') ||
            (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '')) {
            // Condição de vitória encontrada
            if(!jogador1.jogada){
                resultado.textContent = mensagem1;
                modal.style.display = 'flex';
                vezJogador.style.display = 'none';
                console.log('Vitória de ', jogador1.name);
            }else{
                resultado.textContent = mensagem2;
                modal.style.display = 'flex';
                vezJogador.style.display = 'none';
                console.log('Vitória de ', jogador2.name);
            }
            
            return;
        }
    }

    // Verificar diagonais
    if ((tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '') ||
        (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '')) {
        // Condição de vitória encontrada
        if(!jogador1.jogada){
            resultado.textContent = mensagem1;
            modal.style.display = 'flex';
            vezJogador.style.display = 'none';
            console.log('Vitória de ', jogador1.name);
        }else{
            resultado.textContent = mensagem2;
            modal.style.display = 'flex';
            vezJogador.style.display = 'none';
            console.log('Vitória de ', jogador2.name);
        }
        return;
    }

    // Verificar empate
    let todasPreenchidas = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                todasPreenchidas = false;
                break;
            }
        }
    }

    if (todasPreenchidas) {
        // Todas as células foram preenchidas e ninguém venceu
        resultado.textContent = 'EMPATE';
        modal.style.display = 'flex';
        vezJogador.style.display = 'none';
    }
    //return false;
}
function reiniciarJogo(){
    location.reload();
}



let modoDeJogo = "";

let nomePlayer1 = "";
let nomePlayer2 = "";

function selecionarModo(modo){

    modoDeJogo = modo;

    document.getElementById("escolha-modo").style.display = "none";

    document.getElementById("escolha-nomes").style.display = "flex";

    document.getElementById("escolha-nomes").style.flexDirection = "column";

    if(modo === 1){

        document.getElementById("player2").style.display = "none";
        document.getElementById("lb-player2").style.display = "none";

        document.getElementById("player1").placeholder = "Seu nome";

    }else{

        document.getElementById("player2").style.display = "block";
        document.getElementById("lb-player2").style.display = "flex";

    }
}

function iniciarJogo(){

    nomePlayer1 = document.getElementById("player1").value.trim();

    if(nomePlayer1 === ""){
        alert("Digite o nome do Player 1");
        return;
    }

    if(modoDeJogo === 2){

        nomePlayer2 = document.getElementById("player2").value.trim();

        if(nomePlayer2 === ""){
            alert("Digite o nome do Player 2");
            return;
        }

    }else{
        nomePlayer2 = "Computador";
    }

    jogador1.name = nomePlayer1;
    jogador2.name = nomePlayer2;

    mensagem1 = 'Vitória de ' + jogador1.name;
    mensagem2 = 'Vitória de ' + jogador2.name;

    mostrarVezJogador()


    document.getElementById("modal-inicial").style.display = "none";
}

function voltarEscolhaModo(){

    modoDeJogo = "";

    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";

    document.getElementById("player2").style.display = "block";

    document.getElementById("escolha-nomes").style.display = "none";

    document.getElementById("escolha-modo").style.display = "flex";
}

function mostrarVezJogador(){

    if(jogador1.jogada){
        vezJogador.textContent = "Vez do jogador: " + jogador1.name + " (" + jogador1.simbolo + ")";
    }else{
        vezJogador.textContent = "Vez do jogador: " + jogador2.name + " (" + jogador2.simbolo + ")";
    }
}

