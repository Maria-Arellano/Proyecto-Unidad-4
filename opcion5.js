var preguntas = [
    " ¿Cuál es el nombre del padre de Tony Stark?",
    "¿Cómo se llama el actor que interpreta a Happy Hogan?",
    "¿Qué actriz interpreta a :Peppe: Potts, la asiyente de Tony Stark?",
    " ¿Cómo se llama el grupo terrorista que mantuvo en cautiverio a Tony Stark en Afganistán?",
    ];
    
    var opciones = [
        [ "Charles ",
        "Howard",
        "Jonh",
       ],
        ["Mark Ruffalo",
        "Jon Favreau",
        "Clark Ruffalo",
        ],
        ["Scarlett Johansson",
        "Jennifer Aniston",
        "Angelina Jolie",
    ],
        ["Los 10 anillos ",
        "Malditos Bastardos",
        "Las 7 Putas",
       ]
    ]
    var puntajePorOpción = [
          [0, 0,  5],
          [0, 5, 0],
          [0, 5,  0],
          [0, 0,  5],
    ]
    
    var puntaje = 0;
    var i=0;
    
    function mostrarResultado(){
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";
    
    document.getElementById("barra-progreso").value=i*100/(preguntas.length-1);

    
    div.innerHTML += "<h3 class = 'resultado_título'>LOS RESULTADOS FUERON</h3>"
 
    
    if (puntaje>20){
        estilovida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje>15) {
        estilovida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje>10) {
        estilovida = "<span id='estilo-aceptable'>REGULAR</span>";
    } else {
        estilovida = "<span id='estilo-malo'>MALO</span>";
    }
    
    div.innerHTML += `<p class='resultado_obtenido'> Haz obtenido +${puntaje} puntos, lo cual significa que tienes conocimiento es ${estilovida} sobre peliculas de marvel.</p>`
    }
    
    function actualizarpuntaje(opción) {
        var indice = opción -1;
        puntaje += puntajePorOpción[i][indice];
        if (i < preguntas.length-1){
            siguientePregunta();
        
        }else{
            mostrarResultado();
        }
    }
    function siguientePregunta() {
               
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
        document.getElementById("op3").innerHTML = opciones[i][2];
       
    
          
        document.getElementById("barra-progreso").value = i * 100/preguntas.length;
        i++; 
    
    }
    siguientePregunta();
    document.getElementById("op1").addEventListener("click", function () {
         actualizarpuntaje(1);
    });
    document.getElementById("op2").addEventListener("click", function () {
         actualizarpuntaje(2);
    });
    document.getElementById("op3").addEventListener("click", function () {
         actualizarpuntaje(3);
    });
    document.getElementById("op4").addEventListener("click", function () {
         actualizarpuntaje(4);
    });
    
    
    
    
    
    