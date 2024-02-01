let url =  " https://pokeapi.co/api/v2/pokemon/";
let card = document.getElementById("card");
let btn =  document.getElementById("button");
let semiCircle = document.getElementById("semiCircle");
let types = document.querySelectorAll("#types span");
const typeColor = {
    bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
}


let appendTypes =(types,themeColor)=>{
    console.log(types)
    types.forEach((item)=>{
        let span = document.createElement("span"); 
         span.textContent = item.type.name;
         span.style.backgroundColor= `${themeColor}`
         document.querySelector("#types").appendChild(span);

    })
 
   

}

generateCard= (data) => {
    console.log(data);
        let hp = data.stats[0].base_stat;
        
        let imgSrc= data.sprites.other.dream_world.front_default;
        console.log(imgSrc);
        let pokeName = data.name;
        console.log(pokeName);
        let statAttack = data.stats[1].base_stat;
        let statDefense = data.stats[2].base_stat;
        let statSpeed = data.stats[5].base_stat;
        var themeColor = typeColor[data.types[0].type.name];
        console.log(themeColor);
       
        card.innerHTML = `
         <div id="semiCircle" style ="background-color: ${themeColor}"></div>
        <div class="hp">
         <p>HP ${hp}</p>
        </div>
         <img src="${imgSrc}" alt="">
         <h2 id="name">${pokeName}</h2>
         <div id="types">
            
         </div>
         <div id="stats">
             <div>
                 <p>${statAttack}</p>
                 <h4>Attack</h4>
             </div>
             <div>
                 <p>${statDefense}</p>
                 <h4>Defense</h4>
             </div>
             <div>
                 <p>${statSpeed}</p>
                 <h4>Speed</h4>
             </div>
            `
            appendTypes(data.types,themeColor);
            
};

let  getPokeData = ()=>{
  let id = Math.floor(Math.random()*150)+1;

 let finalUrl = url+id;
fetch(finalUrl)
        .then(response=>response.json())
        .then(data=>generateCard(data)) 
}

btn.addEventListener("click",getPokeData) ;
window.addEventListener("load",getPokeData) ;