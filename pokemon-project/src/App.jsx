import './App.css'
import GameBoyLogo from './assets/gameboybrand.png'
import Nintendo from './assets/nintendo.png'
import Background from './assets/background.png'
import ScreenPokemon from './components/ScreenPokemon'
import BattleScreen from './components/BattleScreen'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [playerHealth, setPlayerHealth] = useState(100)
  const [enemyHealth, setEnemyHealth] = useState(100)
  const [startGame, setStartGame] = useState(false)
  const [myPokeSelection, setMyPokeSelection] = useState([])
  const [computerPokeSelection, setComputerPokeSelection] = useState([])
  const [pokemones, setPokemones] = useState([])
  const [position, setPosition] = useState(0)
  const [powerOn, setPowerOn] = useState(false) // Estado para controlar si está encendido o no
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'

  const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const pokemonData = async (pokeUrl) => {
    const response = await fetchData(pokeUrl)
    const dataPromises = response.results.map((poke, idx) => fetchData(pokeUrl + '/' + poke.name))
    const pokemonWithImages = await Promise.all(dataPromises)
    setPokemones(pokemonWithImages)
    console.log(pokemonWithImages)
  }

  useEffect(() => {
    pokemonData(pokeUrl)
  }, [])

  // Función para manejar el evento de encendido
  const handlePowerButton = () => {
    setPowerOn(true) // Cambiar el estado a encendido al presionar el botón
  }

  const handleAttack = async (player) => {

    const damage = Math.floor(Math.random() * 10)
    
    if(player){
      const newEnemyHealth = enemyHealth - damage
      setEnemyHealth(newEnemyHealth)
      
      setTimeout(() => {
        enemyTurn()
      }, 1000);

    } else {
      const newPlayerHealth = playerHealth - damage
      setPlayerHealth(newPlayerHealth)
    }

    console.log('Attack')
  }

  const handleDefense = async (player) => {
    if(player){
      const randomEvent = Math.floor(Math.random() * 2)
      if(randomEvent === 0){
        const newPlayerHealth = playerHealth - 5
        setPlayerHealth(newPlayerHealth)

        setTimeout(() => {
          enemyTurn()
        } , 1000)
      } else {
        const newPlayerHealth = playerHealth + 10
        setPlayerHealth(newPlayerHealth)
      }
    }
    else {
      const randomEvent = Math.floor(Math.random() * 2)
      if(randomEvent === 0){
        const newEnemyHealth = enemyHealth - 5
        setEnemyHealth(newEnemyHealth)

        setTimeout(() => {
          enemyTurn()
        } , 1000)
      } else {
        const newEnemyHealth = enemyHealth + 10
        setEnemyHealth(newEnemyHealth)
      }
    }

    console.log('Defense')
  }

  const enemyTurn = () => {

    const enemyDecision = Math.floor(Math.random() * 2)
    if(enemyDecision === 0){
      handleAttack(false)
    } else {
      handleDefense(false)
    }
  }

  const handlePosition = (forward) => {
    if(!forward && position <= 0) return;
    if(forward && position >= 19) return;
    if(!forward){
      setPosition(position - 1)
    } else {
      setPosition(position + 1)
    }
  }

  const handleStart = () => {
    setStartGame(true)
  }

  const filterSelection = () => {
    const mySelection = pokemones.filter((value, idx) => position === idx);
    setMyPokeSelection(mySelection)
    computerSelection()
  }

  const computerSelection = () => {
    const randomPosition = Math.floor(Math.random() * 20)
    const computerSelection = pokemones.filter((value, idx) => randomPosition === idx);
    setComputerPokeSelection(computerSelection)
  }

  return (
    <div className={"main-container"} style={{ backgroundImage: powerOn ? `url(${Background})` : 'none' }}>
      <div className="header">
        <h1>Gameboy Advance Emulator</h1>
      </div>
      <div className="layout">
        <div className="layout-game">
          <div className="left-part">
            <div className='divider'></div>
            <div className='cross'>
              <div className='cross-left'>
                <button className='left' onClick={() => handlePosition(false)}></button>
              </div>
              <div className='cross-middle'>
                <button className='up'></button>
                <button className='middle'></button>
                <button className='down'></button>
              </div>
              <div className='cross-right'>
                <button className='right' onClick={() => handlePosition(true)}></button>
              </div>
            </div>
            <div className='start-select'>
              <div className='start'>
                <p>start</p>
                <button className='start-button' onClick={()=> handleStart()}></button>
              </div>
              <div className='select'>
                <p>select</p>
                <button className='select-button' onClick={filterSelection}></button>
              </div>
            </div>
          </div>
          <div className="screen">
            <div className="nintendo-logo">
              <img src={Nintendo} alt="Nintendo" className='nintendo'/>
            </div>
            <div className="container-screen">
              <div className="screen-layout">
                {powerOn && (
                  startGame ? (
                  <BattleScreen 
                    enemyHealth={enemyHealth}
                    playerHealth={playerHealth}
                    myPokeSelection={myPokeSelection} 
                    computerPokeSelection={computerPokeSelection}
                  />
                ) : (
                  <ScreenPokemon pokemones={pokemones} position={position}/>
                )
                )}
              </div>
              <div className="brand-name">
                <img src={GameBoyLogo} alt="Gameboy Advance" className='logo'/>
              </div>
            </div>
          </div>
          <div className="right-part">
            {/* Botón de encendido */}
            <div className='power'>
              <button className='power-button' onClick={handlePowerButton}></button>
            </div>
            <div className="right-buttons">
              <div className='letter-button'>
                <button className='A' onClick={handleAttack}>A</button>
              </div>
              <div className='letter-button'>
                <button className='B' onClick={handleDefense}>B</button>
              </div>
            </div>
            <div className='fans'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

