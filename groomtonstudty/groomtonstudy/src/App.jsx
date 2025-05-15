import { all, left, nav, grape, champion } from './App.css.ts';
import Nav from './components/nav';
import Grape from './components/grape';
import Champion from './components/champion';



function App() {
  return (
    <div className={all}>
      <div className={left}>
        <div className={nav}>
          <Nav />
        </div>
        <div className={grape}>
          <Grape />
        </div>
      </div>
      <div className={champion}>
        <Champion />
      </div>
    </div>
  );
}

export default App;
