var placarVelha = 0;
var comecar = false;
var x = 0;
var o = 0;
var cont = 2;
var vencedor = 0;
var velha = 0;
var vet = [3,3,3,3,3,3,3,3,3];

function ganhou(ganhador){
    vencedor = 1;
    if(ganhador == 0){
        o++;
        placarO();
        alert("Jogador com a O ganhou!");
    }
    else if(ganhador == 1){
        x++;
        placarX();
        alert("Jogador com o X ganhou!");
    }
}

function zerarPlacar(){
    x = 0;
    o = 0;
    placarVelha = 0;
    document.getElementById("x").innerHTML = x;
    document.getElementById("o").innerHTML = o;
    document.getElementById("velha").innerHTML = placarVelha;
}

function placarX(){
    document.getElementById("x").innerHTML = x + " |";
}

function placarO(){
    document.getElementById("o").innerHTML = o + " |";
}

function comecarX(){
    if(comecar == false){
        cont = 2;
        comecar = true;
    }
}

function comecarO(){
    if(comecar == false){
        cont = 1;
        comecar = true;
    }
}

function novoJogo(){
    for(var i = 0; i < 9; i++){
        document.getElementById(i).src = "";
    }
    cont = 2;
    vencedor = 0;
    velha = 0;
    vet = [3,3,3,3,3,3,3,3,3];
    comecar = false;
    document.getElementById("velhaimg").src = "";
}

function jogar(valor){
    if(cont % 2 == 0 && vet[valor] == 3 && vencedor == 0){
        document.getElementById(valor).src = "images/x.png";
        cont++;
        vet[valor] = 1;
    }
    else if(vet[valor] == 3 && vencedor == 0){
        document.getElementById(valor).src = "images/o.png";
        cont++;
        vet[valor] = 0;
    }
    else
        velha--;
    if(vencedor == 0){
        for(var i = 0; i < 2; i++){
            if(vet[0] == i && vet[1] == i && vet[2] == i){
                ganhou(i);
            }
            else if(vet[3] == i && vet[4] == i && vet[5] == i){
                ganhou(i);
            }
            else if(vet[6] == i && vet[7] == i && vet[8] == i){
                ganhou(i);
            }
            else if(vet[0] == i && vet[3] == i && vet[6] == i){
                ganhou(i);
            }
            else if(vet[1] == i && vet[4] == i && vet[7] == i){
                ganhou(i);
            }
            else if(vet[2] == i && vet[5] == i && vet[8] == i){
                ganhou(i);
            }
            else if(vet[0] == i && vet[4] == i && vet[8] == i){
                ganhou(i);
            }
            else if(vet[2] == i && vet[4] == i && vet[6] == i){
                ganhou(i);
            }
        }
    }
    if(vencedor == 0)
        velha++;
    if(velha == 9){
        document.getElementById("velhaimg").src = "images/vovo.gif";
        document.getElementById("velha").innerHTML = ++placarVelha;
    }
}