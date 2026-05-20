import './App.css';
import { useState } from 'react';
import Slider from './Slider';

function App() {
  const [show, setShow] = useState(true);

  const showSlider = () => setShow(!show);

  return (
    <main className="app">
      <div className="slider-card">
        <button className="toggle-button" onClick={showSlider}>
          {show ? 'Hide' : 'Show'} slider
        </button>

        {show && <Slider />}
      </div>
    </main>
  );
}

export default App;