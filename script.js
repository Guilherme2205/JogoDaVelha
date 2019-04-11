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
    document.getElementById("x").innerHTML = x + " |";
    document.getElementById("o").innerHTML = o + " |";
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
        document.getElementById(i).style.display = "none";
    }
    cont = 2;
    vencedor = 0;
    velha = 0;
    vet = [3,3,3,3,3,3,3,3,3];
    comecar = false;
    document.getElementById("sombra").style.display = "none";
    document.getElementById("linha_horizontal").style.display = "none";
    document.getElementById("linha_vertical").style.display = "none";
}

function jogar(id){
    if(cont % 2 == 0 && vet[id] == 3 && vencedor == 0){
        document.getElementById(id).src = "images/x.png";
        document.getElementById(id).style.display = "block";
        cont++;
        vet[id] = 1;
    }
    else if(vet[id] == 3 && vencedor == 0){
        document.getElementById(id).src = "images/o.png";
        document.getElementById(id).style.display = "block";
        cont++;
        vet[id] = 0;
    }
    else
        velha--;
    if(vencedor == 0){
        for(var i = 0; i < 2; i++){
            if(vet[0] == i && vet[1] == i && vet[2] == i){
                ganhou(i);
                document.getElementById("linha_horizontal").style.display = "block";
                document.getElementById("linha_horizontal").style.top = "13%";
            }
            else if(vet[3] == i && vet[4] == i && vet[5] == i){
                ganhou(i);
                document.getElementById("linha_horizontal").style.display = "block";
                document.getElementById("linha_horizontal").style.top = "47%";
            }
            else if(vet[6] == i && vet[7] == i && vet[8] == i){
                ganhou(i);
                document.getElementById("linha_horizontal").style.display = "block";
                document.getElementById("linha_horizontal").style.top = "81%";
            }
            else if(vet[0] == i && vet[3] == i && vet[6] == i){
                document.getElementById("linha_vertical").style.display = "block";
                document.getElementById("linha_vertical").style.left = "8.5%";
                ganhou(i);
            }
            else if(vet[1] == i && vet[4] == i && vet[7] == i){
                document.getElementById("linha_vertical").style.display = "block";
                document.getElementById("linha_vertical").style.left = "42.5%";
                ganhou(i);
            }
            else if(vet[2] == i && vet[5] == i && vet[8] == i){
                document.getElementById("linha_vertical").style.display = "block";
                document.getElementById("linha_vertical").style.left = "76%";
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
        document.getElementById("sombra").style.display = "block";
        document.getElementById("velha").innerHTML = ++placarVelha;
    }
}