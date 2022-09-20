var azul = document.querySelector('input#btnAzul')
var vermelho = document.getElementById("btnVermelho")
var amarelo = document.getElementById("btnAmarelo")
var marrom = document.getElementById("btnMarrom")

document.querySelector('.bola').addEventListener('click', (e)=>{

    var txt = document.getElementById('txtResultado')

    e.target.classList.toggle('bola-move')

    document.body.classList.toggle('dark')

})

function Azul(){

    azul.value = "Azul"

    if(azul.value != " "){

        vermelho.value = " "
        amarelo.value = " "
        marrom.value = " "

    }

}

function Vermelho(){

    vermelho.value = "Vermelho"

    if(vermelho.value != " "){

        azul.value = " "
        amarelo.value = " "
        marrom.value = " "

    }

}

function Amarelo(){

    amarelo.value = "Amarelo"

    if(amarelo.value != ""){

        vermelho.value = " "
        azul.value = " "
        marrom.value = " "

    }

}

function Marrom(){

    marrom.value = "Marrom"

    if(marrom.value != " "){

        vermelho.value = " "
        azul.value = " "
        amarelo.value = " "

    }

}

function Idade(){

    var idade = document.getElementById("txtIdade")
    var txt = document.getElementById("txtResultado")


    if(idade.value != ""){
        
         idade.value >= 18 ? txt.value = "VOCE JA PODE DIRIGIR" : txt.value = "VOCE NAO PODE DIRIGIR"

         if(idade.value <=3){

            txt.value = "COMO VOCE ESCREVEU ISSO?"
    
        }

    }
    else{

        txt.value = "DIGITE SUA IDADE"

    }
   
}

function btn(){

    var nome = document.getElementById("txtNome")

        document.getElementById("btn").style.background = nome.value
    
}