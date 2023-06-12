// proyecto 1

function myFunction() {

    let imgs = document.querySelector("#imgs")
    if (imgs.style.border == "none") {
        imgs.style.border = "2px solid red"
    } else {
        imgs.style.border = "none"
    }
}

/////////////////////////////////////////////////////////////////////

//proyecto2

function verificar() {
    let img2 = document.querySelector("#inputs1").value;
    let img3 = document.querySelector("#inputs2").value;
    let img4 = document.querySelector("#inputs3").value;

    let resultado = Number(img2) + Number(img3) + Number(img4);

    if (img2 === "" || img3 === "" || img4 === "") {
        document.querySelector('#tresultado').innerHTML =
            "Advertencia hay espacios sin rellenar";
        document.querySelector('#tresultado').style.color = "red";


    } else if (isNaN(img2) || isNaN(img3) || isNaN(img4)) {
        document.querySelector('#tresultado').innerHTML =
            "Ingresa numeros validos"
        document.querySelector('#tresultado').style.color = "red";



    } else if (img2 < 0 || img3 < 0 || img4 < 0) {
        document.querySelector("#tresultado").innerHTML =
            "Ingrese numeros validos"
        document.querySelector("#tresultado").style.color = "red";

    } else if (resultado <= 10) {
        document.querySelector("#tresultado").innerHTML = "Llevas " + resultado + " stickers seleccionados";
        document.querySelector("#tresultado").style.color = "blue";

    } else {
        document.querySelector("#tresultado").innerHTML =
            "Advertencia alcanzaste el limite de stickers permitidos (" + resultado + ")";
        document.querySelector("#tresultado").style.color = "red";
    }


}


//////////////////////////////////////////////////////////////////////////////////

// proyecto 3



function security() {
    let opcion1 = document.querySelector("#opcion1").value
    let opcion2 = document.querySelector("#opcion2").value
    let opcion3 = document.querySelector("#opcion3").value

    if (opcion1 === '0' || opcion2 === '0' || opcion3 === '0') {
        document.querySelector("#resultado").innerHTML = "Ingresar numeros validos";
        document.querySelector("#resultado").style.color = "red";

    } else if (opcion1 == '9' && opcion2 == '1' && opcion3 == '1') {
        document.querySelector("#resultado").innerHTML = "Password 1 correct"
        document.querySelector("#resultado").style.color = "green";
    } else if (opcion1 == '7' && opcion2 == '1' && opcion3 == '4') {
        document.querySelector("#resultado").innerHTML = "Password 2 correct"
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerHTML = "Invalid password"
        document.querySelector("#resultado").style.color = "red";
    }
}
