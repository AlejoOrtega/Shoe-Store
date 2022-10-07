import bailey_side from './img/bailey/bailey_washed_suede_tobacco_side.jpg'
import bailey_oh from './img/bailey/bailey_washed_suede_tobacco_oh.jpg'

import battle_side from './img/battle/battle_brown_side.jpg'
import battle_top from './img/battle/battle_brown_top.jpg'

import cedar_oh from './img/cedar/cedar_washed_suede_tan_oh.jpg'
import cedar_side from './img/cedar/cedar_washed_suede_tan_side.jpg'

import craighouse_oh from './img/craighouse/craighouse_leather_tan_oh.jpg'
import craighouse_side from './img/craighouse/craighouse_leather_tan_side.jpg'

import dylan_oh from './img/dylan-drum/dylan_drum_dye_brown_oh.jpg'
import dylan_side from './img/dylan-drum/dylan_drum_dye_brown_side.jpg'

import marley_oh from './img/marley/marley_washed_suede_cognac_oh.jpg'
import marley_side from './img/marley/marley_washed_suede_cognac_side.jpg'

function App() {
  return (
    <div className="App">

      {/* 4 Craighouse Shoes */}

      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={craighouse_side} 
          onMouseOver={e => (e.currentTarget.src = craighouse_oh)} 
          onMouseOut={e => (e.currentTarget.src = craighouse_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-30%</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>CRAIGHOUSE LEATHER</h2>
          <p><span className='deal-price'>190,00$</span> <span className='regular-price'>220,00$</span></p>
        </div>
      </div>
 

      {/* 2 Battle Shoes */}

      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={battle_side} 
          onMouseOver={e => (e.currentTarget.src = battle_top)} 
          onMouseOut={e => (e.currentTarget.src = battle_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-50%</span><span className='eco'>Eco Sostenible</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>BATTLE BROWN</h2>
          <p><span className='deal-price'>240,00$</span> <span className='regular-price'>220,00$</span></p>
        </div>
      </div>

      
      {/* 1 Bailey Shoes */}

      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={bailey_side} 
          onMouseOver={e => (e.currentTarget.src = bailey_oh)} 
          onMouseOut={e => (e.currentTarget.src = bailey_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-25%</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>BALEY</h2>
          <p><span className='deal-price'>270,00$</span> <span className='regular-price'>300,00$</span></p>
        </div>
      </div>
  

      {/* 3 Cedar Shoes */}
      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={cedar_side} 
          onMouseOver={e => (e.currentTarget.src = cedar_oh)} 
          onMouseOut={e => (e.currentTarget.src = cedar_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-50%</span><span className='eco'>Eco Sostenible</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>CEDAR</h2>
          <p><span className='deal-price'>240,00$</span> <span className='regular-price'>220,00$</span></p>
        </div>
      </div>

      {/* 6 Marley Shoes */}
      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={marley_side} 
          onMouseOver={e => (e.currentTarget.src = marley_oh)} 
          onMouseOut={e => (e.currentTarget.src = marley_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-50%</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>MARLEY</h2>
          <p><span className='deal-price'>89,00$</span> <span className='regular-price'>110,00$</span></p>
        </div>
      </div>

      {/* 5 Dylan Shoes */}
      <div className='container'>
        <div className='like-button'>
          <span className='heart'>&hearts;</span>
        </div>
        <img className='show-image' 
          src={dylan_side} 
          onMouseOver={e => (e.currentTarget.src = dylan_oh)} 
          onMouseOut={e => (e.currentTarget.src = dylan_side)}
          alt='shoes'/>
        <p className='promotions'><span className='deal'>-50%</span><span className='eco'>Eco Sostenible</span></p>
        <div className='information'>
          <p>Hudson London</p>
          <h2>DYLAN DRUM</h2>
          <p><span className='deal-price'>240,00$</span> <span className='regular-price'>220,00$</span></p>
        </div>
      </div>
    </div>

  );
}

export default App;
