const alumnos = [
    {nombre: 'Jorge', nota: 7},
    {nombre: 'Fernando', nota: 8},
    {nombre: 'Laura', nota: 10},
    {nombre: 'Franco', nota: 6},
    {nombre: 'Luca', nota: 9},
    {nombre: 'Lautaro', nota: 5},
    {nombre: 'Camila', nota: 4},
];

function saludo(){
    alert('Bienvenido al gestor de alumnos, haga click en ACEPTAR para continuar');
};

function menuDatos (){
   opt = prompt('Elija una opción:'+'\n-------------------'+'\n1) Ver cantidad total de alumnos'+'\n2) Promedio de la clase'+'\n3) Percentiles de la clase'+'\n4) Salir del menú')
};

function salida(){
    alert('Saliendo del sistema de gestión de alumnos...');
    alert('Desconexión exitosa, gracias por utilizar nuestro servicio')
}

function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    }
    const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const promedio = suma / array.length;
    return promedio;
}

saludo()
menuDatos();

while (opt !== '4') {
    switch (opt){
        case '1':
            alert (`Hay un total de ${alumnos.length} alumnos ingresados al registro`);
            break;
        case '2':
            const notas = alumnos.map((el) => el.nota)
            let promedio = calcularPromedio(notas);
            alert (`El promedio de la clase es: ${promedio}`); 
            break;
        case '3':
            const aprobados = alumnos.filter((el) => el.nota >= 6);
            const reprobados = alumnos.filter((el) => el.nota < 6);
            alert( `Cantidad de alumnos aprobados: ${aprobados.length} (${(aprobados.length*100/alumnos.length).toFixed(2)} %).\nCantidad de alumnos reprobados: ${reprobados.length} (${(reprobados.length*100/alumnos.length).toFixed(2)} %).`)
            break;
        default:
            alert ('Opción no válida, intente nuevamente');
            break;
    }
    menuDatos();
}

salida()
