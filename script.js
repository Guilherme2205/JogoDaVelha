var cont = 1;
var vencedor = 0;
var velha = 0;
var vet = [3,3,3,3,3,3,3,3,3];

function jogar(valor){
    if(cont % 2 == 0 && vet[valor] == 3){
        document.getElementById(valor).src = "x.png";
        cont++;
        vet[valor] = 1;
    }
    else if(vet[valor] == 3){
        document.getElementById(valor).src = "o.png";
        cont++;
        vet[valor] = 0;
    }
    for(var i = 0; i < 2; i++){
        if(vet[0] == i && vet[1] == i && vet[2] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
            break;
        }
        else if(vet[3] == i && vet[4] == i && vet[5] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[6] == i && vet[7] == i && vet[8] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[0] == i && vet[3] == i && vet[6] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[1] == i && vet[4] == i && vet[7] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[2] == i && vet[5] == i && vet[8] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[0] == i && vet[4] == i && vet[8] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
        else if(vet[2] == i && vet[4] == i && vet[6] == i){
            alert("Jogador x ganhou!");
            vencedor = 1;
        }
    }
    if(vencedor == 0)
        velha++;
    if(velha >= 9)
        alert("Deu velha");
}