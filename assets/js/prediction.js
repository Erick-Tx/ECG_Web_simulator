


var boton = document.getElementById("botonPrediction");





//Variables de Ritmo cardiaco
var rhythm_R = document.getElementById("flexSwitchCheckChecked_R");
var rhythm_I = document.getElementById("flexSwitchCheckChecked_I");

//Variable Heart rate
var heartRate = document.getElementById("slider");

//Variable de P_Wave
var PWave = document.getElementById("P_wave");

//Variable de PR_I
var pr = document.getElementById("Pr_interval");

//Variable de QRS Duration
var qrs = document.getElementById("Qrs");


//Texto a modificar

var modificarTexto = document.getElementById("ModificarPrediction");


//Eventos
boton.addEventListener("click", predecir);



//Funciones
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




/////////////////


//Funciones y condicionales 

function predecir(){
    if (rhythm_R.checked && !rhythm_I.checked){
        //alert("Regular")
        if(heartRate.value < 60){
            //alert("Es menor a 60") 
            if(PWave.value == 1){
                //alert("P_wave Positive")

                if(pr.value == 1){
                    //alert("Pr 0.12 to 0.20 sec") 

                    if(qrs.value == 1){
                        //alert("QRS 0.11 or less")
                        //window.alert("The prediction of the entered parameters results in NORMAL SINUS RHYTHM");
                        
                        modificarTexto.innerHTML += `<h2>SINUS BRADYCARDIA<h2/>`;
                        //modificarTexto.innerHTML += `<h2>NORMAL SINUS RHYTHM<h2/>`;
                        mostrarPop();

                    }
                    else{
                        alert("QRS not defined")
                    }


                }else{
                    alert("Pr not defined")
                }


            }else if (PWave.value == 3){
                //alert("P_wave Absent")
                
                if(pr.value == 5){
                    //alert("Pr None") 
                    if(qrs.value == 4){
                        
                        modificarTexto.innerHTML += `<h2>IDIOVENTRICULAR RHYTHM<h2/>`;
                        mostrarPop();
                    }else{
                        alert("QRS not defined")
                    }
                }else{
                    alert("Pr not defined")
                }

            }else{
                alert("P_wave not defined")
            }
        }else if(heartRate.value > 59 && heartRate.value < 121) {
            //alert("Entre 60 y 120") 

            if(PWave.value == 1){
                //alert("P_wave Positive")

                if(pr.value == 1){
                    //alert("Pr 0.12 to 0.20 sec") 

                    if(qrs.value == 1){
                        //alert("QRS 0.11 or less")
                        //window.alert("The prediction of the entered parameters results in NORMAL SINUS RHYTHM");
                        modificarTexto.innerHTML += `<h2>NORMAL SINUS RHYTHM<h2/>`;
                        mostrarPop();

                    }
                    else{
                        alert("QRS not defined")
                    }


                }else{
                    alert("Pr not defined")
                }


            }else if (PWave.value == 3){
                //alert("P_wave Absent")
                
                if(pr.value == 5){
                    //alert("Pr None")

                    if(qrs.value == 4){
                        //alert("QRS 0.11 or less")
                        //window.alert("The prediction of the entered parameters results in NORMAL SINUS RHYTHM");
                        modificarTexto.innerHTML += `<h2>ACCELERATED IDIOVENTRICULAR<h2/>`;
                        mostrarPop();

                    }
                    else{
                        alert("QRS not defined")
                    }

                }else{
                    alert("Pr not defined")
                }

            }else{
                alert("P_wave not defined")
            }


        }else{    //MAYOR A  120//
            
            if(PWave.value == 1){
                //alert("P_wave Positive")

                if(pr.value == 1){
                    //alert("Pr 0.12 to 0.20 sec") 

                    if(qrs.value == 1){
                        //alert("QRS 0.11 or less")
                        //window.alert("The prediction of the entered parameters results in NORMAL SINUS RHYTHM");
                        
                        modificarTexto.innerHTML += `<h2>SINUS TACHYCARDIA<h2/>`;
                        //modificarTexto.innerHTML += `<h2>NORMAL SINUS RHYTHM<h2/>`;
                        mostrarPop();

                    }
                    else{
                        alert("QRS not defined")
                    }


                }else{
                    alert("Pr not defined")
                }
            }else if(PWave.value == 2){
                //Pwave Normal
                if(pr.value == 3){
                    if(qrs.value == 3){
                        modificarTexto.innerHTML += `<h2>2° ATRIOVENTRICULAR BLOCK TYPE II<h2/>`;
                        mostrarPop();

                    }else{alert("qrs not defined")}
                }else{
                    alert("Pr not defined")
                }


            }else if(PWave.value == 3){
                if(pr.value == 4){
                    if(qrs.value == 1){
                        modificarTexto.innerHTML += `<h2>ATRIAL FLUTTER<h2/>`;
                        mostrarPop();
                    }else{
                        alert("QRS not defined")
                    }

                }else if(pr.value == 5){
                    if(qrs.value == 4){
                        modificarTexto.innerHTML += `<h2>VENTRICULAR TACHYCARDIA<h2/>`;
                        mostrarPop();
                    }else{
                        alert("QRS not defined")
                    }

                }else{
                    alert("Pr not defined")
                }

            }else if(PWave.value == 5){
                if(pr.value == 5){
                    if (qrs.value == 1){
                        modificarTexto.innerHTML += `<h2>ATRIAL TACHYCARDIA<h2/>`;
                        mostrarPop();
                    }else{
                        alert("QRS not defined")
                    }

                }else{
                    alert("Pr not defined")
                }

            }else{
                alert("Pwave not defined")
            }


        }
    }else if(!rhythm_R.checked && rhythm_I.checked){
        alert("Irregular")
    }else{
        alert("Debes seleccionar una opción.")
    }
}

