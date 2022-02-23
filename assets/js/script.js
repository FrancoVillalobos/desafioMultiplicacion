//desafio Multiplicacion

function tablaMultiplicar(num){
    for(let i=1; i<=num ; i++){     
        let multiplicacion = i * num;
        console.log(i + " x " + num + " = " + multiplicacion)
    }
}



var numero = prompt("Ingrese un numero entre 1 y 20: ");
tablaMultiplicar(numero);


