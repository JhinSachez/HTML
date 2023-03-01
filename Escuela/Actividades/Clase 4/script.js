const personajes = [
    { id: 1, nombre: 'Solid Snake', franquicia: 'Metal Gear'},
    { id: 2, nombre: 'Master Chief', franquicia: 'Halo'},
    { id: 3, nombre: 'Raiden', franquicia: 'Metal Gear'},
    { id: 4, nombre: 'Big Boss', franquicia: 'Metal Gear'},
    { id: 5, nombre: 'Cortana', franquicia: 'Halo'},
    { id: 6, nombre: 'Inquisidor', franquicia: 'Halo'},
]

//console.log(personajes);
const {id,nombre,franquicia} = personajes[2];
console.log(id,nombre,franquicia);

//const string = 



/*Arreglos*/
const protagonistas = ['Arthur Morgan', 'Jill Valentine', 'Nathan Drake', 'Kratos', 'Lara Croft'];

const[,prota1,,prota2,] = protagonistas;
console.log(prota1,prota2);

/*Funciones*/
const retornArreglo = () => {
    return ['ABC',123,true];
}

const [letras,numeros,booleano] = retornArreglo();
console.log(letras,numeros,booleano);