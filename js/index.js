/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description 1er. Entrega Proyecto Final JavaScript - Clase 03 - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-03-13 : Juan Gaudino : Incorporar Arrays
 */

// Declaración de valores unitarios

const unitarioPAI = 1200;
const unitarioCPM = 200;
const metroCuadradoFront = 450;
const metroCuadradoBack = 730;

// Declaración de funciones

function calcularPrecio(material, cantidad, metrosCuadrados) {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = cantidad * unitarioPAI;
            break;
        case 'CPM':
            precio = cantidad * unitarioCPM;
            break;
        case 'Front':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
        case 'Back':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
    }
    return precio;
}

function solicitarMaterial() {
    let material = prompt('Ingrese el material: PAI, CPM, Front o Back');
    if (material === 'PAI' || material === 'CPM') {
        cantidad = prompt(`Ingrese la cantidad de ${material} a producir`);
        console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
        alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
        document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
    }
    else if (material === 'Front' || material === 'Back') {
        ancho = prompt(`Ingrese el ancho del material ${material}`);	
        alto = prompt(`Ingrese el alto del material ${material}`);
        cantidad = prompt(`Ingrese la cantidad de ${material}`);
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material ${material} son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
    }
    return material;
}

// Solicitud de datos

let material = solicitarMaterial();



