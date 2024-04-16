import React from 'react'
import './BattleScreen.css'

const BattleScreen = ({myPokeSelection, computerPokeSelection, enemyHealth, playerHealth})  => {
  console.log(myPokeSelection, computerPokeSelection)
  
  return (
    <div className='BattleContainer'>

        <div className="enemy">
            <div className="enemy-health">
                <h1>Enemy Health: {enemyHealth}</h1>
            </div>
           <div className="enemy-image">
                <img src={computerPokeSelection[0].sprites.front_default} />
           </div>
            
        </div>

        <div className="player">
            <div className="player-image">
                <img src={myPokeSelection[0].sprites.back_default} />
            </div>
            <div className="player-health">
                <h1>Player Health: {playerHealth}</h1>
            </div>
            
        </div>

    </div>
  )
}

export default BattleScreen;
