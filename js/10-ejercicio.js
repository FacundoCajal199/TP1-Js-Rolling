function divisiblePor2Por3Por5oPor7(numero){
    return(numero % 2 ===0)||(numero % 3===0)|| (numero % 5===0)|| (numero % 7===0)
    
}
alert(divisiblePor2Por3Por5oPor7(6));