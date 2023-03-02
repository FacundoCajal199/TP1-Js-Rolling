function myFunction() {  
    let x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseInt(x)+parseInt(y);  
      text= suma;  
    }  
    document.getElementById("sumando").innerHTML = text;  
  }  