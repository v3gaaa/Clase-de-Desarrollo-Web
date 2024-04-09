import './App.css'

function App() {

  return (
      <div className="main-container">

        <div className="layout">
        <div className="layout-game">

          <div className="left-buttons">

            <div className='cross'>
              <div className='empty'></div>
              <button className='up'>UP</button>
              <div className='empty'></div>
              <button className='left'>LEFT</button>
              <div className='empty'></div>
              <button className='right'>RIGHT</button>
              <div className='empty'></div>
              <button className='down'>DOWN</button>
              <div className='empty'></div>
            </div>
            
          </div>

          <div className="container-screen">
            <div className="screen-layout"></div>
            <div className="brand-name">
              <h1>Gameboy Advanced</h1>
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
