function saludar(){
    console.log('Hola cacorro');
    alert("Hola cacorro'!");
}

//ALGORITMO QUE REALICE UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO

function suma(){
    //1 declarar las variables necesarias para la ejecucion del algoritmo
    let n1 = 0;
    let n2 = 0;
    let gato = 0;
    //2 solicitar y capturar los valores ingresado por el usuario
    n1 = parseInt(prompt('Porfavor ingrese el primer valor a sumar'))
    n2 = parseInt(prompt('Porfavor ingrese el segundo valor a sumar'))
    //3 realizar el procedimiento
    gato = n1 + n2
    //4 imprimir el resultado en pantalla al usuario
    console.log('El resultado de la suma es ' + gato)
    alert('El resultado de la suma es ' + gato)
}

//Algoritmo que realice una suma, resta multiplicacion, division entre 2 valores 
//ingresados por el usuario

function opBasicas(){
    let var1 =0;
    let var2 =0;
    let sum =0;
    let res =0;
    let div =0;
    let mul =0;
    var1 = parseInt(prompt('Porfavor ingrese el primer valor a sumar, restar, dividir y multiplicar'))
    var2 = parseInt(prompt('Porfavor ingrese el segundo valor a sumar, restar, dividir y multiplicar con el primer numero'))
    sum = var1 + var2
    res = var1 - var2
    div = var1 / var2
    mul = var1 * var2
    console.log('Los resultados son: de la suma es '+ sum + ' la resta es ' + res + ' la division' + div + ' por ultimo la multiplicacion es ' + mul)
    alert ('Los resultados son: de la suma es '+ sum + ' la resta es ' + res + ' la division' + div + ' por ultimo la multiplicacion es ' + mul)
}

//Realizar un algoritmo que determine el cuadrado por un numero ingresado por el usuario
function cuadrado(){
    let num1 =0
    let resul =0
    num1 = parseInt(prompt('Ingrese el numero del que quiere saber su cuadrado'))
    resul = num1 * num1
    console.log('El cuadrado de su numero es: ' + resul)
    alert ('El cuadrado de su numero es: ' + resul)
}

//Realizar un algoritmo que determine el area de un triangulo apartir de base*altura ingresada por el usuario
function areaTriangulo(){
    let base =0
    let altura =0
    let resultado =0
    base = parseInt(prompt('Ingrese la base del triangulo'))
    altura = parseInt(prompt('Ingrese la altura del triangulo'))
    resultado = (base * altura)/2
    console.log('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
    alert('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
}

//Realizar un algoritmo que determine la medida en kilometros metros y centimetros de un valor en pulgadas ingresado por el usuario
function conversionUnd(){
    let kil =2.54 * 10**-5
    let met =0.0254
    let cen =2.54
    let pul =0
    let resultadoa =0
    let resultadob =0
    let resultadoc =0
    pul = parseInt(prompt('Ingrese su valor (en pulgadas) el cual sera trasnformado en: kilometros metros y centimetros'))
    resultadoc= pul * kil
    resultadoa= pul * met
    resultadob= pul * cen
    console.log('Su valor ingresado (en pulgadas) ' + pul + 'transformado en kilometros es:' + resultadoc + ', en metros es: ' + resultadoa + ' y en centimetros es: '+ resultadob)
    alert('Su valor ingresado (en pulgadas) ' + pul + 'transformado en kilometros es:' + resultadoc + ', en metros es: ' + resultadoa + ' y en centimetros es: '+ resultadob)
}

    //Realizar un algoritmo que determine a que moneda quiere convertir el peso colombiano entre dolar, euro y yenes
    function conversionCOP(){
        let peso = 0
        let cdolar = 0
        let ceuro = 0
        let cyen = 0
        let dolar = 4410
        let euro = 4749
        let yen = 28
        peso = parseInt(prompt("Ingrese la cantidad en pesos colombianos que nececite su conversión"))
        let moneda = prompt("¿A que moneda requiere realizar su conversion?")
        switch(moneda){
            case 'dolar':
                cdolar = peso / dolar
                console.log("El valor de $" + moneda + "en dolares es " + dolar)
                alert("El valor de $" + moneda + "en dolares es " + dolar)
                break
            case 'euro': 
                ceuro = peso / euro
                console.log("El valor de $" + moneda + "en dolares es " + euro)
                alert("El valor " +  "$" + peso + " es " + "$" + euro)
                break
            case 'yen':
                cyen = peso / yen
                console.log("El valor de $" + moneda + "en dolares es " + yen)
                alert("El valor de $" + moneda + "en dolares es " + yen)
                break
        }
    }

    //Algoritmo que determine si un numero ingresado por el usuario es par o impar
    function parImpar(){
        let numero = 0
        numero = parseInt(prompt("Ingresa un numero para saber si es par o impar"))
        if (numero % 2 === 0){
            console.log("El numero " + numero + " es par")
            alert("El numero " + numero + " es par")
        }
        else{
            console.log("El numero " + numero +  " es impar")
            alert("El numero " + numero +  " es impar")
        }

    }

    //Algoritmo que determine el mayor numero entre dos numeros ingresados por el ususario
    function numeroMayor(){
        let n1 = 0
        let n2 = 0
        n1 = parseInt(prompt("Ingrese el primer numero"))
        n2 = parseInt(prompt("Ingrese el segundo numero"))
        if(n1==n2){
            console.log("Los dos numeros son iguales")
            alert("Los dos numeros son iguales")
        }
        else{
            if(n2<n1){
                console.log("El numero " + n1 + " es mayor que "+ n2)
                alert("El numero " + n1 + " es mayor que "+ n2)
            }
            else{
                console.log("El numero " + n2 + " es el mayor que " + n1)
                alert("El numero " + n2 + " es el mayor que " + n1)
            }
        }
    }

    //Algoritmo que detemine el menor numero entre tres numeros
    function numeroMenor(){
        let n1 = 0
        let n2 = 0
        let n3 = 0
        n1 = parseInt(prompt("Ingrese el primer numero"))
        n2 = parseInt(prompt("Ingrese el segundo numero"))
        n3 = parseInt(prompt("Ingrese el tercer numero"))
        if((n1==n2 & n1==n3)){
            console.log("Error. Los tres numeros son iguales")
            alert("Error. Los tres numeros son iguales")
        }
        else{
            if(n2>n1){
                if(n3>n1){
                    console.log("el numero " + n1 + " es el menor numero de los tres")
                    alert("el numero " + n1 + " es el menor numero")
                }
            }
            else{
                if(n3>n2){
                    console.log("el numero " + n2 + " es el menor numero de los tres")
                    alert("el numero " + n2 + " es el menor numero")
                }
                else{
                    console.log("el numero " + n3 + " es el menor numero de los tres")
                    alert("el numero " + n3 + " es el menor numero")
                }
            }
        }
    }

    //El colegio abc requiere un sistema que permita validar a X estudiante si aprobo o reporbo X materia teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1
    function promNotas(){
        let nota = 0
        let total = 0
        let notalfinal = 0
        let nombre = prompt("Ingrese el nombre del estudiante")
        let nombrem = prompt("Ingrese el nombre del la materia")

        for(let i = 0; i<9; i++){
            nota = parseFloat(prompt("Ingresa las notas del estudainte"))
            total = nota + total
            notal = 0
        }
        notalfinal = total / 9
        if(notalfinal<6.1){
            console.log("El estudiante "+ nombre + " reprobo la materia de " + nombrem + " con " + notalfinal)
            alert("El estudiante "+ nombre + " reprobo la materia de " + nombrem + " con " + notalfinal)
        }
        else{
            console.log("El estudiante "+ nombre + " aprobo la materia de " + nombrem + " con " + notalfinal)
            alert("El estudiante "+ nombre + " aprobo la materia de " + nombrem + " con " + notalfinal)
        }
    }

    //Un individuo desea invertir su capital en un banco y require saber cuanto dinero ganara  despues de N nuero de años teniendo en cuenta que el banco paga un interes mensual del 0.7%
    function capitalAños(){
        let capitalInicial = 0
        let años = 0
        let interecesMensuales = 0.7
        let intereces = 0
        let total = 0
        let añomes = 0
        let totaltod = 0
        capitalInicial = parseInt(prompt("Ingresa su capital"))
        años = parseInt(prompt("Ingresa la cantidad años para saber cuanto dinero ganara "))
        intereces = interecesMensuales * 12
        añomes = (años * 0.084)
        total = añomes * capitalInicial
        totaltod = capitalInicial + total
        console.log("Su ganancia de invercion es de: " + total)
        alert("Su ganancia de invercion es de: " + total)
        console.log("Su capital total con el respectivo porcentaje de 7% por mes es: " + totaltod)
        alert(("Su capital total con el respectivo porcentaje de 7% por mes es: " + totaltod))

    }