// setTimeout(()=>{console.log("1 sec ha pasado")},1000);
// setTimeout(()=>{console.log("3 sec ha pasado")},3000);
// setTimeout(()=>{console.log("6 sec ha pasado")},6000);


// const Rutina1seg = setInterval(() => {console.log("hola 1 segundo")},1000);

// setTimeout(()=>{
//     clearInterval(Rutina1seg);
// },5000)

const getWithAsync = async() => {
  try {        
      const resp = await fetch(`https://api.thecatapi.com/v1/images/search`);    
      const text = await resp.json();
      console.log(text);     
      const arr = document.getElementById("pokemon");
      text.map(({url}) =>
      {
        const li = document.createElement("li")
        arr.append(li);
        const img = document.createElement("img");
        img.src = url;
        li.append(img);
      })
  } catch (error) {
      console.error(error);
  }
}

getWithAsync();