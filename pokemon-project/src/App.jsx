import './App.css'
import GameBoyLogo from './assets/gameboybrand.png';
import Nintendo from './assets/nintendo.png'; 

function App() {

  return (
      <div className="main-container">
        <div className="layout">
        <div className="layout-game">

          <div className="left-buttons">

            <div className='cross'>
              <div className='cross-left'>
                <button className='left'></button>
              </div>
              <div className='cross-middle'>
                <button className='up'></button>
                <button className='middle'></button>
                <button className='down'></button>
              </div>
              <div className='cross-right'>
                <button className='right'></button>
              </div>
              
              
              
              
            </div>

          </div>
          
          <div className="screen">

            <div className="nintendo-logo">
              <img src={Nintendo} alt="Nintendo" className='nintendo'/>
            </div>

            <div className="container-screen">
              <div className="screen-layout"></div>
              <div className="brand-name">
                <img src={GameBoyLogo} alt="Gameboy Advance" className='logo'/>
              </div>
            </div>
          </div>

          <div className="right-buttons">
            <div className='letter-button'>
              <button className='A'>A</button>
            </div>
            <div className='letter-button'>
              <button className='B'>B</button>
            </div>

          </div>

        </div>
        </div>

      </div>
  )
}

export default App
