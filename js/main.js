


const catalogoTazas = ["Pocillo de Café","Jarrito de Café","Taza para café doble",
    "Taza de Té" ];

function mostrarCatalogo() {

    alert("Mi catalogo de vajilla");

    let salir = false;

   
    while (salir === false) {
        let menu = "Elija la opción que desea ver:\n" +
                   "1. " + catalogoTazas[0] + "\n" +
                   "2. " + catalogoTazas[1] + "\n" +
                   "3. " + catalogoTazas[2] + "\n" +
                   "4. " + catalogoTazas[3] + "\n" +
                   "5. SALIR"; 

        let eleccion = prompt(menu);

     
        switch (eleccion) {
            case "1":
                alert(catalogoTazas[0] + ", para un Café chico.");
                break;
            case "2":
                alert(catalogoTazas[1] + ", para una Lágrima.");
                break;
            case "3":
                alert(catalogoTazas[2] + ". para un Café doble o con leche.");
                break;
            case "4":
                alert(catalogoTazas[3] + ", para un buen Té");
                break;
            case "5":
               alert("Gracias por su visita.");
                salir = true; 
                break;
            default:
                alert("Opción incorrecta. Por favor, elija un número del 1 al 5.");
                break;
        }
    }
}


mostrarCatalogo();
