function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log("La altura de tu Triangulo es: " + altura)
    }
    else{
        alert('I Dont Know')
    }
}
altura(6, 6, 4)