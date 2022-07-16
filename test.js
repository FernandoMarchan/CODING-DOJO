function crearArreglo(num) {        
        var nuevoArreglo = [];        
        for (var i = 0; i <= num; i++) {                
            nuevoArreglo.push(i);        
        }        
        return nuevoArreglo;        // añadió la declaración return
    }
    var y = crearArreglo(5);        // ahora y es la variable que llama a crearArreglo
    