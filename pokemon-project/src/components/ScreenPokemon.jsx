import './ScreenPokemon.css'

const ScreenPokemon = ({ pokemones, position}) => {
    console.log("New position: " + position)
    return (
      <div className='ScreenPokemon'>
        {pokemones.map((pokemon, idx) => (
          <div key={pokemon.id} className="pokemon-card" style={{backgroundColor: idx === position ? "rgba(175, 169, 196, 0.5)" : "transparent"}}>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    );
  };


export default ScreenPokemon;