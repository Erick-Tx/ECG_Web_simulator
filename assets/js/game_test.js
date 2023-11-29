
var score = document.getElementById("score");
var page = document.getElementById("page");

var scoreActual = parseInt(score.textContent);


var score_p2 = document.getElementById("score_p2");
var page_p2 = document.getElementById("page_p2");

var scoreActual_p2 = parseInt(score_p2.textContent);

//Opciones
var op_1 = document.getElementById("op1");
var op_2 = document.getElementById("op2");
var op_3 = document.getElementById("op3");


var op_4 = document.getElementById("op4");
var op_5 = document.getElementById("op5");
var op_6 = document.getElementById("op6");

//Texto a modificar

var modificarTexto = document.getElementById("ModificarPrediction");

//Eliminar
var eliminarYaparecer = document.getElementById("eliminar");



//Paginas
var page_1 = document.getElementById("page_1");
var page_2 = document.getElementById("page_2");



//Opciones
op_1.addEventListener("click", incorrecto)
op_2.addEventListener("click", incorrecto)
op_3.addEventListener("click", )


op_4.addEventListener("click", incorrecto)
op_5.addEventListener("click", function(){
    var nuevoScore_p2 = scoreActual_p2+1
    score_p2.textContent = nuevoScore_p2;
    
    modificarTexto.innerHTML += `<h2>CORRECT<h2/>`;
    
    mostrarPop();
    eliminar.addEventListener("click", function(){
        page_2.hidden = false
    })
    
})
op_6.addEventListener("click", incorrecto)





//Funcion Popup
function mostrarPop(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        10
    )
}


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});



//Funcion de click



function correcto(){
    var nuevoScore = scoreActual+1
    score.textContent = nuevoScore;
    
    modificarTexto.innerHTML += `<h2>CORRECT<h2/>`;
    
    mostrarPop();
    eliminar.addEventListener("click", function(){
        page_1.hidden = false
    })


}

function incorrecto(){
    var nuevoScore = scoreActual
    score.textContent = nuevoScore;
    
    modificarTexto.innerHTML += `<h2>WRONG<h2/>`;
    
    mostrarPop();
    

}




