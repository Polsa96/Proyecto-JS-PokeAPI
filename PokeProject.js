//List the first 150 Pokemons, the real 1st generation Pokemons, for this you will have to manage the asynchrony and make a request to retrieve the pokemons.
//In addition to paint dynamically each one of them.

const searchURLName = `https://pokeapi.co/api/v2/pokemon`; //  /1/
const searchURLImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`; //  /1.png




let imgTitle$$ = document.createElement(`img`);
imgTitle$$.src = './images/Title.png';
imgTitle$$.alt = 'pokemon';
imgTitle$$.classList.add('title');
document.body.appendChild(imgTitle$$);


let divGeneral$$ = document.createElement(`div`);
divGeneral$$.classList.add('general');








let objectPokemon = [];

//FETCH y función principal
for (let i = 0; i < 150; i++) {
fetch(`${searchURLName}/${i + 1}/`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      console.log(i + 1, res.forms[0].name);
      objectPokemon.push({number:i+1,name:res.forms[0].name,img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`,types:res.types});
      /*img:res.sprites.other.official-artwork.front_default*/
      ordenarPokemons();
      showPokemon();
      
      

    });

    
}

//ORDENA pokemons
async function ordenarPokemons(){
  if(objectPokemon.length==150){
    await objectPokemon.sort((a,b)=>{
      return a.number - b.number;
    })
    await console.log('estem dins',objectPokemon);
  }
  
}

//MUESTRA pokemons
const showPokemon = ()=>{
  if(objectPokemon.length==150){
    for (let i = 0; i < 150; i++) {
      let divPokemon$$=document.createElement('div');
      divPokemon$$.classList.add('general--poke');

      let divWriting$$=document.createElement('div');
      divWriting$$.classList.add('general--poke--writing');
      //Escriu el nombre
      let newNumber$$ = document.createElement(`p`);
      newNumber$$.textContent=`${objectPokemon[i].number}`;
      newNumber$$.classList.add('general--poke--writing--number');
      divWriting$$.appendChild(newNumber$$);

      //Escriu el nom
      let newName$$ = document.createElement(`p`);
      newName$$.textContent=`${objectPokemon[i].name}`;
      newName$$.classList.add('general--poke--writing--name');
      divWriting$$.appendChild(newName$$);

      divPokemon$$.appendChild(divWriting$$);

      //Dibuixa la pokeball de fons
      let pokeball$$ = document.createElement('div'); //Pokeball
      pokeball$$.classList.add('general--poke--pokeball');

      //Dibuixa la imatge
      let newImg$$ = document.createElement('img');
      newImg$$.src = objectPokemon[i].img;
      newImg$$.alt = objectPokemon[i].name;
      newImg$$.classList.add('general--poke--pokeball--image');
      pokeball$$.appendChild(newImg$$);

      divPokemon$$.appendChild(pokeball$$);

      //Escriu el tipus
      let divTypes$$ = document.createElement('div'); //Pokeball
      divTypes$$.classList.add('general--poke--types');
      objectPokemon[i].types.map((type)=>{
        let newType$$ =document.createElement('p');
        newType$$.classList.add('general--poke--types--type');
        newType$$.classList.add(`${type.type.name}`);
        newType$$.textContent=`${type.type.name}`;
        divTypes$$.appendChild(newType$$);
      })
      divPokemon$$.appendChild(divTypes$$);

      

      divGeneral$$.appendChild(divPokemon$$);
    }
  }
}





document.body.appendChild(divGeneral$$);




