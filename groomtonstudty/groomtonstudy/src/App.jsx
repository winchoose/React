import { all, left, nav, grape, champion } from './App.css.ts';
import Nav from './components/nav';
import Grape from './components/grape';
import Champion from './components/champion';
import { useState } from 'react';


function App() {

  const [selectedChampion, setSelectedChampion] = useState(null);

  return (
    <div className={all}>
      <div className={left}>
        <div className={nav}>
          <Nav />
        </div>
        <div className={grape}>
          <Grape selectedChampion={selectedChampion} />
        </div>
      </div>
      <div className={champion}>
        <Champion onChampionClick={setSelectedChampion} />
      </div>
    </div>
  );
}

export default App;
