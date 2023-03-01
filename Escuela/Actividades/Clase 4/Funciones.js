function funcionNormie ( param1,param2){
    const result=param1+param2;
    console.log(result);
}
funcionNormie("hola","mundo");

const constFunction = (elem) => {
    console.log(typeof(elem));
}

constFunction(true);
constFunction(1);

const btnsuma = document.getElementById("suma")
const btnresta = document.querySelector(".resta")
const n1 = 1598;
const n2 = 115;

btnsuma.addEventListener('click',()=>{
    console.log(n1+n2);
})

btnresta.addEventListener('click',()=>{
    console.log(n1-n2);
})

const multiplicacion = (A,B) => {
    return A*B;
}

const division = (A,B) => {
    return A / B;
}

const operarNumeros = (A,B,funcion) => {
    return funcion(A,B);
}

const multiResult = operarNumeros(n1,n2,multiplicacion);
const diviResult = operarNumeros(n1,n2,division);
console.log("* = ",multiResult, " / =", diviResult);

/*Arreglos*/
const obj1 = {id:1,nombre:"Diego", edad:21}
const obj2 = {id:2,nombre:"Pancho", edad:22}
const obj3 = {id:3,nombre:"Jose", edad:23}

const arrSimple = [obj2]
arrSimple.push(obj3);
console.log(arrSimple)
arrSimple.push(obj1);
const personaIdmenor = arrSimple.filter((obj)=>{
    return obj.id<=2;
})
console.log(personaIdmenor,arrSimple);

const arrResult = document.getElementById("array");

arrSimple.map((objetillo)=>{
    const p = document.createElement("p");
    p.innerText = `El sujeto '${objetillo.id}' llamado ${objetillo.nombre} tiene ${objetillo.edad}`;
    arrResult.append(p);
});


const lastelm = arrSimple.pop();
console.log(lastelm,arrSimple.length);