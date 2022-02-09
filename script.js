
function inputInDisplay(num){
    const displayInput = document.getElementById('display').value 
    if(num == 'acButton'){
        document.getElementById('display').value = '' // apagar os caracteres do display
    }else{
        document.getElementById('display').value += (num) // concatenar os caracteres
    }
}

function calcular(){
    const displayInput = document.getElementById('display').value 
    if(displayInput.includes(' X ')){
        var newX = displayInput.replace(' X ', '*')       // transformar 'X' em '*' para realizar as operações.
        document.getElementById('display').value = eval(newX)
    }else{
        document.getElementById('display').value = eval(displayInput)
    }
    
}