import bailey_side from './img/bailey/bailey_washed_suede_tobacco_side.jpg'
import bailey_oh from './img/bailey/bailey_washed_suede_tobacco_oh.jpg'


function App() {
  return (
    <div className="App">
      
      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={bailey_side} 
          onMouseOver={e => (e.currentTarget.src = bailey_oh)} 
          onMouseOut={e => (e.currentTarget.src = bailey_side)}
          alt='shoes'/>
        <p className='deal'>-30%</p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>CRAIGHOUSE LEATHER</h2>
          <p><span className='deal-price'>190,00$</span> <span className='regular-price'>220,00$</span></p>
        </div>
      </div>



    </div>

  );
}

export default App;
