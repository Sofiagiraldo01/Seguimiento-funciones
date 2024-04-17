function calcularFactorial (numero){
    if(numero<0){
        return "El numero debe ser positivo.";
    }
    else if (numero === 0){
        return 1;
    }
    else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++){
          factorial *= i;  
        }
        return factorial;
    }
}
console.log(calcularFactorial(4))