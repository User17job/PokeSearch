// traer los elementos 
const imG = document.querySelector("figure"); 
const sInput = document.querySelector('#search-input');

const sButton = document.querySelector("#search-button");
const pokemonImg = document.querySelector("#sprite");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const pokemonHeight = document.querySelector("#height");
const pokemonType = document.querySelector("#types");
const pokemonHp = document.querySelector("#hp");
const pokemonWeight = document.querySelector("#weight")
const pokemonSpeed = document.querySelector("#speed");
const pokemonAttack = document.querySelector("#attack");
const pokemonSAttack = document.querySelector("#special-attack");
const pokemonDefense = document.querySelector("#defense");
const pokemonSDefense = document.querySelector("#special-defense");
let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let images= [];
let iniciar;
let currentImageIndex= 0;





const obtenerPoks =async () => {
resetAll();
images= [];
try{
if(sInput.value){
            let id = sInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`);
        const data = await response.json();
        console.log(data);
          // 
        image1 = data.sprites.back_default;
        image2 = data.sprites.front_default;
        pokemonImg.src=image2;
    // 
        image4 = data.sprites.back_shiny;
        image3 = data.sprites.front_shiny;
    // // 
        image5 = data.sprites.back_female
        image6 = data.sprites.front_female
    // // 
        image7 = data.sprites.back_shiny_female
        image8 = data.sprites.front_shiny_female
    // // ;
    images.push(image1);
    if(image1){
        images.push(image1);
        if(image2){
            images.push(image2);
            if(image3){
                images.push(image3);
                if(image4){
                    images.push(image4);
                    if(image5){
                        images.push(image5);
                        if(image6){
                            images.push(image6);
                            if(image7){
                                images.push(image7);
                                if(image8){
                                    images.push(image8);
                                }
                            }
                      
                        }
                
                    }
                }
            }
        }
    
    }
    
    let uno = 1;    
    
    // aplicar las proiedades
    if(uno ===1){
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        pokemonWeight.textContent = `${data.weight}`;
        pokemonHeight.textContent = `${data.height}`;
    
        types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`).join('');
    
        pokemonHp.textContent=data.stats[0].base_stat
        pokemonSpeed.textContent=data.stats[5].base_stat
        pokemonAttack.textContent=data.stats[1].base_stat
        pokemonSAttack.textContent=data.stats[3].base_stat
        console.log()
        pokemonDefense.textContent=data.stats[2].base_stat
        pokemonSDefense.textContent=data.stats[4].base_stat

        pokemonImg.style.opacity='100%'
        if(images.length != 0){
            console.log(images)
            iniciar = setInterval(changeImage, 4000); 
        }
        uno=2;
    }else{
    uno=1
    }
    
}else{
console.log('Oopsss');
}
}catch(err){
    pokemonImg.style.opacity='10%'
    resetAll();
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
}
}
if(pokemonImg.src===""){
    pokemonImg.style.opacity='10%'
}else{
    pokemonImg.style.opacity='100%'
}

function resetAll(){

    pokemonImg.src='';
    pokemonImg.classList.remove('imo');
    images= [];
    sInput.textContent="";
    pokemonName.innerHTML=``;
    pokemonId.innerHTML=``;
    pokemonHeight.innerHTML=``;
    pokemonType.innerHTML=``;
    pokemonHp.innerHTML=``;
    pokemonWeight.innerHTML=``;
    pokemonSpeed.innerHTML=``;
    pokemonAttack.innerHTML=``;
    pokemonSAttack.innerHTML=``;
    pokemonDefense.innerHTML=``;
    pokemonSDefense.innerHTML=``;
    clearInterval(iniciar);
}

function changeImage() {
    pokemonImg.src = images[currentImageIndex]; // Cambia la imagen
    currentImageIndex = (currentImageIndex + 1) % images.length; // Avanza al siguiente índice
}

sButton.addEventListener('click', obtenerPoks);
