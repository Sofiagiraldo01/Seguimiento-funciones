function sumaDigitos (numero) {
    const numeroString = Math.abs(numero).toString();
    let suma = 0;
    for (let i =0 ; i < numeroString.length; i++){
        const digito = parseInt(numeroString[i]);
        suma += digito;
    }
    return suma;
}
console.log(sumaDigitos(12345));
console.log(sumaDigitos(-67));
console.log(sumaDigitos(0));
