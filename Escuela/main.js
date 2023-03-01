//console.log("miVariable")

//var miVariable;

// const string1 = "aracely";
// const string2 = "arambula";

// const normie = "mi nombre es "+ string1 + "mi apellido es "+ string2;

// console.log(normie);

// const cool = `mi nombre es ${string1} y mi apellido es ${string2}`;

// console.log(cool);

//Tipos

// const string = "lalala"
// const num = 25
// const numd = 25.5
// const char = 'c'
// const arr = ["uno","dos","tres"]
// const obj = { propiedad:"soyunauto"}

// console.log(string, typeof(string))


const objetote = {
    escuela: "amerike",
    direccion: "montemorelos",
    color: "naranjoso",
    alumnos:[
        {
            nombre:"Francisco Gerardo",
            Hobbies:["ver peliculas"]
        },{
            nombre:"Ivan",
            Hobbies:["ver anime"]
        },{
            nombre:"Cristina",
            Hobbies:["jugar lol"]
        },
    ],
    profesores:[
        {
            nombre:"profe chino",
            materias:["leng interp", "informatica grafica"],
            mascota:{
                nombre:"mika",
                raza:"pitbull"
            }
        }
    ]

}

//console.log(objetote.profesores[0].mascota.nombre)

const InputName = document.getElementById("nombre");

const btn = document.getElementById("btnEjecutar");

const bold = document.getElementById("resultado")

btn.addEventListener('click',monstrarenConsola);

function monstrarenConsola(){
    console.log(InputName.value);
    const paragraph = document.createElement("p");
    paragraph.innerHTML= InputName.value;
    bold.append(paragraph);
    btn.removeEventListener('click',monstrarenConsola);
}

console.log(bold)


