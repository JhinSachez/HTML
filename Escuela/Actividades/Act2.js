const nombre = document.getElementById("nombre")
const lastName = document.getElementById("apellido")
const address = document.getElementById("direccion")
const age = document.getElementById("edad")
const couple = document.getElementById("Check")
const btn = document.getElementById("btn")
const bold = document.getElementById("Resultados")
const num1 = document.getElementById("Suma1")
const num2 = document.getElementById("Suma2")
const add = document.getElementById("Sumar")
const sub = document.getElementById("Restar")
const op = document.getElementById("Operaciones")

btn.addEventListener('click',Consola);
add.addEventListener('click',Suma);
sub.addEventListener('click',Resta);



function Consola(){
console.log(nombre.value,lastName.value,);
const paragraph = document.createElement("p");
paragraph.innerHTML = "Name: " + nombre.value + "<br>lastname: " + lastName.value + "<br>address: " + address.value + "<br>age: " + age.value + "<br>couple " + couple.checked;
bold.append(paragraph);
}

console.log(bold)

function Suma(){
    const s = document.createElement("n");
    s.innerHTML = parseInt(num1.value) + parseInt(num2.value)
    op.append(s);
}

function Resta(){
    const r = document.createElement("n");
    r.innerHTML = parseInt(num1.value) - parseInt(num2.value)
    op.append(r);
}